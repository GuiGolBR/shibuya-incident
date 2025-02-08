window.onload = function () {
    const map = document.getElementById('map');
    const buttons = document.querySelectorAll("#buttons .button");

    // Define episodes with image URLs and pin locations
    const episodes = {
        1: {
            title: "Episode 31 ~ 32",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map32.jpg",
            pins: [
                { x: 1127, y: 380, label: "Hey Joe", description: "Fuck you" },
                { x: 790, y: 680, label: "Hey Joe", description: "Fuck you" },
                { x: 1270, y: 825, label: "Hey Joe", description: "Fuck you" },
                { x: 1180, y: 590, label: "Hey Joe", description: "Fuck you" },
                { x: 540, y: 495, label: "Hey Joe", description: "Fuck you" },
                { x: 405, y: 550, label: "Hey Joe", description: "Fuck you" }
            ]
        },
        2: {
            title: "Episode 33 ~ 34",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map34.jpg",
            pins: [
                { x: 100, y: 150, label: "Underground Passage", description: "A dark and eerie passage." },
                { x: 300, y: 350, label: "Battlefield Site", description: "A major fight happened here." }
            ]
        },
        3: {
            title: "Episode 35 ~ 37",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map37.jpg",
            pins: [
                { x: 100, y: 150, label: "Underground Passage", description: "A dark and eerie passage." },
                { x: 300, y: 350, label: "Battlefield Site", description: "A major fight happened here." }
            ]
        },
        4: {
            title: "Episode 38 ~ 39",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map39.jpg",
            pins: [
                { x: 100, y: 150, label: "Underground Passage", description: "A dark and eerie passage." },
                { x: 300, y: 350, label: "Battlefield Site", description: "A major fight happened here." }
            ]
        },
        5: {
            title: "Episode 40 ~ 41",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map41.jpg",
            pins: [
                { x: 100, y: 150, label: "Underground Passage", description: "A dark and eerie passage." },
                { x: 300, y: 350, label: "Battlefield Site", description: "A major fight happened here." }
            ]
        },
        6: {
            title: "Episode 42 ~ 45",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map45.jpg",
            pins: [
                { x: 100, y: 150, label: "Underground Passage", description: "A dark and eerie passage." },
                { x: 300, y: 350, label: "Battlefield Site", description: "A major fight happened here." }
            ]
        },
        7: {
            title: "Episode 46 ~ 47",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map47.jpg",
            pins: [
                { x: 100, y: 150, label: "Underground Passage", description: "A dark and eerie passage." },
                { x: 300, y: 350, label: "Battlefield Site", description: "A major fight happened here." }
            ]
        }
    };

    // Preload images for faster switching
    Object.values(episodes).forEach(ep => {
        const img = new Image();
        img.src = ep.imgSrc;
    });

    // Create persistent elements
    const episodeText = document.createElement('h3');
    episodeText.className = "text";

    const image = document.createElement('img');
    image.alt = "Jujutsu Kaisen Map";

    const pinContainer = document.createElement('div'); // Holds the pins
    pinContainer.className = "pin-container";

    // Create modal structure with display set to none
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.style.display = "none"; // Initially hide the modal
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 id="modal-title"></h2>
            <p id="modal-description"></p>
        </div>
    `;
    document.body.appendChild(modal);

    // Append elements to map container
    map.appendChild(episodeText);
    map.appendChild(image);
    map.appendChild(pinContainer);

    // Modal event listener
    const closeModal = modal.querySelector(".close");
    closeModal.addEventListener("click", () => {
        modal.style.opacity = "0";  // Fade out the modal
        setTimeout(() => {
            modal.style.display = "none";  // Hide the modal after fade-out
        }, 300);
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.opacity = "0";  // Fade out the modal
            setTimeout(() => {
                modal.style.display = "none";  // Hide the modal after fade-out
            }, 300);
        }
    });

    // Function to update map content without removing elements
    const buildMap = async (episodeChoice) => {
        if (!episodes[episodeChoice]) {
            console.error("Invalid episode choice:", episodeChoice);
            return;
        }

        // Fade out for smooth transition
        map.style.opacity = "0";

        setTimeout(() => {
            // Update content
            episodeText.innerHTML = episodes[episodeChoice].title;
            image.src = episodes[episodeChoice].imgSrc;

            // Clear previous pins
            pinContainer.innerHTML = "";

            // Add new pins
            episodes[episodeChoice].pins.forEach(pin => {
                const pinElement = document.createElement('img');
                pinElement.src = "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/pin_circle.png";
                pinElement.className = "pin";
                pinElement.style.left = `${pin.x}px`;
                pinElement.style.top = `${pin.y}px`;
                pinElement.title = pin.label;

                // Add click event to open modal
                pinElement.addEventListener("click", () => {
                    const modalTitle = document.getElementById("modal-title");
                    const modalDescription = document.getElementById("modal-description");

                    if (modalTitle && modalDescription) {
                        modalTitle.innerText = pin.label;
                        modalDescription.innerText = pin.description;
                        modal.style.display = "block";  // Show the modal
                        setTimeout(() => {
                            modal.style.opacity = "1";  // Fade in the modal
                        }, 10);  // Small delay for smooth transition
                    }
                });

                pinContainer.appendChild(pinElement);
            });

            // Fade in
            map.style.opacity = "1";
        }, 300);
    };

    // Function to highlight the selected button
    const highlightButton = (selectedId) => {
        buttons.forEach(button => {
            if (parseInt(button.id) === selectedId) {
                button.classList.add("selected");
                button.style.backgroundColor = "rgba(14, 44, 83, 0.765)";
                button.style.color = "#fff";
            } else {
                button.style.backgroundColor = "";
                button.style.color = "";
                button.classList.remove("selected");
                button.style.border = "dashed white";
            }
        });
    };

    // Attach event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const episodeChoice = parseInt(this.id);
            buildMap(episodeChoice);
            highlightButton(episodeChoice);
        });
    });

    // Default selection on load
    buildMap(1);
    highlightButton(1);
};

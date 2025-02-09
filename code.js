window.onload = function () {
    const map = document.getElementById('map');
    const buttons = document.querySelectorAll("#buttons .button");

    // Define episodes with image URLs and pin locations in percentages
    const episodes = {
        1: {
            title: "Episode 31 ~ 32",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map32.jpg",
            pins: [
                {
                    x: 66, y: 13,
                    texts: ["20:14 Shibuya Station, Exit 13 (outside the gates)"],
                    descriptions: ["Nanami's team (Nanami, Ino, Fushiguro) and Ijichi are on standby."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/32-3.jpg"]
                },
                {
                    x: 78, y: 75,
                    texts: ["20:14 JL Shibuya Station New South Exit (outside the gates)"],
                    descriptions: ["Kusakabe Team (Kusakabe, Panda) is on standby."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/32-4.jpg"]
                },
                {
                    x: 70.8, y: 43,
                    texts: ["20:31 Bunkamura Street Dogenzaka 2-chome East (inside the curtain)", "20:40 Shibuya Station B5F Shintoshin Line Platform"],
                    descriptions: ["Gojo Satoru has arrived.", "Gojo begins fighting with Jogo, Hanami, and Choso."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/32-2-2.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/32-2-1.jpg"]
                },
                {
                    x: 39.5, y: 54,
                    texts: ["20:14 Shibuya Mark City Restaurant Avenue entrance (outside the gates)"],
                    descriptions: ["The Zenin team (Naobito, Maki, Nobara) and Nitta are on standby."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/32-1.jpg"]
                },
                {
                    x: 19, y: 28,
                    texts: ["20:39 Aoyama Cemetery", "20:51 Exit 2 of the downtown metro Meiji-Jingumae Station", "21:03 B2F, Meiji-Jingumae Station, downtown", "21:15 B4F , Meiji-Jingumae Station, downtown"],
                    descriptions: ["The Mei Mei Squad (Mei Mei, Ui Ui, and Itadori) were on standby, and as a curtain similar to that in Shibuya had been lowered at Meiji-Jingumae Station, they began to move.", "The Mei Mei Team (Mei Mei, Ui Ui, Itadori) arrives at Meiji-Jingumae Station. They then split into Itadori, Mei Mei, and Ui Ui.", "Itadori encounters Ko Guy.", "After defeating Ko Guy, Itadori reunites with Mei Mei and Ui Ui."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/32-5-4.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/32-5-3.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/32-5-2.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/32-5-1.jpg"]
                },
                {
                    x: 8, y: 36,
                    texts: ["21:14 Toshin Subway Meiji-Jingumae Station B5F Shintoshin Line Platform"],
                    descriptions: ["Mahito starts moving from Meiji-Jingu-mae Station."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/32-6.jpg"]
                }
            ]
        },
        2: {
            title: "Episode 33 ~ 34",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map34.jpg",
            pins: [
                {
                    x: 10, y: 20,
                    texts: ["20:14 Shibuya Station, Exit 13 (outside the gates)"],
                    descriptions: ["Nanami's team (Nanami, Ino, Fushiguro) and Ijichi are waiting."],
                    images: []
                },
                {
                    x: 25, y: 40,
                    texts: ["20:14 JL Shibuya Station New South Exit (outside the gates)"],
                    descriptions: ["Kusakabe Team (Kusakabe, Panda) is on standby."],
                    images: []
                },
                {
                    x: 30, y: 60,
                    texts: ["20:31 Bunkamura Street Dogenzaka 2-chome East (inside the curtain)"],
                    descriptions: ["Gojo Satoru has arrived."],
                    images: []
                },
                {
                    x: 20, y: 50,
                    texts: ["20:14 Shibuya Mark City Restaurant Avenue entrance (outside the gates)"],
                    descriptions: ["The Zenin team (Naobito, Maki, Nobara) and Nitta are on standby."],
                    images: []
                },
                {
                    x: 50, y: 45,
                    texts: ["20:39 Aoyama Cemetery"],
                    descriptions: ["The Meimei Squad (Meimei, Ui Ui, and Itadori) were waiting, and as a curtain similar to that in Shibuya had been lowered at Meiji-Jingumae Station, they began to move."],
                    images: []
                },
                {
                    x: 35, y: 55,
                    texts: ["21:14 Toshin Subway Meiji-Jingumae Station B5F Shintoshin Line Platform"],
                    descriptions: ["Mahito starts moving from Meiji-Jingu-mae Station."],
                    images: []
                }
            ]
        },
        3: {
            title: "Episode 35 ~ 37",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map37.jpg",
            pins: [
                {
                    x: 10, y: 20,
                    texts: ["20:14 Shibuya Station, Exit 13 (outside the gates)"],
                    descriptions: ["Nanami's team (Nanami, Ino, Fushiguro) and Ijichi are waiting."],
                    images: []
                },
                {
                    x: 25, y: 40,
                    texts: ["20:14 JL Shibuya Station New South Exit (outside the gates)"],
                    descriptions: ["Kusakabe Team (Kusakabe, Panda) is on standby."],
                    images: []
                },
                {
                    x: 30, y: 60,
                    texts: ["20:31 Bunkamura Street Dogenzaka 2-chome East (inside the curtain)"],
                    descriptions: ["Gojo Satoru has arrived."],
                    images: []
                },
                {
                    x: 20, y: 50,
                    texts: ["20:14 Shibuya Mark City Restaurant Avenue entrance (outside the gates)"],
                    descriptions: ["The Zenin team (Naobito, Maki, Nobara) and Nitta are on standby."],
                    images: []
                },
                {
                    x: 50, y: 45,
                    texts: ["20:39 Aoyama Cemetery"],
                    descriptions: ["The Meimei Squad (Meimei, Ui Ui, and Itadori) were waiting, and as a curtain similar to that in Shibuya had been lowered at Meiji-Jingumae Station, they began to move."],
                    images: []
                },
                {
                    x: 35, y: 55,
                    texts: ["21:14 Toshin Subway Meiji-Jingumae Station B5F Shintoshin Line Platform"],
                    descriptions: ["Mahito starts moving from Meiji-Jingu-mae Station."],
                    images: []
                }
            ]
        },
        4: {
            title: "Episode 38 ~ 39",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map39.jpg",
            pins: [
                {
                    x: 10, y: 20,
                    texts: ["20:14 Shibuya Station, Exit 13 (outside the gates)"],
                    descriptions: ["Nanami's team (Nanami, Ino, Fushiguro) and Ijichi are waiting."],
                    images: []
                },
                {
                    x: 25, y: 40,
                    texts: ["20:14 JL Shibuya Station New South Exit (outside the gates)"],
                    descriptions: ["Kusakabe Team (Kusakabe, Panda) is on standby."],
                    images: []
                },
                {
                    x: 30, y: 60,
                    texts: ["20:31 Bunkamura Street Dogenzaka 2-chome East (inside the curtain)"],
                    descriptions: ["Gojo Satoru has arrived."],
                    images: []
                },
                {
                    x: 20, y: 50,
                    texts: ["20:14 Shibuya Mark City Restaurant Avenue entrance (outside the gates)"],
                    descriptions: ["The Zenin team (Naobito, Maki, Nobara) and Nitta are on standby."],
                    images: []
                },
                {
                    x: 50, y: 45,
                    texts: ["20:39 Aoyama Cemetery"],
                    descriptions: ["The Meimei Squad (Meimei, Ui Ui, and Itadori) were waiting, and as a curtain similar to that in Shibuya had been lowered at Meiji-Jingumae Station, they began to move."],
                    images: []
                },
                {
                    x: 35, y: 55,
                    texts: ["21:14 Toshin Subway Meiji-Jingumae Station B5F Shintoshin Line Platform"],
                    descriptions: ["Mahito starts moving from Meiji-Jingu-mae Station."],
                    images: []
                }
            ]
        },
        5: {
            title: "Episode 40 ~ 41",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map41.jpg",
            pins: [
                {
                    x: 10, y: 20,
                    texts: ["20:14 Shibuya Station, Exit 13 (outside the gates)"],
                    descriptions: ["Nanami's team (Nanami, Ino, Fushiguro) and Ijichi are waiting."],
                    images: []
                },
                {
                    x: 25, y: 40,
                    texts: ["20:14 JL Shibuya Station New South Exit (outside the gates)"],
                    descriptions: ["Kusakabe Team (Kusakabe, Panda) is on standby."],
                    images: []
                },
                {
                    x: 30, y: 60,
                    texts: ["20:31 Bunkamura Street Dogenzaka 2-chome East (inside the curtain)"],
                    descriptions: ["Gojo Satoru has arrived."],
                    images: []
                },
                {
                    x: 20, y: 50,
                    texts: ["20:14 Shibuya Mark City Restaurant Avenue entrance (outside the gates)"],
                    descriptions: ["The Zenin team (Naobito, Maki, Nobara) and Nitta are on standby."],
                    images: []
                },
                {
                    x: 50, y: 45,
                    texts: ["20:39 Aoyama Cemetery"],
                    descriptions: ["The Meimei Squad (Meimei, Ui Ui, and Itadori) were waiting, and as a curtain similar to that in Shibuya had been lowered at Meiji-Jingumae Station, they began to move."],
                    images: []
                },
                {
                    x: 35, y: 55,
                    texts: ["21:14 Toshin Subway Meiji-Jingumae Station B5F Shintoshin Line Platform"],
                    descriptions: ["Mahito starts moving from Meiji-Jingu-mae Station."],
                    images: []
                }
            ]
        },
        6: {
            title: "Episode 42 ~ 45",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map45.jpg",
            pins: [
                {
                    x: 10, y: 20,
                    texts: ["20:14 Shibuya Station, Exit 13 (outside the gates)"],
                    descriptions: ["Nanami's team (Nanami, Ino, Fushiguro) and Ijichi are waiting."],
                    images: []
                },
                {
                    x: 25, y: 40,
                    texts: ["20:14 JL Shibuya Station New South Exit (outside the gates)"],
                    descriptions: ["Kusakabe Team (Kusakabe, Panda) is on standby."],
                    images: []
                },
                {
                    x: 30, y: 60,
                    texts: ["20:31 Bunkamura Street Dogenzaka 2-chome East (inside the curtain)"],
                    descriptions: ["Gojo Satoru has arrived."],
                    images: []
                },
                {
                    x: 20, y: 50,
                    texts: ["20:14 Shibuya Mark City Restaurant Avenue entrance (outside the gates)"],
                    descriptions: ["The Zenin team (Naobito, Maki, Nobara) and Nitta are on standby."],
                    images: []
                },
                {
                    x: 50, y: 45,
                    texts: ["20:39 Aoyama Cemetery"],
                    descriptions: ["The Meimei Squad (Meimei, Ui Ui, and Itadori) were waiting, and as a curtain similar to that in Shibuya had been lowered at Meiji-Jingumae Station, they began to move."],
                    images: []
                },
                {
                    x: 35, y: 55,
                    texts: ["21:14 Toshin Subway Meiji-Jingumae Station B5F Shintoshin Line Platform"],
                    descriptions: ["Mahito starts moving from Meiji-Jingu-mae Station."],
                    images: []
                }
            ]
        },
        7: {
            title: "Episode 46 ~ 47",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map47.jpg",
            pins: [
                {
                    x: 10, y: 20,
                    texts: ["20:14 Shibuya Station, Exit 13 (outside the gates)"],
                    descriptions: ["Nanami's team (Nanami, Ino, Fushiguro) and Ijichi are waiting."],
                    images: []
                },
                {
                    x: 25, y: 40,
                    texts: ["20:14 JL Shibuya Station New South Exit (outside the gates)"],
                    descriptions: ["Kusakabe Team (Kusakabe, Panda) is on standby."],
                    images: []
                },
                {
                    x: 30, y: 60,
                    texts: ["20:31 Bunkamura Street Dogenzaka 2-chome East (inside the curtain)"],
                    descriptions: ["Gojo Satoru has arrived."],
                    images: []
                },
                {
                    x: 20, y: 50,
                    texts: ["20:14 Shibuya Mark City Restaurant Avenue entrance (outside the gates)"],
                    descriptions: ["The Zenin team (Naobito, Maki, Nobara) and Nitta are on standby."],
                    images: []
                },
                {
                    x: 50, y: 45,
                    texts: ["20:39 Aoyama Cemetery"],
                    descriptions: ["The Meimei Squad (Meimei, Ui Ui, and Itadori) were waiting, and as a curtain similar to that in Shibuya had been lowered at Meiji-Jingumae Station, they began to move."],
                    images: []
                },
                {
                    x: 35, y: 55,
                    texts: ["21:14 Toshin Subway Meiji-Jingumae Station B5F Shintoshin Line Platform"],
                    descriptions: ["Mahito starts moving from Meiji-Jingu-mae Station."],
                    images: []
                }
            ]
        },
        // Other episodes remain unchanged
    };

    // Block page scroll when modal is displayed
    const blockScroll = () => {
        document.body.style.overflow = "hidden";
    };

    // Allow page scroll when modal is hidden
    const allowScroll = () => {
        document.body.style.overflow = "";
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
            <div id="modal-content-container"></div>
        </div>
    `;
    document.body.appendChild(modal);

    // Modal event listener
    const closeModal = modal.querySelector(".close");
    closeModal.addEventListener("click", () => {
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
            allowScroll();  // Allow scroll after modal closes
        }, 300);
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.opacity = "0";  // Fade out the modal
            setTimeout(() => {
                modal.style.display = "none";  // Hide the modal after fade-out
                allowScroll();  // Allow scroll when modal is closed
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

            // Ensure the pin container is the same size and position as the image
            image.onload = () => {
                pinContainer.style.width = `${image.width}px`;
                pinContainer.style.height = `${image.height}px`;
                pinContainer.style.position = 'absolute';  // Align with the image
                pinContainer.style.top = `${image.offsetTop}px`; // Align top with image
                pinContainer.style.left = `${image.offsetLeft}px`; // Align left with image

                // Clear previous pins
                pinContainer.innerHTML = "";

                // Add new pins
                episodes[episodeChoice].pins.forEach(pin => {
                    const pinElement = document.createElement('img');
                    pinElement.src = "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/pin_circle.png";
                    pinElement.className = "pin";
                    pinElement.style.left = `${pin.x}%`;  // Use percentage-based positioning
                    pinElement.style.top = `${pin.y}%`;   // Use percentage-based positioning
                    pinElement.title = pin.texts[0]; // Show the first text in the tooltip

                    // Add click event to open modal
                    pinElement.addEventListener("click", () => {
                        const modalContentContainer = document.getElementById("modal-content-container");
                        modalContentContainer.innerHTML = "";  // Clear the content first

                        modal.style.display = "block";
                        blockScroll();  // Block scroll when modal opens
                        setTimeout(() => {
                            modal.style.opacity = "1";
                        }, 10);

                        // Iterate through texts, images, and descriptions in the order: text, image, description
                        for (let i = 0; i < Math.max(pin.texts.length, pin.images.length, pin.descriptions.length); i++) {
                            // Add text if available
                            if (i < pin.texts.length) {
                                const textElement = document.createElement("p");
                                textElement.innerText = pin.texts[i];
                                textElement.className = "modal-title"
                                modalContentContainer.appendChild(textElement);
                            }

                            // Add image if available
                            if (i < pin.images.length) {
                                const imageElement = document.createElement("img");
                                imageElement.src = pin.images[i];
                                imageElement.alt = "Image";
                                modalContentContainer.appendChild(imageElement);
                            }

                            // Add description if available
                            if (i < pin.descriptions.length) {
                                const descriptionElement = document.createElement("p");
                                descriptionElement.innerText = pin.descriptions[i];
                                descriptionElement.className = "modal-description"
                                modalContentContainer.appendChild(descriptionElement);

                                // Add '▼' after the description except for the last one
                                if (i < pin.descriptions.length - 1) {
                                    const triangleElement = document.createElement("p");
                                    triangleElement.innerText = "▼";
                                    triangleElement.className = "modal-arrow"
                                    modalContentContainer.appendChild(triangleElement);
                                }
                            }
                        }

                        modal.style.display = "block";  // Show the modal
                        setTimeout(() => {
                            modal.style.opacity = "1";  // Fade in the modal
                        }, 10);  // Small delay for smooth transition
                    });

                    pinContainer.appendChild(pinElement);
                });
            };

            // Add the image and pin container to the map once it's fully loaded
            map.innerHTML = "";  // Clear previous content
            map.appendChild(image);
            map.appendChild(pinContainer);

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

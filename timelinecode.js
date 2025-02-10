window.onload = function () {
    const timeline = document.getElementById("timeline");

    const events = {
        1: {
            time:"19:00",
            title:["Shibuya area"],
            description:["A veil will be lowered within a radius of approximately 400m around Tokyu Department Store's Toyoko Branch."]
        },
        2: {
            time:"20:14",
            title:["Shibuya Station, Central Tokyo Metro, Exit 13 (outside the gates)", "Shibuya Mark City Restaurant Avenue entrance (outside the gates)"],
            description:["Nanami's team (Nanami, Ino, Fushiguro) and Ijichi are on standby.", "The Zenin team (Naobito, Maki, Kugisaki) and Nitta are on standby."]
        }
    }

    const buildTl = () => {

        Object.values(events).forEach(i => {
            const content = document.createElement("div");
            content.className = "content";

            const text = document.createElement("div");
            text.className = "timeText";

            const time = document.createElement("p");
            time.className = "time";
            time.innerHTML = i.time;

            let num = 0

            Object.values(i.title).forEach(e => {
                const title = document.createElement("p");
                title.className = "timeTitle";
                title.innerHTML = i.title[num];
                
                console.log(num)
                console.log(i.title);

                const description = document.createElement("p");
                description.className = "timeDesc";
                description.innerHTML = i.description[num];

                text.appendChild(title);
                text.appendChild(description);
                num += 1
            })

            content.appendChild(time);

            content.appendChild(text);

            timeline.appendChild(content);
        })
    }
    buildTl();
}
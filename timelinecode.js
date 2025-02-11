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
            title:["Shibuya Station, Central Tokyo Metro, Exit 13 (outside the gates)", "Shibuya Mark City Restaurant Avenue entrance (outside the gates)", "JL Shibuya Station New South Exit (outside the gates)", "Bunkamura Street, Dogenzaka 2-chome East (inside the veil)"],
            description:["Nanami's team (Nanami, Ino, Fushiguro) and Ijichi are on standby.", "The Zenin team (Naobito, Maki, Kugisaki) and Nitta are on standby.", "Kusakabe Team (Kusakabe, Panda) is on standby.", 'There is mild confusion as ordinary citizens trapped inside the veil start to act violently, shouting "Bring me Gojo Satoru!"']
        },
        3: {
            time: "20:31",
            title: ["Bunkamura Street Dogenzaka 2-chome East (inside the veil)"],
            description:["Gojo Satoru has arrived."]
        },
        4: {
            time:"20:38",
            title:["Shibuya Hikarie B3F"],
            description:[`He witnesses the crowd being trapped behind the veil and understands the enemy's intentions.`]
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
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
                    texts: ["20:31 Bunkamura Street Dogenzaka 2-chome East (inside the veil)", "20:40 Shibuya Station B5F Shintoshin Line Platform"],
                    descriptions: ["Gojo Satoru has arrived.", "Gojo begins fighting with Jogo, Hanami, and Choso."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/32-2-2.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/32-2-1.jpg"]
                },
                {
                    x: 39.5, y: 54,
                    texts: ["20:14 Shibuya Mark City Restaurant Avenue entrance (outside the gates)"],
                    descriptions: ["The Zenin team (Naobito, Maki, Kugisaki) and Nitta are on standby."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/32-1.jpg"]
                },
                {
                    x: 19, y: 28,
                    texts: ["20:39 Aoyama Cemetery", "20:51 Exit 2 of the downtown metro Meiji-Jingumae Station", "21:03 B2F, Meiji-Jingumae Station, downtown", "21:15 B4F , Meiji-Jingumae Station, downtown"],
                    descriptions: ["The Mei Mei Squad (Mei Mei, Ui Ui, and Itadori) were on standby, and as a veil similar to that in Shibuya had been lowered at Meiji-Jingumae Station, they began to move.", "The Mei Mei Team (Mei Mei, Ui Ui, Itadori) arrives at Meiji-Jingumae Station. They then split into Itadori, Mei Mei, and Ui Ui.", "Itadori encounters Ko Guy.", "After defeating Ko Guy, Itadori reunites with Mei Mei and Ui Ui."],
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
                    x: 14.5, y: 14,
                    texts: ["Downtown Metro Meiji-Jingumae - Shibuya (underground)"],
                    descriptions: ["Mini Mechamaru suddenly appears and informs Itadori, Mei Mei, and Ui Ui about the Gojo Seal.\nThen the sorcerer Ebina and his cursed spirit appear.\nFollowing Mini Mechamaru's instructions, Mei Mei creates an opening for Itadori to escape and confronts the sorcerer.\nItadori heads to Shibuya to inform the Gojo Seal to all the sorcerers."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/34-6.jpg"]
                },
                {
                    x: 59.1, y: 18,
                    texts: ["21:22 Shibuya Station, Exit 13 (outside the gates)", "21:27 Meiji-Jingumae - Shibuya", "Shibuya, somewhere on the rooftop"],
                    descriptions: ["Team Nanami (Nanami, Ino, and Fushiguro) charges in.", "Mini Mechamaru informs Itadori that Geto and the others are unable to move the Prison Realm.", `Itadori shouts loudly, transmitting the Gojo Seal to the sorcerers in Shibuya. Nanami's team, hearing Itadori's voice, soon joins up with Itadori.\nItadori, Fushiguro, and Ino leave it to Nanami to remove the veil that keeps sorcerers out", while Nanami heads to Ijichi for a "request that only first grade sorcerers can fulfill."`],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/34-5-3.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/34-5-2.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/34-5-1.jpg"]
                },
                {
                    x: 66, y: 14.5,
                    texts: ["Shibuya Station, Central Tokyo Metro, Exit 13 (outside the gates)"],
                    descriptions: ["Ijichi is stabbed in the back by Shigemo, and behind Shigemo is a mysterious white-haired sorcerer giving him orders."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/34-1.jpg"]
                },
                {
                    x: 40.5, y: 50,
                    texts: ["21:22 Shibuya Mark City Restaurant Avenue entrance (outside the gates)"],
                    descriptions: ["The Zenin team (Naobito, Maki, and Kugisaki) charge in."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/34-2.jpg"]
                },
                {
                    x: 70.8, y: 43,
                    texts: ["Shibuya Station B5F Shintoshin Line Platform", "Shibuya Station B5F Shintoshin Line Platform", "Shibuya Station B5F Shintoshin Line Platform", "21:26 Shibuya Station B5F Shintoshin Line Platform", "Shibuya Station B5F Shintoshin Line Platform"],
                    descriptions: ["Gojo overpowers Jogo, Hanami and Choso, and exorcises Hanami.\nThen Mahito and the transfigured humans join them by train from Meiji-Jingu-mae Station, and Jogo, Mahito and Choso launch a counterattack.", "Surrounded by a large number of transfigured humans, non-sorcerers, and cursed spirits, Gojo takes a gamble and activates a 0.2 second domain expansion, massacring approximately 1000 transfigured humans in 299 seconds after the domain is released.", "Geto opens the Prison Realm, appears before Gojo, and succeeds in sealing him away.", "One of the Mini Mechamarus notices that Geto and his friends are unable to move the Prison Realm, and is destroyed by Mahito.", "Mahito, Jogo, Dagon, and Choso each move on to their own purposes, while Geto remains behind to keep an eye on the Prison Realm."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/34-4-5.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/34-4-4.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/34-4-3.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/34-4-2.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/34-4-1.jpg"]
                },
                {
                    x: 75, y: 79,
                    texts: ["21:22 JL Shibuya Station New South Exit (outside the gates)"],
                    descriptions: ["Team Kusakabe (Kusakabe, Panda) charges in."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/34-3.jpg"]
                }
            ]
        },
        3: {
            title: "Episode 35 ~ 37",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map37.jpg",
            pins: [
                {
                    x: 14.5, y: 8.5,
                    texts: ["22:02 City Center Metro Meiji-Jingumae Station - Shibuya Station (underground)", "City Center Metro Meiji-Jingumae Station - Shibuya Station (underground)"],
                    descriptions: ["Mei Mei and Ui Ui defeat the sorcerer Ebina.", `Geto appears before Mei Mei and Ui Ui and incites the special grade disease cursed spirit "Smallpox Deity" (Smallpox Granny).`],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/37-6-1.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/37-6-2.jpg"]
                },
                {
                    x: 31.2, y: 25,
                    texts: ["Near Shibuya Mark City", "21:40 Shoto Culture Village Street (outside the gates)", "21:44 Shibuya Station, Exit 13 (outside the gates)", "Tokyu Department Store Main Branch"],
                    descriptions: ["Maki and Naobito engage in combat with the transfigured humans. Kugisaki and Nitta head to Ijichi to check on his safety.", "Kugisaki and Nitta encounter Shigemo.", "Nanami finds Ijichi lying on the ground after being attacked.", "In the battle with Shigemo, Nitta is injured and Kugisaki is cornered, but Nanami rushes to the scene and defeats Shigemo. Nanami orders Kugisaki and Nitta to wait there while he heads to where Maki and Naobito are."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/37-2-1.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/37-5-2.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/37-5-3.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/37-5-4.jpg"]
                },
                {
                    x: 46.8, y: 50,
                    texts: ["Near Shibuya Mark City"],
                    descriptions: ["Maki and Naobito engage in combat with the transfigured humans. Kugisaki and Nitta head to Ijichi to check on his safety."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/37-2-1.jpg"]
                },
                {
                    x: 67.3, y: 40,
                    texts: ["22:01 Shibuya Cerulean Tower", "22:04 Metropolitan Expressway Route 3 Shibuya Line Cerulean Tower", "Near Shibuya Station", "22:10 Inside Shibuya Station", "Inside Shibuya Station", "Inside Shibuya Station"],
                    descriptions: [`Itadori, Fushiguro, and Ino discover the three curse users guarding the base of the veil.\nItadori and Fushiguro begin fighting Awasaka, while Ino engages Ogami and her Grandson.`, `After defeating Awasaka, Itadori and Fushiguro remove the veil.`, "As Itadori heads to Shibuya Station to find Gojo, he encounters Inumaki on the way. With Inumaki's help, Itadori heads to the Shibuya station premises.", "Itadori enters Shibuya Station and soon encounters Choso.", `Itadori and Choso engage in combat. Itadori puts up a good fight but is defeated. Choso, who won, is also extremely confused by the "non-existent memories." He leaves the scene without finishing Itadori off.`, "Mimiko and Nanako come into contact with Itadori, who is seriously injured and unconscious."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/37-1-1.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/37-1-2.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/37-1-3.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/37-1-4.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/37-1-5.jpg"]
                },
                {
                    x: 58.5, y: 57,
                    texts: ["Near Shibuya Station"],
                    descriptions: ["As Itadori heads to Shibuya Station to find Gojo, he encounters Inumaki on the way. With Inumaki's help, Itadori heads to the Shibuya station premises."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/37-1-3.jpg"]
                },
                {
                    x: 47.5, y: 68,
                    texts: ["22:01 Shibuya Cerulean Tower", "22:04 Metropolitan Expressway Route 3 Shibuya Line Cerulean Tower", "Metropolitan Expressway Route 3 Shibuya Line Cerulean Tower"],
                    descriptions: [`Itadori, Fushiguro, and Ino discover the three curse users guarding the base of the veil.\nItadori and Fushiguro begin fighting Awasaka, while Ino engages Ogami and her Grandson.`, "After defeating Awasaka, Itadori and Fushiguro remove the veil.", `Fushiguro takes Ino, who is now unable to fight, and leaves the veil for a moment. Itadori heads to Shibuya Station to rescue Gojo.`],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/37-1-1.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/37-1-2.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/37-7-3.jpg"]
                },
                {
                    x: 54.3, y: 69,
                    texts: ["Shibuya Cerulean Tower"],
                    descriptions: ["Grandma Ogami summons information about Toji's body to her grandson. Ino fights back but is overwhelmed and falls from a building. Soon, Toji's body overcomes the grandson's soul, and he kills Grandma Ogami in an instant."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/37-3-1.jpg"]
                }
            ]
        },
        4: {
            title: "Episode 38 ~ 39",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map39.jpg",
            pins: [
                {
                    x: 14.5, y: 8.5,
                    texts: ["Between Meiji-Jingumae Station and Shibuya Station on the central Tokyo Metro", "Between Meiji-Jingumae Station and Shibuya Station on the central Tokyo Metro"],
                    descriptions: ["Mei Mei and Ui Ui engage in battle with the Smallpox Deity (Smallpox Granny). The two are taken into the domain of the Smallpox Deity.", "Mei Mei and Ui Ui defeat the Smallpox Deity (Smallpox Granny) and challenge Geto."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/39-3-1.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/39-3-2.jpg"]
                },
                {
                    x: 54, y: 49.5,
                    texts: ["22:20 Inokashira Line Shibuya Station Avenue Exit", "Shibuya Station connecting passage", "Inside Dagon's Domain", "Inside Dagon's Domain", "Inside Dagon's Domain", "Shibuya Station connecting passage", "Shibuya Station connecting passage"],
                    descriptions: ["Nanami, Maki, and Naobito join forces. Nanami tells them about the Gojo Seal.", "Maki, Nanami, and Naobito encounter Dagon and begin fighting.", "Dagon transforms from the cursed womb and expands its domain. Maki, Nanami, and Naobito are drawn into the domain and forced to fight a difficult battle.", "Fushiguro expands his domain and invades Dagon's domain, joining forces with Maki, Nanami, and Naobito.", "Fushiguro attempts to escape through a hole he created in his territory, but Toji suddenly bursts in through the hole.", "Toji, who has gone berserk and turned into a killing machine, exorcises Dagon. Then, Toji chooses Fushiguro as his next target and kidnaps him.", "Jogo suddenly appears and instantly renders Nanami, Maki, and Naobito unable to fight."],
                    images: ["", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/39-2-2.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/39-2-3.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/39-2-4.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/39-2-5.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/39-2-6.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/39-2-7.jpg"]
                },
                {
                    x: 61.2 , y: 46,
                    texts: ["Inside Shibuya Station", "Inside Shibuya Station"],
                    descriptions: ["Mimiko and Nanako have the unconscious Itadori swallow Sukuna's finger. Jogo rushes to the scene and has him swallow ten more fingers.", "Taking control of Itadori's body, Sukuna kills Mimiko and Nanako, then rejects Jogo's proposal and challenges him to a fight."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/39-1-2.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/39-1-1.jpg"]
                }
            ]
        },
        5: {
            title: "Episode 40 ~ 41",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map41.jpg",
            pins: [
                {
                    x: 51.2, y: 33.5,
                    texts: ["23:05 Dogenzaka Shibuya 109", "23:07 Dogenzaka Shibuya 109", "Dogenzaka Shibuya 109", "", "Metropolitan Expressway Route 3 Shibuya Line Shibuya Toll Gate", "23:14 Dogenzaka Shibuya 109"],
                    descriptions: ["Fushiguro, who was badly injured in the battle with Toji, is attacked from behind by Shigemo.", `Fushiguro takes Shigemo with him and begins the "Exorcism Ritual." He summons the Eight-Handled Sword Divergent Sila Divine General Mahoraga.`, `Sukuna finds Fushiguro in a state of suspended death and intervenes in the "Exorcism Ritual."`, "Sukuna expands his domain and defeats Mahoraga, but many ordinary people are caught in the crossfire.", "Sukuna carries the unconscious Fushiguro to Ieiri and Yaga.", "When Itadori wakes up, having regained control over his body, he witnesses a horrific scene."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/41-1-1.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/41-1-2.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/41-2-5.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/41-1-4.jpg", "", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/41-1-6.jpg"]
                },
                {
                    x: 55, y: 45,
                    texts: ["Somewhere in Shibuya"],
                    descriptions: ["During the battle with Fushiguro, Toji suddenly abandons the fight and commits suicide right in front of him."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/41-2-2.jpg"]
                },
                {
                    x: 70.9, y: 60,
                    texts: ["23:01 Shibuya Stream", "Various locations in Shibuya", "Near Shibuya Stream", "Near Shibuya Stream"],
                    descriptions: ["Panda and Kusakabe explore the surroundings.\nAfterwards, the two encounter Suda and Negi.", "Sukuna and Jogo engage in a fierce battle, destroying the city of Shibuya, and Kusakabe and the others get caught up in the fighting.", "Jogo is defeated by the overwhelmingly powerful Sukuna.", "Uraume appears before Sukuna, who then realizes that Fushiguro is in a difficult situation and leaves the scene."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/41-4-1.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/41-4-2.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/41-4-3.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/41-4-4.jpg"]
                },
                {
                    x: 30, y: 80,
                    texts: ["22:51 Metropolitan Expressway Route 3 Shibuya Line Shibuya Toll Gate", "Somewhere in Shibuya", "23:05 Dogenzaka Shibuya 109", "23:07 Dogenzaka Shibuya 109", "Dogenzaka Shibuya 109", "Metropolitan Expressway Route 3 Shibuya Line Shibuya Toll Gate"],
                    descriptions: ["Ieiri and Yaga are on standby.", "During the battle with Fushiguro, Toji suddenly abandons the fight and commits suicide right in front of him.", "Fushiguro, who was badly injured in the battle with Toji, is attacked from behind by Shigemo.", `Fushiguro takes Shigemo with him and begins the "Exorcism Ritual." He summons the Eight-Handled Sword Divergent Sila Divine General Mahoraga.`, `Sukuna finds Fushiguro in a state of suspended death and intervenes in the "Exorcism Ritual."`, "Sukuna carries the unconscious Fushiguro to Ieiri and Yaga."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/41-1-5.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/41-2-2.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/41-1-1.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/41-1-2.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/41-2-5.jpg"]
                }
            ]
        },
        6: {
            title: "Episode 42 ~ 45",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map45.jpg",
            pins: [
                {
                    x: 30.3, y: 27.5,
                    texts: ["23:14 Shoto Culture Village Street (outside the gates)"],
                    descriptions: [`Kugisaki leaves Nitta Akari to be rescued and re-enters the veil.`],
                    images: []
                },
                {
                    x: 51.3, y: 33.8,
                    texts: ["21:30 Shibuya Station B4F", "23:09 Shibuya Station B5F Shintoshin Line Platform", "Inside Shibuya Station", "23:19 Shibuya Station Dogenzaka ticket gate", "Inside Shibuya Station", "Inside Shibuya Station", "Inside Shibuya Station", "Inside Shibuya Station", "Inside Mahito's Domain", "", ""],
                    descriptions: ["Dagon preys on many civilians on B4F of Shibuya Station.\nMahito creates clones, and the main body searches for Itadori underground while the clones search above ground.", "Todo and Nitta Arata confirm that the Prison Realm has been taken away by Geto.", `Itadori witnesses Nanami dying after being hit by Mahito's "Idle Transfiguration". Itadori begins fighting Mahito.`,"The battle between Itadori and Mahito heats up.", `Itadori pursues Mahito's main body, which has been damaged by Kugisaki's "Resonance."`, "Itadori witnesses Kugisaki being defeated by Mahito right before his eyes. Mahito uses his Black Flash on Itadori, whose mind has reached its limits, and delivers another blow.", "Todo rushes to Itadori's side when he finds himself in a difficult situation. Nitta Arata arrives at the same time and uses his own magic to attempt to treat Kugisaki and Itadori. Todo then encourages Itadori.", "Together with the revitalized Itadori and Todo, they engage in combat with Mahito, and the battlefield moves to the ground.", "Facing Itadori and Todo, Mahito takes a gamble and deploys his domain for 0.2 seconds. Todo strikes back at Mahito but falls unconscious.", `Mahito understands the true nature of his own soul and becomes an "Instant Spirit Body of Distorted Killing".`, "Todo distracts Mahito, creating an opening for Itadori and he lands a Black Flash, defeating Mahito."],
                    images: ["", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/45-1-10.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/45-1-9.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/45-1-8.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/45-1-7.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/45-1-6.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/45-1-5.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/45-1-4.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/45-1-3.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/45-1-2.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/45-1-1.jpg"]
                },
                {
                    x: 64.5, y: 45,
                    texts: ["Inside Shibuya Station"],
                    descriptions: [`Although seriously injured, Nanami is in a daze and exorcises many transfigured humans.\nHowever, he is hit by Mahito's "Idle Transfiguration" and collapses in front of Itadori.`],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/45-2-7.jpg"]
                },
                {
                    x: 59, y: 44.9,
                    texts: ["23:09 Shibuya Station B5F Shintoshin Line Platform", "23:14 Shoto Culture Village Street (outside the gates)", "23:16 Dogenzaka Alley", "Dogenzaka Alley", "Inside Shibuya Station", "Inside Shibuya Station"],
                    descriptions: ["Todo and Nitta Arata confirm that the Prison Realm has been taken away by Geto.", `Kugisaki leaves Nitta Akari to be rescued and re-enters the veil.`, "Kugisaki encounters Mahito's clone and begins fighting.", `Kugisaki uses "Resonance" to send damage from Mahito's clone to the main body as well.`, `Kugisaki chases after the fleeing Mahito clone, but is hit with the "Idle Transfiguration" effect from Mahito's clone and collapses in front of Itadori.`, "Todo rushes to Itadori's side when he finds himself in a difficult situation. Nitta Arata arrives at the same time and uses his own magic to attempt to treat Kugisaki and Itadori. Todo then encourages Itadori."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/45-1-10.jpg", "", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/45-2-4.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/45-2-3.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/45-2-2.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/45-2-1.jpg"]
                }
            ]
        },
        7: {
            title: "Episode 46 ~ 47",
            imgSrc: "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/map47.jpg",
            pins: [
                {
                    x: 9.5, y: 38,
                    texts: [""],
                    descriptions: ["An announcement from the Jujutsu General Headquarters:\n\n1. Suguru Geto's survival is confirmed and his death sentence is reinstated.\n\n2. Satoru Gojo is deemed complicit in the Shibuya Incident and permanently exiled from the jujutsu world.\nFurthermore, removing his seal will be deemed a criminal offense.\n\n3. Masamichi Yaga is sentenced to death for his relationship Satoru Gojo and Suguru Geto resulting in the Shibuya Incident.\n\n4. The suspension of Yuji Itadori's death sentence is revoked and is to be carried out immediately.\n\n5. Special Grade Sorcerer Yuta Okkotsu is appointed Yuji Itadori's executioner."],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/47-2-1.jpg"]
                },
                {
                    x: 19.3, y: 38,
                    texts: [""],
                    descriptions: [`This leads to the "Culling Games," a massacre of those who have been given jujutsu by the worst sorcerer in history, Noritoshi Kamo...`],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/47-3-1.jpg"]
                },
                {
                    x: 43, y: 26,
                    texts: ["23:28 In front of Shibuya Stream", "23:28 Shibuya Station B3F Denentoshi Line Platform", "23:36 Former Udagawa Police Box of Shibuya Police Station", "", "", "", "", "", "", ""],
                    descriptions: ["Panda discovers Kusakabe amongst the rubble.", `Although Choso is confused by his "non-existent memories," he sets out to get to know Itadori and himself better.`, "Geto appears before the retreating Mahito.\nItadori and his team realize that Geto is the one who sealed Gojo away, and attempt to recapture Gojo.", "Geto absorbs Mahito using his Cursed Spirit Manipulation technique.", "Nishimiya, Kamo, Mai, Miwa, and Utahime from the Kyoto school, as well as Panda and Kusakabe, join in.", `Choso bursts into the battle and realizes that Geto's true identity is his own father, Kamo Noritoshi, the "worst sorcerer in history," and at the same time realizes that Itadori might be his younger brother.`, "Choso engages in battle with Kamo Noritoshi and his ally, Uraume. Other sorcerers follow suit and attack Kamo Noritoshi.", "The sorcerers are put in dire straits due to Uraume's Ice Formation technique, but then special grade sorcerer Tsukumo appears.", `Tsukumo and Kamo Noritoshi each talk about "the future of humanity (the next stage)."`, `Kamo Noritoshi remotely uses "Idle Transfiguration" on 1,000 marked non-sorcerers, reshaping their brains into those of sorcerers, and releases them into the world. He then takes away the Prison Realm that sealed Gojo away.`],
                    images: ["https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/47-1-1.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/47-1-2.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/47-1-3.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/47-1-4.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/47-1-5.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/47-1-6.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/47-1-7.jpg", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/47-1-8.jpg", "", "https://jujutsukaisen.jp/shibuyaincidentnow/assets/img/47-1-10.jpg"]
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
                                if (pin.images[i] == "") {
                                    imageElement.style = "display: none;"
                                };
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
            console.log(episodeChoice);
        });
    });

    // Default selection on load
    buildMap(1);
    highlightButton(1);
};

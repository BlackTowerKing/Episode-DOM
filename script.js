//Content
const jsonData = {
    heroes: [{
            name: "Darth Sidious",
            orden: "Sith",
            information: "Darth Sidious, born Sheev Palpatine and also known simply as the Emperor, was a human male Dark Lord of the Sith and Emperor of the Galactic Empire, ruling from 19 BBY to 4 ABY. Rising to power in the Republic Senate as the senator of Naboo, the secretive Sith Lord cultivated two identities, Sidious and Palpatine, using both to further his political career. He orchestrated the fall of the Galactic Republic and the Jedi Order through the Clone Wars, and then established his reign over the galaxy which lasted until his death at the Battle of Endor. However, the dark side of the Force was a pathway to abilities that made the Emperor's return possible. ",
            images: "",
            homeworld: "Naboo",
        },
        {
            name: "Darth Bane",
            orden: "Sith",
            information: "Darth Bane was a legendary human male Dark Lord of the Sith and the sole survivor of the destruction of the Brotherhood of Darkness at the hands of the Jedi Order during the Jedi-Sith War a thousand years before the Clone Wars. As the only surviving Sith, Bane recognized that Sith infighting had weakened them to the point that the Jedi could destroy them. To rectify this, Bane reformed the Sith and created the Rule of Two, mandating that there could be only two Sith—a Master and an apprentice—at any given time. These new Sith would begin a plot to destroy the Jedi and conquer the galaxy in secret. With Bane's defeat, rumored to have been caused by his apprentice, Darth Zannah, on the Inner Rim world of Ambria, the Jedi wrongly believed that the Sith were defeated with him. ",
            images: "",
            homeworld: "",
        },
        {
            name: "Darth Plagueis",
            orden: "Sith",
            information: "Darth Plagueis (pronounced /'pleɪɡ.əs/) was a Force-sensitive Muun male Dark Lord of the Sith and the master of Darth Sidious. He acquired considerable knowledge of the Force, but was ultimately betrayed and murdered by his own apprentice, in accordance with the Rule of Two. Sidious later recounted the tale of his master's demise to lure the Jedi Knight Anakin Skywalker to the dark side of the Force. ",
            images: "",
            homeworld: "",
        },
        {
            name: "Darth Tyrannus",
            orden: "Sith",
            information: "Dooku, a Force-sensitive human male, was a Jedi Master that fell to the dark side of the Force and became the Dark Lord of the Sith Darth Tyranus during the final years of the Galactic Republic. After leaving the Jedi Order, he claimed the title Count of Serenno and, during the Clone Wars, served as Head of State of the Confederacy of Independent Systems. He was the second apprentice of Darth Sidious, the Dark Lord of the Sith whose plan to conquer the galaxy relied on Dooku leading a pan-galactic secessionist movement against the Republic. As such, Dooku immersed himself in the dark side and worked tirelessly to advance his and his master's plans, but ultimately forgot that treachery was the way of the Sith. ",
            images: "",
            homeworld: "Serenno",
        },
        {
            name: "Darth Vader",
            orden: "Sith",
            information: "Anakin Skywalker was a human male Jedi Knight of the Galactic Republic and the prophesied Chosen One of the Jedi Order, destined to bring balance to the Force. Also known as 'Ani' during his childhood, Skywalker earned the moniker 'Hero With No Fear' from his accomplishments in the Clone Wars. His alter ego, Darth Vader, the Dark Lord of the Sith, was created when Skywalker turned to the dark side of the Force, pledging his allegiance to the Sith Lord Darth Sidious at the end of the Republic Era. ",
            images: "",
            homeworld: "Tatooine",
        },
        {
            name: "Luke Skywalker",
            orden: "Jedi",
            information: "Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire. Along with his companions, Princess Leia Organa and General Han Solo, Skywalker served on the side of the Alliance to Restore the Republic—an organization committed to the downfall of the Galactic Empire and the restoration of democracy. Following the war, Skywalker became a living legend, and was remembered as one of the greatest Jedi in galactic history. ",
            images: "",
            homeworld: "Tatooine",
        },
        {
            name: "Yoda",
            orden: "Jedi",
            information: "Yoda, a Force-sensitive male being belonging to a mysterious species, was a legendary Jedi Master who witnessed the rise and fall of the Galactic Republic, followed by the rise of the Galactic Empire. Small in stature but revered for his wisdom and power, Yoda trained generations of Jedi, ultimately serving as the Grand Master of the Jedi Order. Having lived through nine centuries of galactic history, he played integral roles in the Clone Wars, the rebirth of the Jedi through Luke Skywalker, and unlocking the path to immortality. ",
            images: "",
            homeworld: "",
        },
        {
            name: "Obi-Wan Kenobi",
            orden: "Jedi",
            information: "Obi-Wan Kenobi was a Force-sensitive legendary human male Jedi Master who served on the Jedi High Council during the last years of the Republic Era. During the Imperial Era, he adopted the alias Ben Kenobi in order to hide from the regime that drove the Jedi to near extinction. A noble man known for his skills with the Force, Kenobi trained Anakin Skywalker, served as a Jedi General in the Grand Army of the Republic, and became a mentor to Luke Skywalker prior to his death in 0 BBY. ",
            images: "",
            homeworld: "Stewjon",
        },
        {
            name: "Qui-Gon Jinn",
            orden: "Jedi",
            information: "Qui-Gon Jinn, a Force-sensitive human male, was a venerable if maverick Jedi Master who lived during the last years of the Republic Era. He was a wise and well-respected member of the Jedi Order, and was offered a seat on the Jedi Council, but chose to reject and follow his own path. Adhering to a philosophy centered around the Living Force, Jinn strove to follow the will of the Force even when his actions conflicted with the wishes of the High Council. After encountering Anakin Skywalker, Jinn brought him to the Jedi Temple on Coruscant, convinced he had found the Chosen One. His dying wish was for Skywalker to become a Jedi and ultimately restore balance to the Force.",
            images: "",
            homeworld: "Coruscant",
        },
        {
            name: "Mace Windu",
            orden: "Jedi",
            information: "Mace Windu was a revered human male Jedi Master and member of the Jedi High Council during the last years of the Galactic Republic. During his time in the Jedi Order, he once served as elected leader of the Jedi and, during the Clone Wars, as a Jedi General in the Grand Army of the Republic. He was the greatest champion of the Jedi Order and promoted its ancient traditions amidst the growing influence of the dark side of the Force in the corrupt, declining days of the Republic. ",
            images: "",
            homeworld: "Haruun Kal",
        }
    ],
    planets: [{
        name: "Ashas Ree",
        orden: "Sith",
        information: "Ashas Ree was a planet located deep within the ancient Sith Empire on the Outer Rim of the galaxy. It was here that the Sith Lord Garu abandoned the holocron of King Adas before going off to die in the Great Hyperspace War.The world was the first planet encountered by the fallen Jedi Freedon Nadd during his exile from the Galactic Republic following the slaying of his former Jedi Master, Matta Tremayne. Nadd recovered Adas's holocron, which he used to acquire knowledge of the dark side of the Force for his successful bid to subjugate Onderon.During the Cold War between the Galactic Republic and the reconstituted Sith Empire, a hostile surveillance droid impersonated a protocol droid.",
        images: ""
    }, 
    {
        name: "Athiss",
        orden: "Sith",
        information: "Athiss was the second planet in the Loro Babis system of the Outer Rim Territories. It was located on the Descri Wris and was close to Korriz and Ziost. The planet was a Sith sanctuary that held the sanctuary of Vodal Kressh, a powerful Sith Lord and among the most renowned alchemists the Empire had ever known. Athiss was once a Sith bastion that held the sanctuary of Vodal Kressh, a powerful Sith Lord and among the greatest alchemists the Empire had ever known. Vodal was a powerful and ambitious Sith, but he was also utterly mad. So much so that after his death the Emperor ordered Kressh's sanctum sealed, and the planet declared a forbidden zone.",
        images: ""
    },
    {
        name: "Begeren",
        orden: "Sith",
        information: "Begeren was a planet in the Sith Worlds region of the Outer Rim Territories. It was originally part of the Sith Empire, which constructed enormous monuments dedicated to notable Sith on the planet's surface—a project that cost the lives of an estimated hundred thousand slaves. Following the Empire's defeat in the Great Hyperspace War, Begeren was claimed by the Galactic Republic. The Republic allowed the construction of a gemstone quarry at the expense of the Sith statues, which fell into ruin. In 3678 BBY, the planet was seized by a revived Sith Empire. During the Galactic Civil War, Begeren was the site of a battle between the Alliance to Restore the Republic and the Galactic Empire.",
        images: ""
    },
    {
        name: "Bosthirda",
        orden: "Sith",
        information: "Once a part of the Sith Empire, in the following millennia its location was unknown to both the Galactic Empire and the New Republic. Apparently not even Palpatine knew its location. The planet was the location of a dark side temple, the hidden retreat of Supreme Prophet Kadann. Prior to the Battle of Endor, the Supreme Prophet had a falling out with the Emperor. Kadann and his most faithful followers retreated into hiding on Bosthirda, maintaining only the most circuitous of contacts with the greater galaxy. They had little need of news, foreseeing most important events for themselves through Force visions.",
        images: ""
    },
    {
        name: "Ch'hodos",
        orden: "Sith",
        information: "Ch'hodos was a rocky desert planet that orbited a red sun within the Outer Rim Territories' Sith Worlds region. Ch'hodos was considered a lesser world of the Sith Empire and served as the central base of the Sith Lord Shar Dakhan by the year 5000 BBY. During the Dark Lord of the Sith Naga Sadow's preparations to attack the Galactic Republic, Ch'hodos became a rally ground for his Sith soldiers, with Sadow himself and his apprentice, Gav Daragon, overlooking the embarking of the troops. More than a millennium later, the radiation from Ch'hodos's sun had increased, leading to mutations in the local desert wildlife.",
        images: ""
    },
    {
        name: "Coruscant",
        orden: "Jedi",
        information: "Coruscant (pronounced /'kɔɹəsɑnt/), also known as Imperial Center during the rule of the Galactic Empire, was an ecumenopolis—a city-covered planet, collectively known as Imperial City— in the Coruscant system of the Core Worlds. Though debated by historians, it was generally believed that Coruscant was the original homeworld of humanity. Noted for its cosmopolitan culture and towering skyscrapers, Coruscant's population consisted of approximately one trillion citizens hailing from a vast array of both humanoid and alien species. In addition, Coruscant's strategic location at the end of several major trade routes enabled it to grow in power and influence, causing the city-planet to surpass its early rivals and become the hub of galactic culture, education, finance, fine arts, politics and technology. It was the location of several major landmarks, including the Jedi Temple, Monument Plaza and the Senate Building. ",
        images: ""
    }, 
    {
        name: "Lothal",
        orden: "Jedi",
        information: "Lothal was a planet in the Outer Rim Territories. During the early years of the Galactic Empire, Lothal was in a state of economic disrepair and invited the Empire to take over the planet's industries, with the promise of prosperity and security. Although many people said the Empire would bring doom, the ones preaching new jobs and prosperity were vindicated. By 5 BBY, Lothal became the nesting ground for the Spectres, a small rebel cell which operated from the starship Ghost. After harrying Imperial forces and disrupting Imperial activities for at least a year, the Spectres eventually attracted the attention of Grand Moff Wilhuff Tarkin and Darth Vader, who tried unsuccessfully to stamp out these rebels. Vader even imposed a blockade on the planet, but the Spectres managed to slip through and rejoin the larger rebellion. ",
        images: ""
    },
    {
        name: "Ilum",
        orden: "Jedi",
        information: "Ilum was a snow-covered planet located in the 7G sector of the Unknown Regions, within the Ilum system. Ilum was the fifth planet from its parent star Asar, a blue dwarf, located roughly equidistant from Asar and the system's cometary cloud. Ilum had a kyber crystalline core, and had been utilized by the Jedi Order for the Gathering, a rite of passage in which Jedi younglings had to find and harvest kyber crystals for their lightsabers, which had existed for thousands of standard years.When the Jedi Order was exterminated by order of Darth Sidious, the new Galactic Empire occupied Ilum and began excavating it for its vast supply of kyber crystals, which were to be used in the construction of the first and second Death Stars. The over-mining of the planet caused its core, and later a massive Imperial Trench, to open up along Ilum's equator. ",
        images: ""
    },
    {
        name: "Tython",
        orden: "Jedi",
        information: "Tython was a terrestrial planet located in the galaxy's Deep Core region that was shrouded in myth. The Martyrium of Frozen Tears built by Jedi there, and some Jedi scholars made the case that Tython was the site of the Jedi Order's first temple. During the Galactic Civil War, Doctor Chelli Lona Aphra led Darth Vader to Tython's Meridional Ice Cap to mislead him as to the location of the Rebel Alliance's main base, which was actually on the Outer Rim planet Hoth.",
        images: ""
    },
    {
        name: "Ahch-To",
        orden: "Jedi",
        information: "Ahch-To was a planet mostly covered in water, with numerous rocky islands blanketed with green trees located in the Unknown Regions. It was the birthplace of the Jedi Order and held the ancient Jedi texts. Three decades after the Galactic Civil War, it served as the home of Jedi Master Luke Skywalker who went into exile seeking the first Jedi Temple after his temple and his Jedi students were destroyed by Kylo Ren. After the Resistance pieced together two map fragments to reveal Skywalker's location, Rey traveled to Ahch-To in the Millennium Falcon accompanied by R2-D2 and Chewbacca, in search of him.",
        images: ""
    },
],
    starships: [{
        name: "Interdictor-class cruiser",
        orden: "Sith",
        information: "The class name 'Interdictor' was first proposed by Admiral Jimas Veltraa. When Veltraa was killed in the Mandalorian Wars, some proposed that the name of the class be changed to honor him, but this was overruled by the Supreme Chancellor. In 3963 BBY, construction on the Interdictor-class was approved. An Interdictor-class cruiser fires on two Foray-class blockade runners. The original prototype Interdictors were manufactured by Republic Sienar Systems.[1] Like the Inexpugnable-class command ships, the Interdictor-class cruisers were built at Corellian shipyards,[13] though many more would be constructed by the Star Forge to fuel the growing warfleet of the Sith Lord Darth Revan.",
        images: ""
    },
    {
        name: "Centurion-class battlecruiser",
        orden: "Sith",
        information: "The Centurion-class battlecruiser was intended to succeed the Inexpugnable-class command ship in the Republic Navy. A limited number of these ships served in the Mandalorian Wars, and gained more traction under the command of Darth Revan, where they made up the heavyweights of his navy during the Jedi Civil War. Most vessels were either captured or destroyed by the end of the Civil War.The most famous vessel of the class was the Ravager used by the Sith Lord Darth Nihilus. Originally serving in the Republic Navy during the Mandalorian Wars, the Ravager was destroyed in orbit of Malachor V at the end of the war. It was later salvaged by the Sith Lord and used as his personal conveyance.",
        images: ""
    },
    {
        name: "Sith Meditation Sphere",
        orden: "Sith",
        information: "The class name 'Interdictor' was first proposed by Admiral Jimas Veltraa. When Veltraa was killed in the Mandalorian Wars, some proposed that the name of the class be changed to honor him, but this was overruled by the Supreme Chancellor. In 3963 BBY, construction on the Interdictor-class was approved. An Interdictor-class cruiser fires on two Foray-class blockade runners. The original prototype Interdictors were manufactured by Republic Sienar Systems.[1] Like the Inexpugnable-class command ships, the Interdictor-class cruisers were built at Corellian shipyards,[13] though many more would be constructed by the Star Forge to fuel the growing warfleet of the Sith Lord Darth Revan.",
        images: ""
    },
    {
        name: "Kyramud-type battleship",
        orden: "Sith",
        information: "The class name 'Interdictor' was first proposed by Admiral Jimas Veltraa. When Veltraa was killed in the Mandalorian Wars, some proposed that the name of the class be changed to honor him, but this was overruled by the Supreme Chancellor. In 3963 BBY, construction on the Interdictor-class was approved. An Interdictor-class cruiser fires on two Foray-class blockade runners. The original prototype Interdictors were manufactured by Republic Sienar Systems.[1] Like the Inexpugnable-class command ships, the Interdictor-class cruisers were built at Corellian shipyards,[13] though many more would be constructed by the Star Forge to fuel the growing warfleet of the Sith Lord Darth Revan.",
        images: ""
    },
    {
        name: "Death Star",
        orden: "Sith",
        information: "The DS-1 Orbital Battle Station[9] was originally designed by the Geonosians before the Galactic Republic and later the Galactic Empire took over the project. However, the plans for the battle station were stolen by the Rebel Alliance from Scarif,[5] leading to its destruction at the Battle of Yavin, but not before it unleashed its planet-destroying cannon on Alderaan[8] and Jedha City.",
        images: ""
    },
    {
        name: "Ebon Hawk",
        orden: "Jedi",
        information: "The Ebon Hawk was a Dynamic-class freighter and a smuggler ship that rose to fame due to its use around the time of the Jedi Civil War. It was well-known throughout the galaxy as a ship associated with the Exchange, and it passed through many hands before it was commandeered by amnesiac Dark Lord of the Sith, Revan, who was escaping the Destruction of Taris. After Revan joined the Jedi Order, the ship was instrumental in his search for the Star Forge.",
        images: ""
    },
    {
        name: "Twilight",
        orden: "Jedi",
        information: "The Twilight was a Corellian G9 Rigger-class light freighter owned and operated by the Jedi Knight Anakin Skywalker during the Clone Wars. Skywalker and his Padawan, Ahsoka Tano, used the ship to escape from a battle on Teth. When Obi-Wan Kenobi traveled to the planet Mandalore during the Mandalorian civil war, the ship was destroyed by the former Sith Lord Maul and his Shadow Collective.",
        images: ""
    },
    {
        name: "Rogue Shadow",
        orden: "Jedi",
        information: "The Rogue Shadow was a unique starship that served as the personal transport of Starkiller, the secret apprentice of the Sith Lord Darth Vader. In addition to its main occupants, the apprentice and his training droid PROXY, the vessel was piloted by eight Imperial officers in turn, including Captain Juno Eclipse, the leader of Vader's Black Eight Squadron. Built primarily for stealth and infiltration purposes, the Rogue Shadow incorporated state-of-the-art cloaking technology and a highly advanced hyperdrive engine in its design, thus allowing the apprentice to travel anywhere throughout the galaxy without risking detection..",
        images: ""
    },
    {
        name: "Outbound Flight",
        orden: "Jedi",
        information: "The Central Storage Core was the main hub of Outbound Flight, and contained the food and supplies that the colonists would need on their journey. The core was surrounded by six Dreadnaught-class heavy cruisers arranged with the storage capacity so that if any of the six Dreadnaughts detached, they could each easily load one-sixth of its supplies into their ship. In fact, it was planned that one Dreadnaught would be left behind for defense in the event that a colony was established. On each Dreadnaught was a dining room or cafeteria in which the colonists ate their meals. There was talk of decorating each of the different cafeterias with themes from different parts of the galaxy, but the request was turned down.",
        images: ""
    },
    {
        name: "Crucible",
        orden: "Jedi",
        information: "The Crucible was a Paladin-class corvette[1] operated by the Jedi Order. The ship, which had been in service from the time of its construction during the Old Republic through to the Clone Wars, was used to ferry Jedi younglings from Coruscant to Ilum. Once on Ilum, the younglings would undergo a ritual called The Gathering, in which they would find the kyber crystals for their first lightsabers. After retrieving the crystal, the students would learn from Huyang, an ancient droid who would assist in the creation of their lightsabers.",
        images: ""
    }
]
};


document.body.innerHTML = `<header> 
                                <div>
                                    <img src='./img/palpatine.png' alt='palpatine'>
                                    <h1>Episode - DOM API</h1>
                                    <img src="./img/mini-yoda.png" alt="yoda">
                                </div>
                            </header>`;
//Elements
const headerElement = document.body.querySelector("header");
const contentContainer = document.createElement("section");
const contentChooseContainer = document.createElement("div");
const sideLogoContainer = document.createElement("div");
const sithSideDiv = document.createElement("div");
const sithSideLogo = document.createElement("img");
const jediSideDiv = document.createElement("div");
const jediSideLogo = document.createElement("img");

//Append
headerElement.insertAdjacentElement("afterend", contentContainer);
contentContainer.insertAdjacentHTML("afterbegin", "<h2>Choose your side</h2>");
const contentTitle = document.body.querySelector("h2");
contentContainer.append(contentChooseContainer);
contentContainer.append(sideLogoContainer);
sideLogoContainer.append(sithSideDiv);
sithSideDiv.append(sithSideLogo);
sithSideLogo.insertAdjacentHTML("afterend", "<p>Orden of Sith</p>");
sideLogoContainer.append(jediSideDiv);
jediSideDiv.append(jediSideLogo);
jediSideLogo.insertAdjacentHTML("afterend", "<p>Orden of Jedi</p>");
document.body.insertAdjacentHTML("beforeend", `<footer>
    <div class='footer-information'>
        <p class="rights">&copy 2021 All Rights Reserved</p>
        <p class="creator">Created by <a href="https://github.com/BlackTowerKing">DarkTowerStudio</a></p>
    </div>
</footer>`)
const footerContainer = document.getElementsByClassName("footer-information");
const footerRights = document.querySelector(".rights");
const footerCreator = document.querySelector(".creator");

//Styles
document.body.style.padding = "0";
document.body.style.margin = "0";
document.body.style.fontFamily = "'Orbitron', sans-serif";
headerElement.style.cssText = "background-image: linear-gradient(to right, black, red, blue, lightblue);";
headerContainer.style.cssText = "height: 22vh; margin: 0 auto;  display: flex; justify-content: space-between; align-items: center; text-align: center; border-bottom: 2px solid rgb(0, 0, 0);";
headerLeftImage.style.cssText = "width: 180px; max-height: 180px; outline: 0; border: 0;  align-self: end;";
headerTitle.style.cssText = "color: rgba(0, 0, 0, 0.4); font-size: 3rem; text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.8);";
headerRightImage.style.cssText = "width: 100px; max-height: 100px; outline: 0; border: 0; align-self: end;";
contentContainer.style.cssText = "height: 72vh; background: url(./img/space-stars-sky.png) 100% 100% no-repeat; background-size: cover;"
contentTitle.style.cssText = "max-width: 400px; margin: 0 auto; font-size: 5rem; text-align: center; background: linear-gradient(to right, black, red, blue, lightblue); -webkit-background-clip: text; -webkit-text-fill-color: transparent;";
sideLogoContainer.style.cssText = "display: flex; justify-content: space-around;";
sithSideDiv.style.cssText = "width: 150px; height: 150px; text-align: center; cursor: pointer; color: red;";
jediSideDiv.style.cssText = "width: 150px; height: 150px; text-align: center; cursor: pointer; color: blue;";
footerContainer[0].style.cssText = "display: flex; justify-content: space-around; background-color: rgba(9, 12, 21, 1)";
footerRights.style.color = "red";
footerRights.style.textAlign = "center";
footerCreator.style.color = "white";
footerCreator.style.textAlign = "center";

sithSideDiv.addEventListener("mouseover", () => {
    sithSideDiv.style.cssText = "width: 150px; height: 150px; text-align: center; cursor: pointer; color: red; transform: scale(1.2); transition: all 1s";
});
sithSideDiv.addEventListener("mouseout", () => {
    sithSideDiv.style.cssText = "width: 150px; height: 150px; text-align: center; cursor: pointer; color: red;";
});

jediSideDiv.addEventListener("mouseover", () => {
    jediSideDiv.style.cssText = "width: 150px; height: 150px; text-align: center; cursor: pointer; color: blue; transform: scale(1.2); transition: all 1s";

});
jediSideDiv.addEventListener("mouseout", () => {
    jediSideDiv.style.cssText = "width: 150px; height: 150px; text-align: center; cursor: pointer; color: blue;";
});

if (document.body.offsetWidth < 500) {
    headerTitle.style.fontSize = "1.5rem";
    contentTitle.style.fontSize = "2rem";
}
window.addEventListener("resize", () => {
    if (document.body.offsetWidth < 500) {
        headerTitle.style.fontSize = "1.5rem";
        contentTitle.style.fontSize = "2rem";
    } else {
        headerTitle.style.fontSize = "3rem";
        contentTitle.style.fontSize = "5rem";
    }
});

//Attributes
headerLeftImage.setAttribute("src", "./img/palpatine.png");
headerRightImage.setAttribute("src", "./img/mini-yoda.png");
sithSideLogo.setAttribute("src", "./img/sithOrderSymbol.png");
jediSideLogo.setAttribute("src", "./img/jediOrderSymbol.png");


sithSideDiv.addEventListener("click", () => {
    sideLogoContainer.remove();
    contentTitle.remove();
    contentContainer.style.cssText = "height: 72vh; background-color: rgb(51, 34, 34); background-image: -moz-radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%); transition: all 1s;";
    contentContainer.innerHTML = "<div style='height: 100%'><ul class='menu'></ul></div>";
    const sithMenuContainer = document.querySelector(".menu");
    sithMenuContainer.style.cssText = "color: beige; margin: 0px; cursor: pointer; width: 200px; list-style-type: none; background-image: linear-gradient(to right, black, red); padding: 30px 20px; height: 91%;";
    for (let menuKey in jsonData) {
        sithMenuContainer.innerHTML += `<li style="text-transform: uppercase; font-size: 1.7rem;">${menuKey}</li>`;
    }
    sithMenuContainer.addEventListener("click", (e) => {
        const elemLi = sithMenuContainer.querySelectorAll("li");
        for(elem of elemLi){
            if(e.target === elem) {
                if (sithMenuContainer.querySelector(".submenu") !== null) {
                    let submenu = sithMenuContainer.querySelector(".submenu");
                    submenu.remove();
                } else {
                    e.target.innerHTML += "<ul class='submenu'></ul>";
                    let submenu = sithMenuContainer.querySelector(".submenu");
                    let keyMenu = e.target.innerText.toLowerCase();
                    for (let submenuKey of jsonData[keyMenu]) {
                        if (submenuKey.orden === "Sith") {
                            submenu.insertAdjacentHTML("beforeend", `<li style="text-transform: capitalize; font-size: 1.2rem;">${submenuKey.name}</li>`);
                        }
                    }
                }
            }
        }
        
    })
});

jediSideDiv.addEventListener("click", () => {
    sideLogoContainer.remove();
    contentTitle.remove();
    contentContainer.style.cssText = "display: flex; justify-content: end; height: 72vh; background-color: #222233; background-image:  -moz-radial-gradient(center, circle cover, transparent 0%, #000 100%); transition: all 1s";
    contentContainer.innerHTML = "<div style='height: 100%'><ul class='menu'></ul></div>";
    const jediMenuContainer = document.querySelector(".menu");
    jediMenuContainer.style.cssText = "color: beige; margin: 0px; cursor: pointer; width: 200px; list-style-type: none; background-image: linear-gradient(to right, blue, lightblue); padding: 30px 20px; height: 91%;"
    for (let menuKey in jsonData) {
        jediMenuContainer.innerHTML += `<li style="text-transform: uppercase; font-size: 1.7rem;">${menuKey}</li>`;
    }
    jediMenuContainer.addEventListener("click", (e) => {
        if (jediMenuContainer.querySelector(".submenu") !== null) {
            let submenu = jediMenuContainer .querySelector(".submenu");
            submenu.remove();
        } else {
            e.target.innerHTML += "<ul class='submenu'></ul>";
            let submenu = jediMenuContainer .querySelector(".submenu");
            let keyMenu = e.target.innerText.toLowerCase();
            for (let submenuKey of jsonData[keyMenu]) {
                if (submenuKey.orden === "Jedi") {
                    submenu.insertAdjacentHTML("beforeend", `<li style="text-transform: capitalize; font-size: 1.2rem;">${submenuKey.name}</li>`);
                }
            }
        }
    })
});
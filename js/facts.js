let factsObj = {
	config: {
		catHomeTitle: "Facts",
		catHomeColor: "#00F2F7",
	},

	// Category: Mythology
	0: {
		config: {
			catTitle: "Mythology",
			catPathName: "mythology", // name of the image folder, no spaces. It's used for concatenating the slide img src
			catImg: "mythology.png",
			catColor: "#F4C13B",
		},

		// Sub-Category: Greco Roman
		0: {
			config: {
				subcatTitle: "Greco-Roman",
				subcatPathName: "greco-roman", // name of the image folder, no spaces. It's used for concatenating the slide img src
				subcatColor: "#CE4629",
				index: 0,
			},

			// Slides. 0-indexed
			0: {
				text: `Prometheus was the son of the Titan Iapetus and the Oceanid Clymene. Even though a Titan himself, together with his brother Epimetheus, he sided with Zeus during the Titanomachy. However, after helping Zeus to achieve victory in the war, he started a quarrel with him over his supposed unfair treatment of humanity. This led to Prometheus stealing the fire from the gods and gifting it to humanity, which resulted in Zeus chaining Prometheus and sending an eagle to prey upon his continually regenerating liver. After some time, Zeus’ son Heracles shot the eagle and freed Prometheus, and the Titan subsequently made peace with his savior’s father.`,
				reference:`https://www.greekmythology.com/Titans/Prometheus/prometheus.html`,
				pic: "414px-Heinrich_fueger_1817_prometheus_brings_fire_to_mankind.jpg",
			},

			1: {
				text: `In Greek mythology, the Minotaur is a mythical creature portrayed during classical antiquity with the head and tail of a bull and the body of a man or, as described by Roman poet Ovid, a being "part man and part bull". He dwelt at the center of the Labyrinth, which was an elaborate maze-like construction designed by the architect Daedalus and his son Icarus, on the command of King Minos of Crete. The Minotaur was eventually killed by the Athenian hero Theseus.`,
				reference:`https://en.wikipedia.org/wiki/Minotaur`,
				pic: "220px-Minotauros_Myron_NAMA_1664_n1.jpg",
			},

			2: {
				text: `Chloris was a nymph that lived in the Elysian Fields, the area of the Underworld where the worthy souls lived. She was abducted by the god of the west wind, Zephyrus, whom she later married. She also transformed a number of mythological figures into flowers, including Adonis, Attis, Crocus, Hyacinthus and Narcissus.`,
				reference:`https://www.greekmythology.com/Myths/Figures/Chloris/chloris.html`,
				pic: "Chloris.webp",
			},

			3: {
				text: `In Greek mythology, Zeus made and sent Pandora (the first woman) to punish Prometheus for stealing fire: "Before her departure, Pandora was given a range of divine gifts by each of the Olympian gods. Athena taught her all the fine crafts and dressed her in silvery robes, Aphrodite gave her grace and the means to create burning desire, and Hermes gave her "a dog's mind and a thievish character" and in her breast "set lies and guileful words" (Works & Days, 67-68, 77-78). If that was not enough, she was adorned with fine jewellery by the Graces, crowned with a magnificent golden headband made by Hephaistos, and given garlands of spring flowers by the Seasons. Finally, Pandora was given a large storage jar to take down to earth which she was told she must never open under any circumstances."`,
				reference:`https://www.worldhistory.org/Pandora/`,
				pic: "9e868b56c034bc36826843571fd25434--pandoras-box-contemporary-artists.jpg",
			},
		},

		// Sub-Category: Norse
		1: {
			config: {
				subcatTitle: "Norse",
				subcatPathName: "norse", // name of the image folder, no spaces. It's used for concatenating the slide img src
				subcatColor: "#417659",
				index: 0,
			},

			//Slides. 0-indexed
			0: {
				text: `Yggdrasil, in Norse cosmology, is an immense and central sacred tree. Around it exists all else, including the Nine Worlds.

				Yggdrasil is an immense ash tree that is central to the cosmos and considered very holy. The gods go to Yggdrasil daily to assemble at their traditional governing assemblies, called things`,
				reference:`https://en.wikipedia.org/wiki/Yggdrasil`,
				pic: "220px-The_Ash_Yggdrasil_by_Friedrich_Wilhelm_Heine.jpg",
			},

			1: {
				text: "Jörmungandr is the Midgard Serpent (also World Serpent) in Norse mythology who encircles the realm of Midgard. He is the son of the god Loki and the giantess Angrboða and brother of the great wolf Fenrir and Hel, Queen of the Dead. At Ragnarök, the Twilight of the Gods, he slays and is slain by the god Thor.",
				reference:`https://www.worldhistory.org/Jormungandr/`,
				pic: "luca-lonardi-7thor.jpg",
			},

			2: {
				text: 'In Norse mythology, Ratatoskr (Old Norse, generally considered to mean "drill-tooth" or "bore-tooth") is a squirrel who runs up and down the world tree Yggdrasil to carry messages between the eagles perched atop Yggdrasil, and the serpent Níðhöggr, who dwells beneath one of the three roots of the tree.',
				reference:`https://en.wikipedia.org/wiki/Ratatoskr`,
				pic: "AM_738_4to_Ratatoskr.png",
			},

			3: {
				text: `In Norse mythology, Níðhöggr (Malice Striker, in Old Norse traditionally also spelled Níðhǫggr, often anglicized Nidhogg) is a dragon who gnaws at a root of the world tree, Yggdrasil. In historical Viking society, níð was a term for a social stigma, implying the loss of honor and the status of a villain. Thus, its name might refer to its role as a horrific monster in its action of chewing the corpses of the inhabitants of Náströnd: those guilty of murder, rape, and oath-breaking.`,
				reference:``,
				pic: "nidhogg_1024x1024.webp",
			},
		},
	},

	// Category: Nature
	1: {
		config: {
			catTitle: "Nature",
			catImg: "nature.png",
			catPathName: "nature", // name of the image folder, no spaces. It's used for concatenating the slide img src
			catColor: "#9EC221",
		},

		// Sub-Category: Weather
		0: {
			config:{
				subcatTitle: "Weather",
				subcatPathName: "weather", // name of the image folder, no spaces. It's used for concatenating the slide img src
				subcatColor: "#EC1F0F",
				index: 0,
			},

			// Slides. 0-indexed
			0: {
				text: `Rain can set up vibrations on top of the soil like mole vibrations," said Professor Josef Gorres of the University of Vermont's Department of Plant and Soil Science. "Similar to how earthworms move upwards and out of the way when predator vibrations are felt, they could move in a similar way for rain vibrations."

				Similarly, humans create vibrations when "fiddling" for bait earthworms.

				To coax worms from their burrows, fishermen run a piece of steel or a hand saw across the top of a stake, which causes a rubbing sound to occur as the stake vibrates.`,
				reference: "https://www.scientificamerican.com/article/why-earthworms-surface-after-rain/",
				pic: "063-earthworms-main-image.jpg",
			},

			1: {
				text: "The Kerala red rain phenomenon was a blood rain (red rain) event that occurred from 25 July to 23 September 2001, when heavy downpours of red-coloured rain fell sporadically on the southern Indian state of Kerala...",
				reference:`http://www.mysteryofindia.com/2014/09/mystery-of-red-rain-in-india.html`,
				pic: "redRain.png",
			},

			2: {
				text: `The windiest place on Earth is just East of Cape Farewell. It is off the southern tip of Greenland, east of the ominously-named Cape Farewell. Winds there routinely, and for long periods, run at more than 45 miles per hour, and that’s measured by a buoy right at the surface (the buoy, one learns, eventually ripped free of its deep sea anchor).`,
				reference:`https://ksj.mit.edu/tracker-archive/science-news-cape-farewell-windiest-stre/`,
				pic: "57d25-cape-farewell-greenland-map-6.jpg",
			},

			3: {
				text: "Frogs croak louder before a rainstorm... or DO they??",
				reference:`https://www.almanac.com/fact/do-frogs-croak-more-before-a-rainstormr#:~:text=Do%20frogs%20croak%20more%20before%20a%20rainstorm%3F,-Answer&text=Scientists%20would%20probably%20say%20no,let%20you%20decide%20for%20yourself.`,
				pic: "PRI_196422137.webp",
			},
		},
	
		// Sub-Category: Extreme Creatures
		1: {
			config:{
				subcatTitle: "Extreme Creatures",
				subcatPathName: "extreme-creatures", // name of the image folder, no spaces. It's used for concatenating the slide img src
				subcatColor: "#F4BB44",
				index: 0,
			},

			// Slides. 0-indexed
			0: {
				text: `The longest recorded reticulated python was discovered in 1912 and measured 10 meters, or about 32.8 feet, long. This snake was longer than the height of a giraffe, says the Natural History Museum.`,
				reference:`https://www.usatoday.com/story/news/2022/10/05/biggest-snake-in-the-world/10264598002/`,
				pic: "636264781786588515-GettyImages-517839062.webp",
			}
		},
	},

	// Category: Freaky
	2: {
		config:{
			catTitle: "Freaky",
			catImg: "freaky.png",
			catPathName: "freaky", // name of the image folder, no spaces. It's used for concatenating the slide img src
			catColor: "#5AED6B",
		},

		// Sub-Category: Anomalies
		0: {
			config:{
				subcatTitle: "Anomalies",
				subcatPathName: "anomalies", // name of the image folder, no spaces. It's used for concatenating the slide img src
				subcatColor: "#4EC7A6",
				index: 0,
			},

			// Slides. 0-indexed
			0: {
				text: `Sailing Stones: Sailing stones (also called sliding rocks, walking rocks, rolling stones, and moving rocks) are part of the geological phenomenon in which rocks move and inscribe long tracks along a smooth valley floor without animal intervention. The movement of the rocks occurs when large, thin sheets of ice floating on an ephemeral winter pond break up in the sun. Frozen during cold winter nights, these thin, floating ice panels are driven by wind and shove rocks at speeds up to 5 meters (16') per minute.`,
				reference: "https://en.wikipedia.org/wiki/Sailing_stones",
				pic: "Racetrack_Playa_in_Death_Valley_National_Park.jpg",
			},

			1: {
				text: `The Lake George Mystery Spot (Lake George, NY): If you stand in this exact spot, facing the lake, and start shouting, you’ll hear your own voice echo back to you as if from another dimension. Only you can hear it, and only in this precise spot.

				The acoustical phenomenon will make your voice sound tinny to your own ears, while the other visitors around you will wonder why you are standing around shouting or singing opera. Only when they stand in the direct center as well will they too hear the effect.` ,
				reference:`https://www.atlasobscura.com/places/lake-george-mystery-spot`,
				pic: "79d72d177ace7bdbf1_Screen Shot 2016-10-05 at 11.18.09 AM.png",
			},

			2: {
				text: `In the Summer of 1949, a geologist named Vadim Kolpakov discovered a strange feature on the surface of the earth in the Bodaibo, Irkutsk, region of South-Eastern Siberia. Encircled by a largely treed area, this anomaly is oval with a conical crater that contains a small ball-like mound in its middle. The entire structure consists of broken grey limestone. Its width is between 130-160 meters, while the cone is up to 80 meters high. Oddly, few trees grow on the formation, however, the surrounding conifers have experienced rapid growth. Named the Patomskiy Crater, the Kolpakov Cone, and the Fire Eagle Nest, the geologic mystery has baffled scientists who are uncertain of what caused this weird formation.`,
				reference:`https://www.historicmysteries.com/patomskiy-crater-what-caused-it/`,
				pic: "Patomsky_crater-1.webp",
			},

			3: {
				text: `The Taos Hum: The hum seems to have first been reported in the early 1990s. Joe Mullins, a professor emeritus of engineering at the University of New Mexico, conducted research into the Taos Hum. Based on a survey of residents, about 2 percent of the general population was believed to be "hearers," those who claimed to detect the hum.`,
				reference:`https://www.krqe.com/fox-new-mexico/the-legend-of-the-taos-hum-continues/`,
				pic: "qdqgJWb69Wg9hChX4niVj5-970-80.jpg.webp",
			},
		},
	},

	// Category: Warfare
	3: {
		config:{
			catTitle: "Warfare",
			catImg: "warfare.png",
			catPathName: "warfare", // name of the image folder, no spaces. It's used for concatenating the slide img src
			catColor: "#d67554",
		},

		// Sub-Category: Heroic Feats
		0: {
			config:{
				subcatTitle: "Heroic Feats",
				subcatPathName: "heroic-feats", // name of the image folder, no spaces. It's used for concatenating the slide img src
				subcatColor: "#e1bb82",
				index: 0,
			},

			// Slides. 0-indexed
			0: {
				text: `Bennie G. Adkins, 1966 (US Army, Vietnam): During the early morning hours of March 10th (1966), enemy forces launched their main assault. Within two hours, Sergeant First Class Adkins was the only defender firing a mortar weapon. When all mortar rounds were expended, Adkins began placing effective rifle fire upon [enemies] as they infiltrated the camp perimeter and assaulted his position. Despite receiving additional wounds from enemy rounds exploding on his position, Adkins fought off relentless waves of attacking North Vietnamese soldiers.

				Adkins then withdrew to regroup with a smaller element of soldiers at the communications bunker. While there, he single-handedly eliminated numerous insurgents with small arms fire, almost completely exhausting his supply of ammunition. Braving intense enemy fire, he returned to the mortar pit, gathered vital ammunition and evaded fire while returning to the bunker. After the order was given to evacuate the camp, Sergeant First Class Adkins and a small group of soldiers destroyed all signal equipment and classified documents, dug their way out of the rear of the bunker, and fought their way out of the camp.
				
				Because of his efforts to carry a wounded soldier to an extraction point and leave no one behind, Sergeant First Class Adkins and his group were unable to reach the last evacuation helicopter. Adkins then rallied the remaining survivors and led the group into the jungle - evading the enemy for 48 hours until they were rescued by helicopter on March 12th. During the 38-hour battle and 48-hours of escape and evasion, Adkins fought with mortars, machine guns, recoilless rifles, small arms, and hand grenades, killing an estimated 135 - 175 of the enemy and sustaining 18 different wounds.`,
				reference: "https://www.army.mil/medalofhonor/adkins/",
				pic: "adkins_bennie.jpg",
			},
		},
	},
};
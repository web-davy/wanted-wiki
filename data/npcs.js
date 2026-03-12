const NPCS_DATA = [
  {
    name: "Erik",
    showMoreButton: true,
    team: "CRIMINAL",
    location: "Syndicate Headquarters",
    description: "Arms dealer specializing in guns, ammo, and modifications. Offers Artisan missions for testing gun mods."
  },
  {
    name: "Dan",
    showMoreButton: true,
    team: "NEUTRAL",
    location: "Dans Diner",
    description: "Diner owner facing meat shortages. Seeks alternative supplies through the Forbidden Meat mission."
  },
  {
    name: "Sir.B",
    showMoreButton: true,
    team: "CRIMINAL",
    location: "Syndicate Headquarters",
    description: "Syndicate leader directing operations against law enforcement and specializing in black market dealing."
  },
  {
    name: "Bert",
    showMoreButton: true,
    team: "POLICE",
    location: "Oasis City Police Station",
    description: "Officer recruiting undercover agents from criminal ranks via the Loyalty Test mission."
  },
  {
    name: "Softy",
    showMoreButton: true,
    team: "NEUTRAL",
    location: "Crystal Club & Resort",
    description: "Crystal Club & Resort employee currently assigned to the Daily Wheel Spin, available after 15 minutes of playtime."
  },
  {
    name: "Justin",
    showMoreButton: true,
    team: "NEUTRAL",
    location: "Lock n' Load Armory",
    description: "Owner of Lock n’ Load Armory, specializing in the sale and modification of weapons."
  },
  {
    name: "Cody",
    showMoreButton: true,
    team: "NEUTRAL",
    location: "Bayview Motors",
    description: "The owner of Bayview Motors, offering car sales and custom modifications."
  },
  {
    name: "Davy",
    showMoreButton: true,
    team: "NEUTRAL",
    location: "Davis Heliport",
    description: "The owner of Davis Heliport, offering helicopters and other flying vehicles for sale."
  },
  {
    name: "Rod",
    showMoreButton: true,
    team: "CRIMINAL",
    location: "Oasis City Port",
    description: "The current manager of Oasis City Port, specializing in across the sea trading. You can sell guns to him, get random loot crates, and buy vault crackers from him.",
    dialogue: {
      "Any valuable shipment today? ($200)": [
        { title: "Theres a weird crate that hardly weighs anything", dialogue: "2 Bitcoin" },
        { title: "Theres a strange order on the manifest. Looks to be Government", dialogue: "2 Secret Files and Flash Drive" },
        { title: "There's a shipment of diamonds on the manifest today", dialogue: "2 Diamonds" },
        { title: "Some illicit cargo came in today", dialogue: "1 Money Printer" },
        { title: "Big shipment of gems just came in", dialogue: "4 Gems Total (Diamonds, Amethyst, Emeralds, Rubies, Sapphires)" },
        { title: "An order from the bank came in - big cash shipment", dialogue: "+10K Cash" },
        { title: "Saw an order from Oasis Jewelry", dialogue: "5 Jewelry Total (Rollie, Amethyst/Diamond/Emerald/Ruby/Sapphire Rings, Pearl Necklace, Gold Chain)" },
        { title: "Theres an order here for some expensive tech parts", dialogue: "PearPods, HDDs, PearWatches, PSU (Chance at GPU? Bugged?)" },
        { title: "There's some real heavy weapons", dialogue: "AWM, RPG, M60 (M4A1?)" },
        { title: "I saw a shipment of some military-grade weapons", dialogue: "AWM, ARX, SPAS, RPG, AK47" },
        { title: "Looks like a shipment of gold pear tech", dialogue: "(2 Goldbooks, 2 Goldphones, 2 Gold Pods, 2 Gold Watches)" }
      ],
      "What can I get for this? ($200)": [
        { title: "", dialogue: "" },
        { title: "", dialogue: "" }
      ]
    }
  },
  {
    name: "Ofy",
    showMoreButton: true,
    team: "CRIMINAL",
    location: "Ofys Value Pawn",
    description: "Ofy is the main guy where you can sell your hard earned (stolen) loot. He gives cash instantly but at a lower price point than Sir.B."
  }
];
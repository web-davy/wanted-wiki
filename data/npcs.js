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
    dialogues: {
      "Any valuable shipment today? ($200)": [
        { text: "Theres a weird crate that hardly weighs anything", reward: "2 Bitcoin" },
        { text: "Theres a strange order on the manifest. Looks to be Government", reward: "2 Secret Files and Flash Drive" },
        { text: "There's a shipment of diamonds on the manifest today", reward: "2 Diamonds" },
        { text: "Some illicit cargo came in today", reward: "1 Money Printer" },
        { text: "Big shipment of gems just came in", reward: "4 Gems Total (Diamonds, Amethyst, Emeralds, Rubies, Sapphires)" },
        { text: "An order from the bank came in - big cash shipment", reward: "+10K Cash" },
        { text: "Saw an order from Oasis Jewelry", reward: "5 Jewelry Total (Rollie, Amethyst/Diamond/Emerald/Ruby/Sapphire Rings, Pearl Necklace, Gold Chain)" },
        { text: "Theres an order here for some expensive tech parts", reward: "PearPods, HDDs, PearWatches, PSU (Chance at GPU? Bugged?)" },
        { text: "There's some real heavy weapons", reward: "AWM, RPG, M60 (M4A1?)" },
        { text: "I saw a shipment of some military-grade weapons", reward: "AWM, ARX, SPAS, RPG, AK47" },
        { text: "Looks like a shipment of gold pear tech", reward: "(2 Goldbooks, 2 Goldphones, 2 Gold Pods, 2 Gold Watches)" }
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
const MISSIONS_DATA = [
  // Game Missions
  {
    id: "bank-heist",
    showMoreButton: true,
    title: "Bank Heist",
    location: "Tutorial",
    description: "We've been watching you. Don't know who we are? Good, let's keep it that way for now.If you want to be a real criminal, you're going to have to prove you're worthy by doing a big job.Hit the central bank downtown and that will get you our respect.",
    howToComplete: "Locate the Bank, use the elevator, rob the vault, and escape.",
    difficulty: "EASY",
    missionType: "Game",
    rewards: ["$5,000"]
  },
  {
    id: "get-rolling",
    showMoreButton: true,
    title: "Get Rolling",
    location: "Tutorial",
    description: "Navigating the terrain of the Oasis is challenging, so let's get you a new set of wheels. Go to the Bayview Dealership and ask for Cody. He'll be expecting you.",
    howToComplete: "Locate the Dealership, talk to Cody, and purchase the Nomad for free.",
    difficulty: "EASY",
    missionType: "Game",
    rewards: ["$5,000"]
  },

  // Erik Missions
  {
    id: "1-artisan",
    showMoreButton: true,
    title: "1 Artisan",
    location: "Criminal Outpost – Talk to Erik",
    description: "I've been brainstorming some ideas for gun modifications, but I'm too busy to test them myself. I want you to follow these instructions exactly, test them out, and then get back to me: Mod UMP 45 with Holographic Sight and a Tactical Laser.",
    howToComplete: "Mod the UMP 45 with a Holographic Sight and a Tactical Laser.",
    difficulty: "EASY",
    missionType: "Erik",
    rewards: ["$20,000"]
  },
  {
    id: "2-artisan",
    showMoreButton: true,
    title: "2 Artisan",
    location: "Criminal Outpost – Talk to Erik",
    description: "Back for more? Let's get to it. Same as last time: set up the gun, test it out, and head back here. Mod the Model 870 with 12 Gauge Slugs and Vertical Foregrip.",
    howToComplete: "Mod the Model 870 with 12 Gauge Slugs and a Vertical Foregrip.",
    difficulty: "EASY",
    missionType: "Erik",
    rewards: ["$25,000"]
  },
  {
    id: "3-artisan",
    showMoreButton: true,
    title: "3 Artisan",
    location: "Criminal Outpost – Talk to Erik",
    description: "Let's get right into it. Set up the gun, test it out, and come back: Mod Uzi with Mono Suppressor and Uzi Stock.",
    howToComplete: "Mod the Uzi with a Mono Suppressor and an Uzi Stock.",
    difficulty: "EASY",
    missionType: "Erik",
    rewards: ["$40,000"]
  },
  {
    id: "4-artisan",
    showMoreButton: true,
    title: "4 Artisan",
    location: "Criminal Outpost – Talk to Erik",
    description: "Let's get right into it. Set up the gun, test it out, and come back: Bring me a modded AK-47 with Mono Suppressor, Tactical Laser, and Horizontal Foregrip.",
    howToComplete: "Mod the AK-47 with a Mono Suppressor, a Tactical Laser, and a Horizontal Foregrip.",
    difficulty: "MEDIUM",
    missionType: "Erik",
    rewards: ["$60,000"]
  },
  {
    id: "5-artisan",
    showMoreButton: true,
    title: "5 Artisan",
    location: "Criminal Outpost – Talk to Erik",
    description: "Let's get right into it. Set up the gun, test it out, and come back: Bring me a modded Glock 18c with Pistol Suppressor, Reflex Sight and Glock Stock.",
    howToComplete: "Mod the Glock 18c with a Pistol Suppressor, a Reflex Sight, and a Glock Stock.",
    difficulty: "MEDIUM",
    missionType: "Erik",
    rewards: ["$75,000"]
  },
  {
    id: "6-artisan",
    showMoreButton: true,
    title: "6 Artisan",
    location: "Criminal Outpost – Talk to Erik",
    description: "Let's get right into it. Set up the gun, test it out, and come back: Bring me a modded M4A1 with ACOG, Horizontal Foregrip, and Tactical Laser.",
    howToComplete: "Mod the M4A1 with an ACOG, a Horizontal Foregrip, and a Tactical Laser.",
    difficulty: "HARD",
    missionType: "Erik",
    rewards: ["$85,000"]
  },
  {
    id: "7-artisan",
    showMoreButton: true,
    title: "7 Artisan",
    location: "Criminal Outpost – Talk to Erik",
    description: "Let's get right into it. Set up the gun, test it out, and come back: Bring me a modded AWM with Reflex Sight, Mono Suppressor and Tactical Laser.",
    howToComplete: "Mod the AWM with a Reflex Sight, a Mono Suppressor, and a Tactical Laser.",
    difficulty: "HARD",
    missionType: "Erik",
    rewards: ["$100,000"]
  },
  {
    id: "8-artisan",
    showMoreButton: true,
    title: "8 Artisan",
    location: "Criminal Outpost – Talk to Erik",
    description: "Let's get right into it. Set up the gun, test it out, and come back: Bring me a modded M60 with Rifle Scope and M60 Bipod.",
    howToComplete: "Mod the M60 with a Rifle Scope and an M60 Bipod.",
    difficulty: "HARD",
    missionType: "Erik",
    rewards: ["$200,000"]
  },

  // Dan Missions
  {
    id: "forbidden-meat",
    showMoreButton: true,
    title: "Forbidden Meat",
    location: "Dans Diner – Talk to Dan",
    description: "Business has been rough lately: meat prices have skyrocketed. If you can help find an alternative supply, we'll be able to stay open. Find a good meat source, and use the grinder in the back room to see if it makes for good burger meat.",
    howToComplete: "Put a player inside the meat grinder to make them into burgers.",
    difficulty: "MEDIUM",
    missionType: "Dan",
    rewards: ["$20,000", "Meat Grinder Furniture"]
  },

  // Sir. B Missions
  {
    id: "fuel-depot",
    showMoreButton: true,
    title: "Fuel Depot",
    location: "Criminal Outpost – Talk to Sir.B",
    description: "We've been in the shadows for far too long. I think it's time we come out of hiding. I want to put a real scare into those cops, so let's make some fireworks. Fuel Tankers are the target. You'll need explosives to really make them go boom. Find 3 different tankers and light them up.",
    howToComplete: "Destroy 3 of the 5 tankers located at the Bank, Military, Airport, Gas Station (near Pawn Shop), and Crystal Resort.",
    difficulty: "EASY",
    missionType: "Sir. B",
    rewards: ["$25,000"]
  },

  // Bert Missions
  {
    id: "loyalty-test",
    showMoreButton: true,
    title: "Loyalty Test",
    location: "Police Station – Talk to Bert",
    description: "If you want to move up in the police force, you'll need to prove your loyalty. There have been reports of new underground criminal activity, and we could use an undercover. Maybe we can use your connections to our advantage...",
    howToComplete: "Locate the Criminal Hideout at the Badlands.",
    difficulty: "EASY",
    missionType: "Bert",
    rewards: ["$25,000", "Access to the Police Team"]
  },
  {
    id: "bounty-hunt",
    showMoreButton: true,
    title: "Bounty Hunt",
    location: "Police Station – Talk to Bert",
    description: "There's been a major influx of criminal activity in the city and we need to find the source. Arrest three wanted criminals: then I'll put our interrogator to work and see if we can learn anything useful.",
    howToComplete: "Arrest 3 criminals.",
    difficulty: "MEDIUM",
    missionType: "Bert",
    rewards: ["$50,000"]
  },

  // Christmas Missions
  {
    id: "santas-helper",
    showMoreButton: true,
    title: "Santas Helper",
    location: "Park – Talk to Santa",
    description: "I was flying over the mountains into the city and a gust of wind knocked my sleigh and presents out of the sky! Please, help me find them! Christmas depends on it!",
    howToComplete: "Give Santa 1 Small Present, 1 Big Present, and 1 Huge Present.",
    difficulty: "CHRISTMAS",
    missionType: "Christmas",
    rewards: ["$25,000"]
  },
  {
    id: "toy-drive",
    showMoreButton: true,
    title: "Toy Drive",
    location: "Park – Talk to Santa",
    description: "It turns out there were some priceless toys in this year's presents that I can't afford to lose. Bring them back to me and I'll make it worth your while!",
    howToComplete: "Give Santa 1 Nutcracker, 1 Candy Cane, and 1 Gold Phone.",
    difficulty: "CHRISTMAS",
    missionType: "Christmas",
    rewards: ["$60,000", "LED Reindeer Furniture"]
  },
  {
    id: "toy-drive-2",
    showMoreButton: true,
    title: "Toy Drive 2",
    location: "Park – Talk to Santa",
    description: "Kids are getting more and more spoiled every year! These toys will be harder to find, but I'll put in a good word for you with the Easter Bunny if you succeed!",
    howToComplete: "Give Santa 1 GPU, 1 Gold Book, and 1 Snow Globe.",
    difficulty: "CHRISTMAS",
    missionType: "Christmas",
    rewards: ["$100,000", "Snowflake Rims"]
  },
  {
    id: "jingle-balls",
    showMoreButton: true,
    title: "Jingle Balls",
    location: "Park – Talk to Santa",
    description: "Mrs. Claus doesn't think our tree is fancy enough... In the spirit of Christmas, can you find me some ornaments?",
    howToComplete: "Give Santa 5 Red Ornaments, 5 Green Ornaments, and 5 Blue Ornaments.",
    difficulty: "CHRISTMAS",
    missionType: "Christmas",
    rewards: ["$40,000", "Christmas 2025 Plate"]
  },
  {
    id: "jingle-balls-2",
    showMoreButton: true,
    title: "Jingle Balls 2",
    location: "Park – Talk to Santa",
    description: "Mrs. Claus doesn't think our tree is fancy enough... In the spirit of Christmas, can you find me some extra expensive ornaments?",
    howToComplete: "Give Santa 8 Gold Ornaments, 2 White Ornaments, and 1 Diamond.",
    difficulty: "CHRISTMAS",
    missionType: "Christmas",
    rewards: ["$250,000", "Nutcracker Furniture"]
  }
];

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
    title: "Artisan - Part 1",
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
    title: "Artisan - Part 2",
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
    title: "Artisan - Part 3",
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
    title: "Artisan - Part 4",
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
    title: "Artisan - Part 5",
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
    title: "Artisan - Part 6",
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
    title: "Artisan - Part 7",
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
    title: "Artisan - Part 8",
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
    id: "the-deposit",
    showMoreButton: true,
    title: "The Deposit",
    location: "Criminal Outpost – Talk to Sir.B",
    description: "Petty theft isn't glamorous, but every master thief starts small. I'd rather be a thief than a slave with a white collar, wouldn't you?\n\nHit 4 gas stations around Oasis. They keep their money in a safe in the back. Just dust for prints and crack the combo lock.",
    howToComplete: "Rob 4 Gas Station Safes.",
    difficulty: "EASY",
    missionType: "Sir. B",
    rewards: ["150 Syndicate XP", "$5,000"]
  },
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
  {
    id: "1-fence",
    showMoreButton: true,
    title: "Fence - Part 1",
    location: "Criminal Outpost – Talk to Sir.B",
    description: "You're gonna need connections to survive and make a name for yourself as a criminal.\n\nMoney talks. Work with my associate Ofy and sell $10,000 worth of stolen goods through the pawn shop.",
    howToComplete: "Sell $10,000 worth of stolen goods to Ofy at the pawn shop.",
    difficulty: "EASY",
    missionType: "Sir. B",
    rewards: ["100 Syndicate XP", "$3,000"]
  },
  {
    id: "2-fence",
    showMoreButton: true,
    title: "Fence - Part 2",
    location: "Criminal Outpost – Talk to Sir.B",
    description: "That was a good start, but now let's up the ante. This time, sell $30,000 worth of stolen goods through the pawn shop.\n\nPull off biggers jobs, get paid more. That's the name of the game.",
    howToComplete: "Sell $30,000 worth of stolen goods through the pawn shop.",
    difficulty: "EASY",
    missionType: "Sir. B",
    rewards: ["150 Syndicate XP", "$7,500"]
  },
  {
    id: "timepiece",
    showMoreButton: true,
    title: "Timepiece",
    location: "Criminal Outpost – Talk to Sir.B",
    description: "Ripping off rich people is the easiest way to make money in the crime game. There's this rich banking corporate type - Buck Moneymaker. He goes around flashing that watch of his, a priceless timepiece. I want you to steal it from him.\n\nCheck his office in the bank and bring it to me.",
    howToComplete: "Locate Buck's Office in the bank, steal the Priceless Watch, and return it to Sir B.",
    difficulty: "EASY",
    missionType: "Sir. B",
    rewards: ["100 Syndicate XP", "$3,000"]
  },
  {
    id: "1-teller",
    showMoreButton: true,
    title: "Teller - Part 1",
    location: "Criminal Outpost – Talk to Sir.B",
    description: "I'll let you in on a little secret: the entire system is designed to keep you down and poor. Banks are charging you money to get your own money out of the machine.\n\nWho ever thought you'd pay cash to get cash? That's where we've gotten to. They own you.",
    howToComplete: "Rob 20 ATMs and 20 Cash Registers.",
    difficulty: "EASY",
    missionType: "Sir. B",
    rewards: ["150 Syndicate XP", "$6,000"]
  },
  {
    id: "2-teller",
    showMoreButton: true,
    title: "Teller - Part 2",
    location: "Criminal Outpost – Talk to Sir.B",
    description: "If people actually had any understanding of our banking and monetary system, there would be a revolution by tomorrow morning.\n\nYou work hard, and your money gets deposited into a bank. They're stealing from you, too.",
    howToComplete: "Rob 60 ATMs and 60 Cash Registers.",
    difficulty: "MEDIUM",
    missionType: "Sir. B",
    rewards: ["300 Syndicate XP", "$15,000"]
  },
  {
    id: "1-weapons-cache",
    showMoreButton: true,
    title: "Weapons Cache - Part 1",
    location: "Criminal Outpost – Talk to Sir.B",
    description: "The Syndicate has hidden various weapons caches around the Oasis, but we've lost track of some of them.\n\nIf you can locate them, I'll be in your debt.",
    howToComplete: "Locate the Glock 18c, AK 47, and Benelli M1014 hidden caches.",
    difficulty: "EASY",
    missionType: "Sir. B",
    rewards: ["300 Syndicate XP", "$5,000"]
  },
  {
    id: "1-contraband",
    showMoreButton: true,
    title: "Contraband - Part 1",
    location: "Criminal Outpost – Talk to Sir.B",
    description: "We have some clients looking to procure powerful firearms. Ghost guns only, no serial numbers, nothing store bought.\n\nWhen you find them, sell them to Rod at the port. He'll facilitate the transaction.",
    howToComplete: "Sell 1 found Uzi, 1 found UMP 45, and 1 found AK-47 to Rod at the port.",
    difficulty: "EASY",
    missionType: "Sir. B",
    rewards: ["400 Syndicate XP", "$10,000"]
  },
  {
    id: "1-lockpicker",
    showMoreButton: true,
    title: "Lockpicker - Part 1",
    location: "Criminal Outpost – Talk to Sir.B",
    description: "A real professional is one who can open a safe without destroying it. You did well with the last job, this time I want you to go after luxury homes. Rich people only.\n\nSearch their houses, porches, garages and crack any safes you find.",
    howToComplete: "Rob 10 Personal Safes.",
    difficulty: "MEDIUM",
    missionType: "Sir. B",
    rewards: ["200 Syndicate XP", "$8,000"]
  },
  {
    id: "1-smuggler",
    showMoreButton: true,
    title: "Smuggler - Part 1",
    location: "Criminal Outpost – Talk to Sir.B",
    description: "You're trusted now. From now on, bring all stolen goods to me.\n\nI'll pay a hefty premium, double what Ofy was paying. For your trouble.",
    howToComplete: "Sell $30,000 worth of loot to Sir B.",
    difficulty: "EASY",
    missionType: "Sir. B",
    rewards: ["200 Syndicate XP", "$5,000"]
  },
  {
    id: "data-disk",
    showMoreButton: true,
    title: "Data Disk",
    location: "Criminal Outpost – Talk to Sir.B",
    description: "One of my agents was en route with critical information when their plane suddenly crash landed... no survivors.\n\nThe plane went down somewhere around Frostspire Summit. Find out what happened and retrieve the data.",
    howToComplete: "Locate the Crash Site and find the Data Disk.",
    difficulty: "EASY",
    missionType: "Sir. B",
    rewards: ["200 Syndicate XP", "$5,000"]
  },
  {
    id: "incriminating-data",
    showMoreButton: true,
    title: "Incriminating Data",
    location: "Criminal Outpost – Talk to Sir.B",
    description: "From what I could decrypt on the disk, members of the city's government are implicated in some shady dealings - things they don't want to come to light.\n\nThey'll do anything to keep the word from getting out, including going to war with The Syndicate. We need more evidence so we can stop them.",
    howToComplete: "Find 5 Flash Drives and bring them to Sir B.",
    difficulty: "MEDIUM",
    missionType: "Sir. B",
    rewards: ["300 Syndicate XP", "$6,000"]
  },
  {
    id: "1-syndicate-dogs",
    showMoreButton: true,
    title: "Syndicate Dogs - Part 1",
    location: "Criminal Outpost – Talk to Sir.B",
    description: "It's time for you to learn how to pull a proper jewel heist.You're gonna need the proper tools first. Go purchase the Buzzsaw from Ofy's pawn shop. It's the only thing strong enough to get through the display cases.",
    howToComplete: "Purchase a Buzzsaw from Ofy's pawn shop, locate the Jewelry Store, and break 5 display cases.",
    difficulty: "EASY",
    missionType: "Sir. B",
    rewards: ["200 Syndicate XP", "$5,000"]
  },
  {
    id: "2-syndicate-dogs",
    showMoreButton: true,
    title: "Syndicate Dogs - Part 2",
    location: "Criminal Outpost – Talk to Sir.B",
    description: "The jewelry vault is reinforced - high explosives won't cut it. You'll need a specialized drill.\n\nGo see Rod at the Port. He'll have what you need to break in.",
    howToComplete: "Find a Vault Cracker, break into the Jewelry Vault, and break 20 Jewelry Cases.",
    difficulty: "MEDIUM",
    missionType: "Sir. B",
    rewards: ["350 Syndicate XP", "$10,000"]
  },
  {
    id: "1-ring-collector",
    showMoreButton: true,
    title: "Ring Collector - Part 1",
    location: "Criminal Outpost – Talk to Sir.B",
    description: "Expensive rings fetch a high price on the black market. A client of mine wants some samples - could be a lucrative deal for both of us.",
    howToComplete: "Bring Sir B 2 Sapphire Rings, 2 Ruby Rings, and 2 Emerald Rings.",
    difficulty: "MEDIUM",
    missionType: "Sir. B",
    rewards: ["250 Syndicate XP", "$5,000"]
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
    title: "Toy Drive- Part 1",
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
    title: "Toy Drive - Part 2",
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
    title: "Jingle Balls - Part 1",
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
    title: "Jingle Balls - Part 2",
    location: "Park – Talk to Santa",
    description: "Mrs. Claus doesn't think our tree is fancy enough... In the spirit of Christmas, can you find me some extra expensive ornaments?",
    howToComplete: "Give Santa 8 Gold Ornaments, 2 White Ornaments, and 1 Diamond.",
    difficulty: "CHRISTMAS",
    missionType: "Christmas",
    rewards: ["$250,000", "Nutcracker Furniture"]
  }
];

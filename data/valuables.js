const VALUABLES_DATA = [
  // Gems
  { name: "Silver Bar", showMoreButton: false, rarity: "COMMON", category: "Gems", price: 250, weight: 2, location: "Bank of Oasis Vault, Jewelry Store, Drawers, Safes, Dock Crates" },
  { name: "Gold Bar", showMoreButton: false, rarity: "UNCOMMON", category: "Gems", price: 400, weight: 2, location: "Bank of Oasis Vault, Jewelry Store, Drawers, Safes, Dock Crates" },
  { name: "Sapphire", showMoreButton: false, rarity: "EPIC", category: "Gems", price: 2500, weight: 4, location: "Bank of Oasis Vault, Jewelry Store, Drawers, Safes, Dock Crates" },
  { name: "Ruby", showMoreButton: false, rarity: "MYTHIC", category: "Gems", price: 10000, weight: 4, location: "Bank of Oasis Vault, Jewelry Store, Drawers, Safes, Dock Crates" },
  { name: "Emerald", showMoreButton: false, rarity: "MYTHIC", category: "Gems", price: 25000, weight: 4, location: "Bank of Oasis Vault, Jewelry Store, Drawers, Safes, Dock Crates" },
  { name: "Amethyst", showMoreButton: false, rarity: "LEGENDARY", category: "Gems", price: 30000, weight: 4, location: "Bank of Oasis Vault, Jewelry Store, Drawers, Safes, Dock Crates" },
  { name: "Diamond", showMoreButton: false, rarity: "LEGENDARY", category: "Gems", price: 50000, weight: 4, location: "Bank of Oasis Vault, Jewelry Store,Drawers, Safes,Dock Crates, Trash Cans, Daily Wheel" },

  // Jewelry
  { name: "Silver Ring", showMoreButton: false, rarity: "COMMON", category: "Jewelry", price: 250, weight: 1, location: "Jewelry Store, Drawers, Safes" },
  { name: "Gold Ring", showMoreButton: false, rarity: "UNCOMMON", category: "Jewelry", price: 400, weight: 1, location: "Jewelry Store, Drawers, Safes" },
  { name: "Sapphire Ring", showMoreButton: false, rarity: "UNCOMMON", category: "Jewelry", price: 500, weight: 1, location: "Jewelry Store, Safes" },
  { name: "Silver Chain", showMoreButton: false, rarity: "UNCOMMON", category: "Jewelry", price: 500, weight: 2, location: "Jewelry Store, Dock Crates" },
  { name: "Ruby Ring", showMoreButton: false, rarity: "EPIC", category: "Jewelry", price: 800, weight: 1, location: "Jewelry Store, Dock Crates" },
  { name: "Gold Chain", showMoreButton: false, rarity: "EPIC", category: "Jewelry", price: 900, weight: 2, location: "Jewelry Store, Dock Crates" },
  { name: "Emerald Ring", showMoreButton: false, rarity: "EPIC", category: "Jewelry", price: 2000, weight: 2, location: "Jewelry Store, Dock Crates" },
  { name: "Pearl Necklace", showMoreButton: false, rarity: "LEGENDARY", category: "Jewelry", price: 6666, weight: 2, location: "Jewelry Store, Dock Crates" },
  { name: "Amethyst Ring", showMoreButton: false, rarity: "LEGENDARY", category: "Jewelry", price: 7000, weight: 1, location: "Jewelry Store, Dock Crates" },
  { name: "Diamond Ring", showMoreButton: false, rarity: "LEGENDARY", category: "Jewelry", price: 10000, weight: 1, location: "Jewelry Store, Dock Crates" },
  { name: "Rollie", showMoreButton: false, rarity: "LEGENDARY", category: "Jewelry", price: 50000, weight: 2, location: "Jewelry Store, Dock Crates" },

  // Electronics
  { name: "PearWatch", showMoreButton: false, rarity: "COMMON", category: "Electronics", price: 200, weight: 2, location: "Drawers, Pear Store, Safes, Dock Crates" },
  { name: "PearPods", showMoreButton: false, rarity: "COMMON", category: "Electronics", price: 300, weight: 3, location: "Drawers, Pear Store, Safes, Dock Crates" },
  { name: "HDD", showMoreButton: false, rarity: "COMMON", category: "Electronics", price: 400, weight: 2, location: "Computers, Drawers, Dock Crates" },
  { name: "PearPhone", showMoreButton: false, rarity: "COMMON", category: "Electronics", price: 400, weight: 2, location: "Drawers, Pear Store, Safes, Dock Crates" },
  { name: "GoldWatch", showMoreButton: false, rarity: "UNCOMMON", category: "Electronics", price: 400, weight: 2, location: "Drawers, Pear Store, Safes, Dock Crates" },
  { name: "PearPad", showMoreButton: false, rarity: "COMMON", category: "Electronics", price: 500, weight: 3, location: "Drawers, Pear Store, Safes, Dock Crates" },
  { name: "GoldPods", showMoreButton: false, rarity: "UNCOMMON", category: "Electronics", price: 600, weight: 3, location: "Drawers, Pear Store, Safes, Dock Crates" },
  { name: "GoldPhone", showMoreButton: false, rarity: "COMMON", category: "Electronics", price: 700, weight: 2, location: "Drawers, Pear Store, Safes, Dock Crates" },
  { name: "PSU", showMoreButton: false, rarity: "COMMON", category: "Electronics", price: 800, weight: 6, location: "Computers, Drawers, Dock Crates" },
  { name: "GoldPad", showMoreButton: false, rarity: "EPIC", category: "Electronics", price: 900, weight: 3, location: "Drawers, Pear Store, Safes, Dock Crates" },
  { name: "PearBook", showMoreButton: false, rarity: "UNCOMMON", category: "Electronics", price: 1000, weight: 6, location: "Drawers, Pear Store, Safes, Dock Crates" },
  { name: "Flash Drive", showMoreButton: false, rarity: "UNCOMMON", category: "Electronics", price: 1200, weight: 1, location: "Computers, Drawers, Military Crates, Safes, Dock Crates" },
  { name: "GoldBook", showMoreButton: false, rarity: "EPIC", category: "Electronics", price: 1500, weight: 6, location: "Drawers, Pear Store, Safes, Dock Crates" },
  { name: "GPU", showMoreButton: false, rarity: "EPIC", category: "Electronics", price: 9001, weight: 6, location: "Computers, Drawers, Military Crates, Safes, Dock Crates" },

  // Miscellaneous
  { name: "Bank Cash Pile", showMoreButton: false, rarity: "COMMON", category: "Miscellaneous", price: 200, weight: 0, location: "Bank of Oasis Vault" },
  { name: "Military Cash Pile", showMoreButton: false, rarity: "EPIC", category: "Miscellaneous", price: 2500, weight: 0, location: "Military" },
  { name: "Secret Files", showMoreButton: false, rarity: "EPIC", category: "Miscellaneous", price: 5000, weight: 2, location: "Drawers, Military Crates, Dock Crates" },
  { name: "Bitcoin", showMoreButton: false, rarity: "LEGENDARY", category: "Miscellaneous", price: 92000, weight: 1, location: "Computers, Drawers, Dock Crates" },

  // Mission Items
  { name: "Priceless Watch", showMoreButton: false, rarity: "MISSION", category: "Mission Items", price: 0, weight: 1, location: "Buck Moneymaker Office at Oasis Bank" },
  { name: "Data Disk", showMoreButton: false, rarity: "MISSION", category: "Mission Items", price: 0, weight: 1, location: "Crash Site at Snowy Mountain" }
];

const CHRISTMAS_VALUABLES_DATA = [
  { name: "Green Ornament", showMoreButton: false, rarity: "CHRISTMAS", price: 75, priceNonContract: false, weight: 1, location: "Presents" },
  { name: "Blue Ornament", showMoreButton: false, rarity: "CHRISTMAS", price: 100, priceNonContract: false, weight: 1, location: "Presents" },
  { name: "Red Ornament", showMoreButton: false, rarity: "CHRISTMAS", price: 125, priceNonContract: false, weight: 1, location: "Presents" },
  { name: "Striped Ornament", showMoreButton: false, rarity: "CHRISTMAS", price: 275, priceNonContract: false, weight: 1, location: "Presents" },
  { name: "Candy Cane", showMoreButton: false, rarity: "CHRISTMAS", price: 777, priceNonContract: false, weight: 2, location: "Presents" },
  { name: "Gold Ornament", showMoreButton: false, rarity: "CHRISTMAS", price: 1000, priceNonContract: false, weight: 1, location: "Presents" },
  { name: "Nutcracker", showMoreButton: false, rarity: "CHRISTMAS", price: 1892, priceNonContract: false, weight: 3, location: "Presents" },
  { name: "Snowglobe", showMoreButton: false, rarity: "CHRISTMAS", price: 8888, priceNonContract: false, weight: 6, location: "Presents" },
  { name: "White Ornament", showMoreButton: false, rarity: "CHRISTMAS", price: 15000, priceNonContract: false, weight: 1, location: "Presents" }
];

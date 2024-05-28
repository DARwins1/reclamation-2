var cTempl = {
////////////////////////////////////////////////////////////////////////////////

// Reclamation Campaign
// Player Units:
truck: { body: "Body1REC", prop: "wheeled01", weap: "Spade1Mk1" }, // Truck Viper Wheels

// Scavenger Units:
bloke: { body: "B1BaBaPerson01", prop: "BaBaLegs", weap: "BabaMG" }, // Bloke
trike: { body: "B4body-sml-trike01", prop: "BaBaProp", weap: "BabaTrikeMG" }, // Trike
buggy: { body: "B3body-sml-buggy01", prop: "BaBaProp", weap: "BabaBuggyMG" }, // Buggy
bjeep: { body: "B2JeepBody", prop: "BaBaProp", weap: "BabaJeepMG" }, // Jeep
rbjeep: { body: "B2RKJeepBody", prop: "BaBaProp", weap: "BabaRocket" }, // Rocket Jeep
rbuggy: { body: "B3bodyRKbuggy01", prop: "BaBaProp", weap: "BabaRocket" }, // Rocket Buggy
civ: { body: "CivilianBody", prop: "BaBaLegs", weap: "BabaMG" }, // Civilian
helcan: { body: "ScavengerChopper", prop: "Helicopter", weap: "RustCannon1-VTOL" }, // Light Cannon Helicopter
helhmg: { body: "ScavengerChopper", prop: "Helicopter", weap: "RustMG3-VTOL" }, // HMG Helicopter
moncan: { body: "MonsterBus", prop: "tracked01", weap: "RustCannon1Mk1" }, // Light Cannon Monster Bus Tank
monhmg: { body: "MonsterBus", prop: "tracked01", weap: "RustMG3Mk1" }, // HMG Monster Bus Tank
monmrl: { body: "MonsterBus", prop: "tracked01", weap: "RustRocket-MRL" }, // MRA Monster Bus Tank
monsar: { body: "MonsterBus", prop: "tracked01", weap: "RustRocket-LtA-TMk1" }, // Sarissa Monster Bus Tank
buscan: { body: "BusBody", prop: "BaBaProp", weap: "RustCannon1Mk1" }, // Light Cannon school bus
firetruck: { body: "FireBody", prop: "BaBaProp", weap: "RustFlame1Mk1" }, // Flamer firetruck
minitruck: { body: "FireBody", prop: "BaBaProp", weap: "RustRocket-Pod" }, // Mini-Rocket Pod firetruck
sartruck: { body: "FireBody", prop: "BaBaProp", weap: "RustRocket-LtA-TMk1" }, // Sarissa firetruck
lance: { body: "BaBaLanceBody", prop: "BaBaLegs", weap: "BabaLance" }, // Rocket scav

// Infested Units:
infciv: { body: "InfestedCivilianBody", prop: "BaBaLegs", weap: "InfestedMelee" }, // Infested civilian (melee unit)
infbloke: { body: "InfestedScavBody", prop: "BaBaLegs", weap: "BabaMG" }, // Infested bloke
inflance: { body: "InfestedLanceBody", prop: "BaBaLegs", weap: "BabaLance" }, // Infested rocket scav
infhelcan: { body: "InfestedScavengerChopper", prop: "Helicopter", weap: "RustCannon1-VTOL" }, // Infested Light Cannon Helicopter
infhelhmg: { body: "InfestedScavengerChopper", prop: "Helicopter", weap: "RustMG3-VTOL" }, // Infested HMG Helicopter
infmoncan: { body: "InfestedMonsterBus", prop: "tracked01", weap: "RustCannon1Mk1" }, // Infested Light Cannon Monster Bus Tank
infmonhmg: { body: "InfestedMonsterBus", prop: "tracked01", weap: "RustMG3Mk1" }, // Infested HMG Monster Bus Tank
infmonmrl: { body: "InfestedMonsterBus", prop: "tracked01", weap: "RustRocket-MRL" }, // Infested MRL Monster Bus Tank
infmonsar: { body: "InfestedMonsterBus", prop: "tracked01", weap: "RustRocket-LtA-TMk1" }, // Infested Sarissa Monster Bus Tank
infbuscan: { body: "InfestedBusBody", prop: "BaBaProp", weap: "RustCannon1Mk1" }, // Infested Light Cannon school bus
inffiretruck: { body: "InfestedFireBody", prop: "BaBaProp", weap: "RustFlame1Mk1" }, // Infested Flamer firetruck
infminitruck: { body: "InfestedFireBody", prop: "BaBaProp", weap: "RustRocket-Pod" }, // Infested Mini-Rocket Pod firetruck
infsartruck: { body: "InfestedFireBody", prop: "BaBaProp", weap: "RustRocket-LtA-TMk1" }, // Infested Sarissa firetruck
inftrike: { body: "Infestedtrike01", prop: "BaBaProp", weap: "BabaTrikeMG" }, // Infested Trike
infbuggy: { body: "Infestedsml-buggy01", prop: "BaBaProp", weap: "BabaBuggyMG" }, // Infested Buggy
infrbuggy: { body: "InfestedRKbuggy01", prop: "BaBaProp", weap: "BabaRocket" }, // Infested Rocket Buggy
infbjeep: { body: "InfestedJeepBody", prop: "BaBaProp", weap: "InfJeepMG" }, // Infested Jeep
infrbjeep: { body: "InfestedRKJeepBody", prop: "BaBaProp", weap: "BabaRocket" }, // Infested Rocket Jeep
stinger: { body: "CrawlerBody", prop: "CyborgLegs", weap: "StingerTail" }, // Stinger Crawler
vilestinger: { body: "CrawlerBody", prop: "CyborgLegs", weap: "VileStingerTail" }, // Vile Stinger Crawler
boomtick: { body: "CrawlerBody", prop: "BoomTickLegs", weap: "BoomTickSac" }, // Boom Tick Crawler


// Reclamation 2 Campaign
// Player/Allied Units:
pllcanw: { body: "Body1REC", prop: "wheeled01", weap: "Cannon1Mk1" }, // Light Cannon Viper Wheels
pllmortw: { body: "Body1REC", prop: "wheeled01", weap: "Mortar1Mk1" }, // Mortar Viper Wheels
pllrepw: { body: "Body1REC", prop: "wheeled01", weap: "LightRepair1" }, // Repair Turret Viper Wheels
plltmgt: { body: "Body1REC", prop: "tracked01", weap: "MG2Mk1" }, // Twin Machinegun Viper Tracks
pllpodt: { body: "Body1REC", prop: "tracked01", weap: "Rocket-Pod" }, // Mini-Rocket Pod Viper Tracks
pllsart: { body: "Body1REC", prop: "tracked01", weap: "Rocket-LtA-TMk1" }, // Sarissa Viper Tracks
pllsenst: { body: "Body1REC", prop: "tracked01", weap: "SensorTurret1Mk1" }, // Sensor Viper Tracks
plmtruckht: { body: "Body5REC", prop: "tracked01", weap: "Spade1Mk1" }, // Truck Cobra Tracks
plhhct: { body: "Body11ABT", prop: "tracked01", weap: "Cannon375mmMk1" }, // Heavy Cannon Python Tracks
plmatt: { body: "Body5REC", prop: "tracked01", weap: "Rocket-LtA-T" }, // Lancer Cobra Tracks
plmrept: { body: "Body5REC", prop: "tracked01", weap: "LightRepair1" }, // Repair Turret Cobra Tracks
plhasgnt: { body: "Body11ABT", prop: "tracked01", weap: "MG4ROTARYMk1" }, // Assault Gun Python Tracks
plhhpvt: { body: "Body11ABT", prop: "tracked01", weap: "Cannon4AUTOMk1" }, // Hyper Velocity Cannon Python Tracks
plhaacnt: { body: "Body11ABT", prop: "tracked01", weap: "AAGun2Mk1" }, // Whirlwind Python Tracks

// Cyborgs:
cybrp: { body: "CyborgLightBody", prop: "CyborgLegs", weap: "CyborgRepair" }, // Mechanic Cyborg
cyben: { body: "CyborgLightBody", prop: "CyborgLegs", weap: "CyborgSpade" }, // Combat Engineer Cyborg
cybmg: { body: "CyborgLightBody", prop: "CyborgLegs", weap: "CyborgChaingun" }, // Machinegunner Cyborg
cybca: { body: "CyborgLightBody", prop: "CyborgLegs", weap: "CyborgCannon" }, // Heavy Gunner Cyborg
cybfl: { body: "CyborgLightBody", prop: "CyborgLegs", weap: "CyborgFlamer01" }, // Flamer Cyborg
cybla: { body: "CyborgLightBody", prop: "CyborgLegs", weap: "CyborgRocket" }, // Lancer Cyborg
cybgr: { body: "CyborgLightBody", prop: "CyborgLegs", weap: "Cyb-Wpn-Grenade" }, // Grenadier Cyborg
cybth: { body: "CyborgLightBody", prop: "CyborgLegs", weap: "Cyb-Wpn-Thermite" }, // Thermite Flamer Cyborg
cybag: { body: "CyborgLightBody", prop: "CyborgLegs", weap: "CyborgRotMG" }, // Assault Gunner Cyborg
scymc: { body: "CyborgHeavyBody", prop: "CyborgLegs", weap: "Cyb-Hvywpn-Mcannon" }, // Super Heavy-Gunner Cyborg
scyhc: { body: "CyborgHeavyBody", prop: "CyborgLegs", weap: "Cyb-Hvywpn-HPV" }, // Super HPC Cyborg
scyac: { body: "CyborgHeavyBody", prop: "CyborgLegs", weap: "Cyb-Hvywpn-Acannon" }, // Super Auto-Cannon Cyborg
scytk: { body: "CyborgHeavyBody", prop: "CyborgLegs", weap: "Cyb-Hvywpn-TK" }, // Super Tank-Killer Cyborg
cybls: { body: "CyborgLightBody", prop: "CyborgLegs", weap: "Cyb-Wpn-Laser" }, // Flashlight Gunner Cyborg
nxcyrail: { body: "CybNXRail1Jmp", prop: "CyborgLegs02", weap: "NX-Cyb-Rail1" }, // NEXUS Needle Cyborg
nxcyscou: { body: "CybNXMissJmp", prop: "CyborgLegs02", weap: "NX-CyborgMiss" }, // NEXUS Scourge Cyborg
nxcylas: { body: "CybNXPulseLasJmp", prop: "CyborgLegs02", weap: "NX-CyborgPulseLas" }, // NEXUS Flashlight Cyborg

// Scavenger Units:
flatmrl: { body: "ScavTruckBody", prop: "BaBaProp", weap: ["RustRocket-Pod", "RustRocket-MRL"] }, // MRA Flatbed Truck
flatat: { body: "ScavTruckBody", prop: "BaBaProp", weap: ["RustRocket-Pod", "RustRocket-LtA-T"] }, // Lancer Flatbed Truck
gbjeep: { body: "B2RKJeepBody", prop: "BaBaProp", weap: "BabaMiniMortar" }, // Grenade Jeep
helpod: { body: "ScavengerHvyChopper", prop: "Helicopter", weap: "RustRocket-Pod-VTOL" }, // MRP Helicopter

// Infested Units:


// Collective Units:
// CAM_2_A
commgt: { body: "Body6SUPP", prop: "tracked01", weap: "MG3Mk1" },
comsens: { body: "Body6SUPP", prop: "tracked01", weap: "SensorTurret1Mk1" },
cohct: { body: "Body9REC", prop: "tracked01", weap: "Cannon375mmMk1" },
comct: { body: "Body6SUPP", prop: "tracked01", weap: "Cannon2A-TMk1" },
comorb: { body: "Body6SUPP", prop: "HalfTrack", weap: "Mortar2Mk1" },
colcbv: { body: "Body2SUP", prop: "V-Tol", weap: "Bomb1-VTOL-LtHE" },
colatv: { body: "Body2SUP", prop: "V-Tol", weap: "Rocket-VTOL-LtA-T" },

// CAM_2_B
cotruck: { body: "Body6SUPP", prop: "tracked01", weap: "Spade1Mk1" },
comatt: { body: "Body6SUPP", prop: "tracked01", weap: "Rocket-LtA-T" },
comit: { body: "Body6SUPP", prop: "tracked01", weap: "Flame2" },
comrept: { body: "Body6SUPP", prop: "tracked01", weap: "LightRepair1" },
comorbt: { body: "Body6SUPP", prop: "tracked01", weap: "Mortar2Mk1" },

// CAM_2_2
comtath: { body: "Body6SUPP", prop: "hover01", weap: "Rocket-LtA-T" },
comtathh: { body: "Body6SUPP", prop: "HalfTrack", weap: "Rocket-LtA-T" },
comih: { body: "Body6SUPP", prop: "hover01", weap: "Flame2" },

// CAM_2_C
commorv: { body: "Body6SUPP", prop: "V-Tol", weap: "Bomb2-VTOL-HvHE" },
colagv: { body: "Body2SUP", prop: "V-Tol", weap: "MG4ROTARY-VTOL" },
comhpv: { body: "Body6SUPP", prop: "tracked01", weap: "Cannon4AUTOMk1" },
cohbbt: { body: "Body9REC", prop: "tracked01", weap: "Rocket-BB" },
cohhot: { body: "Body9REC", prop: "tracked01", weap: "Howitzer105Mk1" },

// CAM_2_5
cohhpv: { body: "Body9REC", prop: "tracked01", weap: "Cannon4AUTOMk1" },
comagt: { body: "Body6SUPP", prop: "tracked01", weap: "MG4ROTARYMk1" },
cohaaq: { body: "Body9REC", prop: "tracked01", weap: "QuadRotAAGun" },

// CAM_2_D
comhltat: { body: "Body6SUPP", prop: "tracked01", weap: "Rocket-HvyA-T" },
commorvt: { body: "Body6SUPP", prop: "V-Tol", weap: "Bomb4-VTOL-HvyINC" },

// CAM_2_6
cohact: { body: "Body9REC", prop: "tracked01", weap: "Cannon5VulcanMk1" },
comrotm: { body: "Body6SUPP", prop: "HalfTrack", weap: "Mortar3ROTARYMk1" },
comsensh: { body: "Body6SUPP", prop: "HalfTrack", weap: "SensorTurret1Mk1" },

// CAM_2_7
comrotmh: { body: "Body6SUPP", prop: "tracked01", weap: "Mortar3ROTARYMk1" },

// CAM_2_8
comhvat: { body: "Body6SUPP", prop: "V-Tol", weap: "Rocket-VTOL-HvyA-T" },


// CAM_1A


// CAM_3_A
nxtruckh: { body: "Body7ABT", prop: "hover02", weap: "Spade1Mk1" },
nxmserh: { body: "Body7ABT", prop: "hover02", weap: "Missile-MdArt" },
nxmreph: { body: "Body7ABT", prop: "hover02", weap: "LightRepair1" },
nxlsensh: { body: "Body3MBT", prop: "hover02", weap: "SensorTurret1Mk1" },
nxmrailh: { body: "Body7ABT", prop: "hover02", weap: "RailGun2Mk1" },
nxmscouh: { body: "Body7ABT", prop: "hover02", weap: "Missile-A-T" },

nxlneedv: { body: "Body3MBT", prop: "V-Tol02", weap: "RailGun1-VTOL" },
nxlscouv: { body: "Body3MBT", prop: "V-Tol02", weap: "Missile-VTOL-AT" },
nxmtherv: { body: "Body7ABT", prop: "V-Tol02", weap: "Bomb4-VTOL-HvyINC" },


// CAM_3_1
nxmcommh: { body: "Body7ABT", prop: "hover02", weap: "CommandTurret1" },


// CAM_3_B
nxmlinkh: { body: "Body7ABT", prop: "hover02", weap: "NEXUSlink" },
nxmsamh: { body: "Body7ABT", prop: "hover02", weap: "Missile-HvySAM" },
nxmheapv: { body: "Body7ABT", prop: "V-Tol02", weap: "Bomb2-VTOL-HvHE" },

// CAM_3_2
nxlflash: { body: "Body3MBT", prop: "hover02", weap: "Laser3BEAMMk1" },

// CAM_3_A_B
nxmsens: { body: "Body7ABT", prop: "hover02", weap: "SensorTurret1Mk1" },

// CAM_3_A_D_1
nxmpulseh: { body: "Body7ABT", prop: "hover02", weap: "Laser2PULSEMk1" },
nxlpulsev: { body: "Body3MBT", prop: "V-Tol02", weap: "Laser2PULSE-VTOL" },

// CAM_3_A_D_2
nxhgauss: { body: "Body10MBT", prop: "hover02", weap: "RailGun3Mk1" },
nxhrailv: { body: "Body10MBT", prop: "V-Tol02", weap: "RailGun2-VTOL" },

// CAM_3_4
nxllinkh: { body: "Body3MBT", prop: "hover02", weap: "NEXUSlink" },
nxmpulsev: { body: "Body7ABT", prop: "V-Tol02", weap: "Laser2PULSE-VTOL" },


////////////////////////////////////////////////////////////////////////////////

bubut: { body: "Body2SUP", prop: "tracked01", weap: "Rocket-BB" },
sart: { body: "Body2SUP", prop: "tracked01", weap: "Rocket-LtA-TMk1" },

};

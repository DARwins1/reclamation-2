//Contains the campaign transition technology definitions.

// Basic base structures
const camBasicStructs = [
	"A0CommandCentre", "A0PowerGenerator", "A0ResourceExtractor",
	"A0ResearchFacility", "A0LightFactory", "A0CyborgFactory",
];

// Contains research granted at the very start
const camRec1StartResearch = [
	"R-Wpn-MG1Mk1", "R-Vehicle-Body01", "R-Sys-Spade1Mk1", "R-Vehicle-Prop-Wheels",
	"R-Comp-SynapticLink", "R-Cyborg-Wpn-MG", "R-Cyb-Sys-Construct",
];

// Contains everything that the player starts with in the Prologue to Reclamation
// Basically just everything the player acquires before L4.
const camRec2StartResearch = [
	// L1
	"R-Wpn-MG-Damage01", "R-Sys-Sensor-Turret01", "R-Sys-Sensor-Tower01",
	"R-Wpn-Rocket05-MiniPod", "R-Defense-Tower06", "R-Wpn-Rocket-Damage01",
	"R-Sys-Engineering01", "R-Sys-MobileRepairTurret01", "R-Cyb-Sys-Repair",
	"R-Vehicle-Prop-Tracks", "R-Defense-TankTrap01",

	// L2
	"R-Wpn-Mortar01Lt", "R-Wpn-Mortar-Damage01", "R-Cyb-Wpn-Grenade",
	"R-Wpn-MG2Mk1", "R-Wpn-MG-Damage02",

	// L3
	"R-Wpn-Cannon1Mk1", "R-Defense-Cannon", "R-Defense-Cannon",
	"R-Cyborg-Wpn-Cannon", "R-Wpn-Cannon-Damage01", "R-Cyborg-Metals01",
	"R-Vehicle-Metals01", "R-Wpn-Flamer01Mk1", "R-Defense-Flamer",
	"R-Cyborg-Wpn-Flamer", "R-Wpn-Flamer-Damage01",
].concat(camRec1StartResearch);

// What is acquired during the Prologue
const camRec2PrologueResearch = [
	//PL2
	"R-Wpn-Rocket-LtA-TMk1", "R-Defense-Sarissa",
];

const camAct1StartResearch = camRec2StartResearch.concat(camRec2PrologueResearch);

//...

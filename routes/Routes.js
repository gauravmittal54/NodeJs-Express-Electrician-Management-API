const express = require("express");
const router = express.Router();
const ElectricianController = require("../controllers/ElectricianController");
const SitesController = require("../controllers/SitesController");

router.post("/electricians", ElectricianController.createElectrician);
router.post("/sites", SitesController.createSite);
router.patch("/assign", SitesController.assignSitesToElectricians);

module.exports = router;

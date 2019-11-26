const express = require("express");

const ctrl = require("./route-control");

const router = express.Router();

// router.get("/users", ctrl.getAllUSers);
router.post("/newMail", ctrl.postMail);

module.exports = router;

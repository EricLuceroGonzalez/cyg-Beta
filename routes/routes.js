const express = require("express");

const ctrl = require("./route-control");

const router = express.Router();

// router.get("/users", ctrl.getAllUSers);
router.post("/newFormUser", ctrl.postPreForm);

module.exports = router;

const express = require('express');
const router = express.Router();
const { valid, params, user } = require("../middleware");
const controller = require("../controller/Connection");

router.get("", controller.findAllConnection);

module.exports = router;

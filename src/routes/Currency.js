const express = require('express');
const router = express.Router();
const { valid } = require("../middleware");
const controller = require("../controller/Currency");
const { Currency } = require('../validate/Currency');

router.get("", controller.findCurrencies);
router.post("", valid(Currency), controller.createCurrency);

module.exports = router;
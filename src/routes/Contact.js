const express = require('express');
const router = express.Router();
const { valid, params, user } = require("../middleware");
const controller = require("../controller/Contact");

router.get("", controller.findAllContact);
router.post("", controller.createContact);
router.put("/:contactId", controller.updateContact);

module.exports = router;
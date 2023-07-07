const express = require('express');
const router = express.Router();
const { valid, params, user } = require("../middleware");
const controller = require("../controller/User");

router.get('', controller.findAllUser);
router.get('/me', controller.findCurrentUser);
router.put('/active-tenant', controller.setActiveTenant);
router.put('/role', controller.updateRole);

module.exports = router;

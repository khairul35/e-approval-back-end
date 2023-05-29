const express = require('express');
const router = express.Router();
const { valid, params, user } = require("../middleware");
const controller = require("../controller/Authentication");

router.post('/sign-up', controller.signUp);
router.post('/sign-in', controller.signIn);
router.post('/register/xero', controller.registerXero);

module.exports = router;

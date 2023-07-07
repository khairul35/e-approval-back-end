const express = require('express');
const router = express.Router();
const { valid, params, user } = require("../middleware");
const controller = require("../controller/Product");

router.get("/category", controller.findAllCategory);
router.get("", controller.findAllProducts);
router.post("/category/:tenantId", controller.createCategory);
router.post("/:tenantId", controller.createProduct);
router.put("/:productId", controller.updateProduct);

module.exports = router;

const express = require('express');
const router = express.Router();
const { valid, params, user } = require("../middleware");
const controller = require("../controller/PurchaseOrder");

router.get("", controller.findAllPurchaseOrder);

router.get("/:id", controller.findPurchaseOrderByID);

router.post("", controller.createPurchaseOrder);

router.put("/approve/:id", controller.approvePurchaseOrder);

router.put("/:id", controller.updatePurchaseOrder);

router.delete("/:id", controller.deletePurchaseOrder);

module.exports = router;

const path = require("path");

const express = require("express");

const adminController = require("../controller/admin");

const router = express.Router();

// /admin/add-prudct => GET
router.get("/add-product", adminController.getAddProduct);

// /afmin/products => GET
router.get("/products", adminController.getProducts);

// /admin/add-prudct => POST
router.post("/add-product", adminController.postProduct);

module.exports = router;

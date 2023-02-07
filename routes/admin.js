const path = require('path');

const express = require('express');

const productController = require('../controller/products');

const router = express.Router();

// /admin/add-prudct => GET
router.get('/add-product', productController.getAddProduct);

// /admin/add-prudct => POST
router.post('/add-product', productController.postProduct);

module.exports = router;
const path = require('path');

const express = require('express');


const  producusController = require('../controllers/products')

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', producusController.getAddProduct );

// /admin/add-product => POST
router.post('/add-product', producusController.postAddProduct);

module.exports = router

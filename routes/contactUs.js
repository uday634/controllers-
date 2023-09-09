const path = require('path');

const express = require('express');

const rootDir = require('../util/path')

const productsController = require('../controllers/products')

const router = express.Router();

router.get('/contact-us', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views','contactUs.html'))
});

router.get('/successful',(req, res, next)=>(req,res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'success.html'))
})

module.exports = router;

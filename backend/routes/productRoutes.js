const express = require('express');
const router = express.Router();

const {getProducts,getProductbyId} = require('../controllers/productController');


router.route('/').get(getProducts);
router.route('/:id').get(getProductbyId);

module.exports = router;

const express = require('express');
const router = express.Router();

const {getAllProducts, addNewProduct, getSingleProduct, updateProduct, deleteProduct} = require('../controllers/productController');
// user
router.route('/products').get(getAllProducts);
router.route('/product/:id').get(getSingleProduct);

// admin
router.route('/admin/product/new').post(addNewProduct);
router.route('/admin/product/:id').put(updateProduct);
router.route('/admin/product/:id').delete(deleteProduct);


module.exports = router;
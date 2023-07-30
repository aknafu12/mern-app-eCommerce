const express = require('express');
const router = express.Router();

const {getAllProducts, addNewProduct, getSingleProduct, updateProduct, deleteProduct} = require('../controllers/productController');
const { isAuthenticatedUser } = require('../middlewares/auth')

// user
router.route('/products').get(getAllProducts);
router.route('/product/:id').get(getSingleProduct);

// admin
router.route('/admin/product/new').post(isAuthenticatedUser, addNewProduct);
router.route('/admin/product/:id').put(isAuthenticatedUser, updateProduct);
router.route('/admin/product/:id').delete(isAuthenticatedUser, deleteProduct);


module.exports = router;
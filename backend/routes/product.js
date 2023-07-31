const express = require('express');
const router = express.Router();

const {getAllProducts, addNewProduct, getSingleProduct, updateProduct, deleteProduct} = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

// user
router.route('/products').get(getAllProducts);
router.route('/product/:id').get(getSingleProduct);

// admin
router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), addNewProduct);
router.route('/admin/product/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct);
router.route('/admin/product/:id').delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);


module.exports = router;
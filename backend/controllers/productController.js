const product = require('../models/product');
const product = require('../models/product')

//create new product
exports.newProduct = async (req, res, next) =>{
    const product = await product.create(req.body);
    res.status(201).json({
        message: "Product created successfully",
        product
    });
}

exports.getAllProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: ' This will show all products in database '
    });
};
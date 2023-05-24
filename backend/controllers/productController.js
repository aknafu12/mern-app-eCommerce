const Product = require("../models/product");
const ErrorHandler = require("../utils/errorHandler");

const errorHandler = require('../utils/errorHandler');


//create new product accessed /api/v1/product/new
exports.addNewProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    message: "Product created successfully",
    product,
  });
};

//get all product API => /api/products

exports.getAllProducts = async(req, res, next) => {
  const allProduct = await Product.find();

  res.status(200).json({
    success: true,
    count: allProduct.length,
    data: allProduct,
  });
};


// query single product detail api => /api/product:id
exports.getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next( new ErrorHandler('Product nor found', 404));
      
      }
      res.status(200).json({
        success: true,
        data: product,
        });
        };
        //update product
        exports.updateProduct = async (req, res, next) => {
          const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
              new: true,
              runValidators: true,
              useFindAndModify:false
              }
              );
              if (!product) {
                return res.status(404).json({
                  success: false,
                  message: "Product not found",
                  });
                  }
                  res.status(200).json({
                    success: true,
                    data: product,
                    });
                    };
                    //delete product
                    exports.deleteProduct = async (req, res, next) => {
                      const product = await Product.findByIdAndDelete(
                        req.params.id
                        );
                        if (!product) {
                          return res.status(404).json({
                            success: false,
                            message: "Product not found",
                            });
                            }
                            res.status(200).json({
                              success: true,
                              data: product,
                              });
                              };
                              //get product images

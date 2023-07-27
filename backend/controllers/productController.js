const Product = require("../models/product");

const ErrorHandler = require("../utils/errorHandler");
const errorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures')


//create new product accessed /api/admin/product/new
exports.addNewProduct = catchAsyncErrors (async (req, res, next) => {

  const product = await Product.create(req.body);

  res.status(201).json({
    message: "Product created successfully",
    product,
  });
})
//get all product API => /api/products?keyword=

exports.getAllProducts = catchAsyncErrors (async(req, res, next) => {

  const apiFeatures = new APIFeatures(Product.find(), req.query)
                        .search()
  // const allProduct = await Product.find();
  const allProduct = await apiFeatures.query;

  

  res.status(200).json({
    success: true,
    count: allProduct.length,
    data: allProduct,
  }); 
})

// query single product detail api => /api/product:id
exports.getSingleProduct = catchAsyncErrors ( async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next( new ErrorHandler('Product nor found', 404));
      
      }
      res.status(200).json({
        success: true,
        data: product,
        });
        })
        //update product
        exports.updateProduct = catchAsyncErrors( async (req, res, next) => {
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
                return  next( new ErrorHandler('Product nor found', 404));

                  }
                  res.status(200).json({
                    success: true,
                    data: product,
                    });
                    })
                    //delete product
                    exports.deleteProduct = catchAsyncErrors (async (req, res, next) => {
                      const product = await Product.findByIdAndDelete(
                        req.params.id
                        );
                        if (!product) {
                          return next( new ErrorHandler('Product nor found', 404));

                            }
                            res.status(200).json({
                              success: true,
                              data: product,
                              });
                              })
                              //get product images

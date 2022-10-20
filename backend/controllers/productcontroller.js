const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");

const catchAsyncErrors = require('../middleware/catchAsyncError');
const ApiFeatures = require("../utils/ApiFeatures");

// create product --admin only
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});


//get All products
exports.getAllProduct = catchAsyncErrors(async (req, res, next) => {

  const apiFeature = new ApiFeatures(Product.find(),req.query).search()
  const products = await apiFeature.query;

  res.status(200).json({
    success: true,
    products,
  });
});


// get single product
exports.getSingleProduct = catchAsyncErrors(async (req,res,next) => {
  
  const product = await Product.findById(req.params.id)
    if(!product)
    {
        return next(new ErrorHandler("product not Found",400)) 
    }

    res.status(200).json({
        success:true,
        product
    })
})

// update Products --admin only
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not Found",400)) 
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body,{ new:true, runValidators:true })
    res.status(200).json({
      success: true,
      product,
    })
});


// delete product --admin only
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  if(!product)
  {
    return next(new ErrorHandler("product not Found",400)) 
  }
  await product.remove()
  res.status(200).json({
      success:true,
      message:"Product has been deleted"
  })
})
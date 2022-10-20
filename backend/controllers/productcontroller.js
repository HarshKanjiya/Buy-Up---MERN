const Product = require("../models/productModel");


// create product --admin only
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};


//get All products
exports.getAllProduct = async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
};


// get single product
exports.getSingleProduct = async (req,res,next) => {
  
  const product = await Product.findById(req.params.id)
    if(!product)
    {
        return res
        .status(500)
        .json({ success: false, message: "product not found!" });
    }

    res.status(200).json({
        success:true,
        product
    })
}

// update Products --admin only
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: "product not found!" });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body,{ new:true, runValidators:true })
    res.status(200).json({
      success: true,
      product,
    })
};


// delete product --admin only
exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if(!product)
    {
        return res
        .status(500)
        .json({ success: false, message: "product not found!" });
    }
    await product.remove()
    res.status(200).json({
        success:true,
        message:"Product has been deleted"
    })
}
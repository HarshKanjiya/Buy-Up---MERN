const cloudinary = require("cloudinary");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/ApiFeatures");

// create product --admin only
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  let images = [];
  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }
  const imgLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "products",
    });
    imgLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
  req.body.images = imgLinks;
  req.body.user = req.user.id;

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

//get All products
exports.getAllProduct = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 15;
  const productCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  const products = await apiFeature.query;
  res.status(200).json({
    success: true,
    productCount,
    products,
    resultPerPage,
  });
});

// get single product
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not Found", 400));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// get admin products --admin
exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
  const productCount = await Product.countDocuments();

  const products = await Product.find();
  res.status(200).json({
    success: true,
    productCount,
    products,
  });
});

// update Products --admin only
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  // Images Start Here
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting Images From Cloudinary
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "products",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// delete product --admin only
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not Found", 400));
  }

  for (let i = 0; i < product.images.length; i++) {
    await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  }

  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product has been deleted",
  });
});

// review create or update
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productID } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productID);

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString()) {
        rev.rating = rating;
        rev.comment = comment;
      }
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = 0;
  product.reviews.forEach((rev) => {
    avg = avg + rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    product,
  });
});

// get all reviews
exports.getAllReviewOfSingleProduct = catchAsyncErrors(
  async (req, res, next) => {
    const product = await Product.findById(req.query.productID);

    if (!product) {
      return next(new ErrorHandler("product not Found", 400));
    }
    res.status(200).json({
      success: true,
      reviews: product.reviews,
    });
  }
);

// dlt review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.productID);

  if (!product) {
    return next(new ErrorHandler("product not Found", 400));
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;
  reviews.forEach((rev) => {
    avg = avg + rev.rating;
  });

  const ratings = avg / product.reviews.length;

  const numOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productID,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    success: true,
  });
});

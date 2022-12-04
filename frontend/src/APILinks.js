// product APIs
export const getProductsAPI = "/api/v1/products"
export const getSingleProductAPI = "/api/v1/product/"

// auth APIs
export const logInAPI = "/api/v1/login"
export const signUpAPI = "/api/v1/register"
export const logOutAPI = "/api/v1/logout"
export const forgotPasswordAPI = "localhost:5050/api/v1/password/forgot"
export const resetPasswordAPI = "/api/v1/password/reset/"
export const updatePasswordAPI = "/api/v1/password/update"

// reviewsAPI
export const getAllReviewsAPI = "/api/v1/reviews?productID="
export const createUpdateReviewsAPI = "/api/v1/review"
export const deleteReviewAPI = "/api/v1/reviews?"  //doubt ful //give product and user id

// user APIs
export const profileAPI = "/api/v1/profile"
export const updateProfileAPI = "/api/v1/me/update"

// order APIs
export const newOrderAPI = "/api/v1/order/new"
export const myOrdersAPI = "/api/v1/orders/me"
export const getSingleOrderAPI = "/api/v1/order/"



// admin APIs

// product --admin
export const newProductAPI = "/api/v1/admin/product/new"
export const updateProductAPI = "/api/v1/admin/product/"
export const deleteProductAPI = "/api/v1/admin/product/"

// user --admin
export const deleteUserAPI = "/api/v1/admin/user/"
export const updateUserRoleAPI = "/api/v1/admin/user/"
export const getAllUsersAPI = "/api/v1/admin/users"
export const getSingleUserAPI = "/api/v1/admin/user/"

// order APIs
export const getAllOrdersAPI = "/api/v1/admin/orders"
export const updateOrderStatusAPI = "/api/v1/admin/order/"
export const deleteOrderAPI = "/api/v1/admin/order/"

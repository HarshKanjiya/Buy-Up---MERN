// product APIs
export const getProductsAPI = "http://localhost:5050/api/v1/products"
export const getSingleProductAPI = "http://localhost:5050/api/v1/product/"

// auth APIs
export const logInAPI = "http://localhost:5050/api/v1/login"
export const signUpAPI = "http://localhost:5050/api/v1/register"
export const logOutAPI = "http://localhost:5050/api/v1/logout"
export const forgotPasswordAPI = "localhost:5050/api/v1/password/forgot"
export const resetPasswordAPI = "http://localhost:5050/api/v1/password/reset/"
export const updatePasswordAPI = "http://localhost:5050/api/v1/password/update"

// reviewsAPI
export const getAllReviewsAPI = "http://localhost:5050/api/v1/reviews?productID="
export const createUpdateReviewsAPI = "http://localhost:5050/api/v1/review"
export const deleteReviewAPI = "http://localhost:5050/api/v1/reviews?"  //doubt ful //give product and user id

// user APIs
export const profileAPI = "http://localhost:5050/api/v1/profile"
export const updateProfileAPI = "http://localhost:5050/api/v1/me/update"

// order APIs
export const newOrderAPI = "http://localhost:5050/api/v1/order/new"
export const myOrdersAPI = "http://localhost:5050/api/v1/orders/me"
export const getSingleOrderAPI = "http://localhost:5050/api/v1/order/"



// admin APIs

// product --admin
export const newProductAPI = "http://localhost:5050/api/v1/admin/product/new"
export const updateProductAPI = "http://localhost:5050/api/v1/admin/product/"
export const deleteProductAPI = "http://localhost:5050/api/v1/admin/product/"

// user --admin
export const deleteUserAPI = "http://localhost:5050/api/v1/admin/user/"
export const updateUserRoleAPI = "http://localhost:5050/api/v1/admin/user/"
export const getAllUsersAPI = "http://localhost:5050/api/v1/admin/users"
export const getSingleUserAPI = "http://localhost:5050/api/v1/admin/user/"

// order APIs
export const getAllOrdersAPI = "http://localhost:5050/api/v1/admin/orders"
export const updateOrderStatusAPI = "http://localhost:5050/api/v1/admin/order/"
export const deleteOrderAPI = "http://localhost:5050/api/v1/admin/order/"

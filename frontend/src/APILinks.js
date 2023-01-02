// product APIs
export const getProductsAPI = "/api/v1/products"//done
export const getSingleProductAPI = "/api/v1/product/"//done

// auth APIs
export const logInAPI = "/api/v1/login"//done
export const signUpAPI = "/api/v1/register"//done
export const logOutAPI = "/api/v1/logout"//done
export const forgotPasswordAPI = "/api/v1/password/forgot"//done
export const resetPasswordAPI = "/api/v1/password/reset/"//done
export const updatePasswordAPI = "/api/v1/password/update"//done

// reviewsAPI
export const getAllReviewsAPI = "/api/v1/reviews?productID="
export const createUpdateReviewsAPI = "/api/v1/review"//done
export const deleteReviewAPI = "/api/v1/reviews?"  //doubt ful //give product and user id

// user APIs
export const profileAPI = "/api/v1/profile"//done
export const routineCheckAPI = "/api/v1/routinecheck"//done
export const updateProfileAPI = "/api/v1/me/update"//done

// order APIs
export const newOrderAPI = "/api/v1/order/new"//done
export const myOrdersAPI = "/api/v1/orders/me"//done
export const getSingleOrderAPI = "/api/v1/order/"//done



// admin APIs

// product --admin
export const getAdminProductsAPI = "/api/v1/admin/products" //done
export const newProductAPI = "/api/v1/admin/product/new" //done
export const updateProductAPI = "/api/v1/admin/product/"//done
export const deleteProductAPI = "/api/v1/admin/product/"//done

// user --admin
export const deleteUserAPI = "/api/v1/admin/user/"
export const updateUserRoleAPI = "/api/v1/admin/user/"
export const getAllUsersAPI = "/api/v1/admin/users"
export const getSingleUserAPI = "/api/v1/admin/user/"

// order APIs
export const getAllOrdersAPI = "/api/v1/admin/orders" //done
export const updateOrderStatusAPI = "/api/v1/admin/order/" //done
export const deleteOrderAPI = "/api/v1/admin/order/"//done

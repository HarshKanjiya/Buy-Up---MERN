import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "product",
    initialState: {
        loading : false,
        product : null,
        error: null,
    },
    reducers: {
        FETCH_PRODUCT_STARTED:(state)=>{
            state.loading = true;
        },
        FETCH_PRODUCT_SUCCESS:(state,{payload})=>{
            state.loading = false;
            state.product = payload;
        },
        FETCH_PRODUCT_FAILURE:(state,{payload})=>{
            state.loading = false;
            state.error = payload
        },
        CLEAR_ERRORS:(state) => {
            state.error = null;
        }
    }
})

export const  {
    FETCH_PRODUCT_STARTED,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    CLEAR_ERRORS,
} = productSlice.reducer;

export default productSlice.reducer
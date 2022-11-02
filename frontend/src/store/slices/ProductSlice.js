import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "productSlice",
    initialState:{
        value:0
    },
    reducers: {
        setValue:(state)=>{
            state.value =+1
        }
    },
})

export const { setValue } = productSlice.actions;
export default productSlice.reducer;
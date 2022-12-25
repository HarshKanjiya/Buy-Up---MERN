import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    console.log("hi Harxh!!!");
    const { data } = await axios.get("http://localhost:5050/api/v1/products");
  }
);

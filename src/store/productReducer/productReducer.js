import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import apiGetAllProduct from "../../service/apis/api.product"
import axios from "axios"
export const getAllProduct = createAsyncThunk(
    "product/getAllProduct",
    async () => {
        const response = await axios.get(apiGetAllProduct.getProduct);
        return response.data;
    }
)
const productSlice = createSlice({
    name: "product",
    initialState: {
        products: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProduct.pending, (state, action) => {
                // trạng thái đưa vào xử lý
            })
            .addCase(getAllProduct.fulfilled, (state, action) => {
                // xử lý khi thành công!
                console.log("đã ăn vào ");
                state.products.push(action.payload)
            }
            )
            .addCase(getAllProduct.rejected, (state, action) => {
                // state.error = action.error 
                // thất bại
            }
            )
    }
})
// tạo reducer
 export const productReducer = productSlice.reducer;
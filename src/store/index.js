import { configureStore } from "@reduxjs/toolkit"
import { productReducer } from "./productReducer/productReducer"
export const store= configureStore({
    reducer:{
        abc:productReducer,
    }
})
 
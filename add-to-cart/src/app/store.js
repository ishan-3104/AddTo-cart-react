import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../featurs/cartSlice'

const store = configureStore({
    reducer:{
        cart: cartReducer,
    }
})

export default store
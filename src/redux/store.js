import { configureStore } from "@reduxjs/toolkit";
import noteslice from "./slices/fetchdashboard";
import contactslice from "./slices/contactslice";
import productslice from "./slices/productslice";
import authslice from "./slices/authslice";


const store = configureStore({
    reducer:{
        note: noteslice,
        contact: contactslice,
        product: productslice,
        auth: authslice,
    }
    
})

export default store;
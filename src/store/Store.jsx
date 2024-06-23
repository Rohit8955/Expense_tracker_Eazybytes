import { configureStore } from "@reduxjs/toolkit";
import ExpenseSlice from "./ExpenseSlice";

const Store = configureStore({
    reducer:{
        expense:ExpenseSlice
    }
})

export default Store
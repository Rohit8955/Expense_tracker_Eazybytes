import { createSlice } from "@reduxjs/toolkit";

const ExpenseSlice = createSlice({
    name:'expense',
    initialState:{
        balance:0,
        historyarr:[],
        income:0,
        expense:0,
    },
    reducers:{
        addtransaction : (state,action)=>{
            state.historyarr.push(action.payload);
            state.income = action.payload.type==='income'?action.payload.amount:state.income;
            state.expense = action.payload.type==='expense'?action.payload.amount:state.expense;
            state.balance = action.payload.type==='income'?state.balance+action.payload.amount:state.balance-action.payload.amount
        }
    }
})

export const {addtransaction} = ExpenseSlice.actions;
export default ExpenseSlice.reducer;
import React, { useState } from 'react'
import { Provider, useDispatch, useSelector } from "react-redux";
import { addtransaction } from '../store/ExpenseSlice';
const Home = () => {
    const dispatch = useDispatch();

  const [name,setname] = useState('');
  const [amount,setamount] = useState('')

  const clicked = ()=>{
    if(name!=='' && amount!=''){
      const obj = {
        title: name,
        type: amount[0]==='+'?"income":"expense",
        amount: Number(amount.slice(1)), 
      }
      dispatch(addtransaction(obj));
      setname('');
      setamount('');
    }
  }
  const balance = useSelector((state)=>state.expense.balance);
  const income = useSelector((state)=>state.expense.income);
  const expense = useSelector((state)=>state.expense.expense);
  const arr = useSelector((state)=>state.expense.historyarr);
  return (
    <div className="mt-[60px] ">
      <div className="flex items-center justify-center"><h1 className="font-semibold text-center text-[30px]">Expense Tracker</h1></div>
      <div className="flex flex-col gap-[20px]  md:w-[300px] mt-[20px] pb-[20px]">
        <div>
          <h1 className="font-semibold text-[20px]">Your Balance</h1>
          <h1 className="font-semibold text-[20px]">${balance}.00</h1>
        </div>
        <div className="bg-white w-[300px] h-[100px] rounded-sm flex boxshadow gap-4 items-center justify-center">
          <div className="font-semibold text-[18px]">
            <h1>INCOME</h1>
            <h1 className="text-green-500">${income}.00</h1>
          </div>

          <div className="border-r border-gray-300  h-[50px]"/>

          <div className="font-semibold text-[18px]">
            <h1>EXPENSE</h1>
            <h1 className="text-red-500">${expense}.00</h1>
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-[18px]">History</h1>
          <div className="border-b border-gray-400 mt-1"/>

          <div className="mt-[20px] flex flex-col gap-3">
            {
                arr.map((elem,idx)=>{
                    return (
                        <div key={idx} className="w-full flex justify-between boxshadow">
                            <div className="w-[98%] bg-white flex justify-between px-1 py-1 rounded-md font-semibold">
                                <h1 className="text-[18px] text-black">{elem.title}</h1>
                                <h1>{elem.amount}</h1>
                            </div>
                            <div className={`w-[2%] ${elem.type==='expense'?"bg-red-500":"bg-green-500"}`}></div>
                        </div>
                    )
                })
            }
          </div>

        </div>

        <div>
          <h1 className="font-semibold text-[18px]">Add New Transaction</h1>
          <div className="border-b border-gray-400 mt-1"/>

          <h1 className="font-semibold text-[18px] mt-[15px]">Text</h1>
          <input value={name} onChange={(e)=>setname(e.target.value)} className="w-full outline-none boxshadow border-gray-200 p-1 mt-1" placeholder="Enter Text..."/>

          <h1 className="font-semibold text-[18px] mt-[15px]">Amount</h1>
          <h1 className="font-semibold text-[18px]">(negative-expense, positive-income)</h1>
          <input value={amount} onChange={(e)=>setamount(e.target.value)} className="w-full outline-none boxshadow border-gray-200 p-1 mt-1" placeholder="Enter amount..."/>
        </div>

        <button onClick={clicked} className="w-full py-2 rounded-sm font-semibold mt-[10px] bg-blue-600 boxshadow hover:bg-blue-500 text-white text-center">Add Transaction</button>

      </div>
    </div>
  )
}

export default Home
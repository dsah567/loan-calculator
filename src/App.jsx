import React, { useState } from "react";
import Slider from '@mui/material/Slider';


function App() {

  const [amount,setAmount] = useState(10000)
  const [months,setMonths] = useState(2)
  const [total, setTotal]= useState(10200)
  const [installment,setInstallment] = useState(5100)

  const amountChange = (e)=>{
    setAmount(e.target.value)
    let si= (e.target.value*months*8)/(12*100)
    setTotal(si+e.target.value)
    setInstallment(total/months)
  }

  const monthChange = (e)=>{
    setMonths(e.target.value)
    let si= (e.target.value*amount*8)/(12*100)
    setTotal(si+amount)
    setInstallment(total/months)
  }

  return (
  <div className="bg-gray-500 h-full ">

    <div className="p-4 m-4">

    <div className=" p-4 m-4  text-3xl font-bold text-center text-white">
      Loan Calculator
    </div>

    <div className=" p-4 m-4 outline outline-offset-2 text-3xl font-bold text-center text-white">
      Maximum Funding 
      <h2>Rs 100000 </h2>
    </div>

    {/* Loan Amount */}
    <div className="p-4 m-4 outline outline-offset-2 text-3xl font-bold text-center text-white">
      <h1 >Loan Amount</h1>
      <h1>{amount} Amounts</h1>
      <Slider 
        min={10000} 
        max={100000} 
        defaultValue={50} 
        aria-label="Default" 
        valueLabelDisplay="auto" 
        onChange={amountChange}/>
      </div>

    {/* Loan Period */}
      <div className=" p-4 m-4 outline outline-offset-2 text-3xl font-bold text-center text-white">
        <h1>Loan Period</h1>
        <h1>{months} Months</h1>
        <Slider 
          min={1} 
          max={24} 
          defaultValue={5} 
          aria-label="Default" 
          valueLabelDisplay="auto" 
          onChange={monthChange}/>
      </div>

      </div>

      {/* monthly Estimated */}
      <div className=" p-4 m-4  text-3xl font-bold text-center text-white">
        Estimated monthly installment
        <h1>Rs. {installment}</h1>
        <button className="bg-blue-500 p-4 rounded-lg w-max">Apply Loan</button>
      </div>
  </div>
  )
}

export default App

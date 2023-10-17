"use client"
import { Black_And_White_Picture } from 'next/font/google'
import React, { useState, useEffect } from 'react'
import Table from './Table'
import History from './History'
import Form from './Form'
import Navbar from './Navbar'


const page = () => {
  
  const [amount, setamount] = useState("")
  const [desc, setdesc] = useState("")

  const modes = ['cash', 'online', 'loan'];
  const [mode, setMode] = useState("cash")

  const [credit, setcredit] = useState("0")
  const [debit, setDebit] = useState("0")
  const [loan, setLoan] = useState("0")
  const [total, settotal] = useState("0")

  const [mainTask, setMainTask] = useState([])

  const [userData, setUserData] = useState({
    mainTask: [],
    amount: [],
    desc: [],
    modes: [],
    mode: [],
    debit: [],
    credit: [],
    loan: [],
    total: [],
  });

  // Load userData from localStorage when the component mounts
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  // Save userData to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);



  const submitHandler = (e)=>{
    e.preventDefault()
    const currentCredit = parseFloat(credit);
    const currentDebit = parseFloat(debit);
    const currentLoan = parseFloat(loan)
    const currentTotal = parseFloat(total)
    const newAmount = parseFloat(amount);

    const updatedTotal = currentTotal + newAmount

    if(newAmount>0)
    {
      if(mode === 'loan')
      {
        const updateLoan = currentLoan + newAmount
        setLoan(updateLoan)
      }
      else {
      const updatedCredit = currentCredit + newAmount
      setcredit(updatedCredit)
      settotal(updatedTotal)
      }
    }
    if(newAmount<0)
    {
      const updatedDebit = currentDebit + newAmount
      setDebit(updatedDebit)
      settotal(updatedTotal)
    }
    setMainTask([... mainTask, {amount, desc, mode}])
    console.log(mainTask)
    setamount("")
    setdesc("")
  }

  const loan_handler =(loan, credit, toal, debit)=>{
    if(loan>toal)
    {
      alert("The loan amount is more than money availible. Cannot process the transaction.")
    }
    else{
      toal = toal - loan
      debit = debit - loan
      settotal(toal)
      setLoan("0")
      setDebit(debit)
      alert("Loan Repaid!!")
    }
  }
  
  let totalColor = "white"
  if((total < 0))
  {
    totalColor="rgba(255,0,0,0.7)"
  }

  let renderTask = <h2 className='text-center'>No Transaction History Availible</h2>
  if(mainTask.length>0)
  {
    renderTask = mainTask.map((t,i)=>{  
    let listColor
    if(t.mode === 'loan')
    {
      listColor = " linear-gradient(to right, rgba(0,0,255,0), rgba(0,0,255,0.7))"
    }
    
      return(
        <li key={i} className='border-sky-300 border-b-2 flex items-center justify-between mb-4' style={{backgroundImage: listColor}}>
        <h5 className='text-center text-xl font-semibold pl-10'>{t.amount}</h5>
        <h6 className='text-center text-xl font-semibold ml-10'>{t.desc}</h6>
        <h6 className='text-center text-xl font-semibold pr-10'>{t.mode}</h6>
      </li>
      )
    })
  }

  return (
    <>
    <Navbar userData={userData}/>
    <Form amount={amount} desc={desc} mode={mode} modes={modes} submitHandler={submitHandler} setamount={setamount} setdesc={setdesc} setMode={setMode} />
    <hr/> <br/>
    <Table credit={credit} debit={debit} loan={loan} total={total} totalColor={totalColor} />
    <div className='flex items-center justify-center'>
    <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5' onClick={()=>{{loan_handler(loan, credit, total, debit)}}}>Loan Repaid</button>
    </div> <br/>
    <History renderTask={renderTask} />
    <hr />
   </>
  )
}
export default page

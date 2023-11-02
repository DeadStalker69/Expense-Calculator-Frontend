"use client"
import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'

const ConversionCalcPage = () => {
  const currencies = ['USD (\u0024)', 'AUD (\u0024)', 'EURO (\u20AC)', 'CAD (\u0024)'];
  const [foreignCurrency, setforeignCurrency] = useState("")
  const [amount, setAmount] = useState("")
  const [value, setValue] = useState("")
  const [convertedValue, setconvertedValue] = useState("")

  
function ConvertedValueBloack({ amount, value, onChange }) {

  useEffect(() => {
    // Update the convertedValue whenever amount or value changes
    setconvertedValue(amount * value);
  }, [amount, value]);

  // Save the value to another state when it changes
  useEffect(() => {
    // You can save the value to another state here, e.g., setValueInAnotherState(convertedValue);
  }, [convertedValue]);

  return (
    <div className='flex justify-center'>
      <h3 className='text-2xl m-5 px-4 py-2 font-bold'>Amount in INR: </h3>
      <h3 className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'>{convertedValue}</h3>
    </div>
  );
}

const ConversionSubmitHandler = (e)=> {
  e.preventDefault()
}

  return (
    <>
    <Navbar />
    <form onSubmit={ConversionSubmitHandler}>
      <div className='flex justify-center'>
      <h3 className='text-2xl m-5 px-4 py-2 font-bold'> Select the the foreign currecy:</h3>
    <select className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2" value={foreignCurrency} onChange={(e) => setforeignCurrency(e.target.value)}>
      {currencies.map((option) => (
        <option key={option} value={option}>
        {option}
      </option>
      ))}
      </select>
      </ div>

      <div className='flex justify-center'>
      <h3 className='text-2xl m-5 px-4 py-2 font-bold'> Enter the amount:</h3>
      <input type='number' min={0} step={0.01} className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' value={amount} onChange={(e) =>{setAmount(e.target.value)}}/>
      </div>

      <div className='flex justify-center'>
      <h3 className='text-2xl m-5 px-4 py-2 font-bold'> Enter the foreign amount you will get in exchange of 1 INR:</h3>
      <input type='number' min={0} step={0.01} className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' value={value} onChange={(e) =>{setValue(e.target.value)}}/>
      </div>
       <br />
       <ConvertedValueBloack amount={amount} value={value} />
        <br />
        <br />
       <div className='flex justify-center'>
      <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add To Credit</button>
      </div>

    </form>
    </>
  )
}

export default ConversionCalcPage
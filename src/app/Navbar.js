import React from 'react'
import Link from 'next/link'
import LoanPage from './Loan/page'

const Navbar = (userData ) => {
  return (
    <div className='flex justify-between bg-black'>
    <Link className='text-white p-3 text-3xl font-bold text-center mt-2' href='/'>My Expense Tracker</Link>
    <div className='p-5'>
    <Link className='text-white p-3 text-3xl font-bold text-center pr-7' href='/Debit'>Debit</Link>
    <Link className='text-white p-3 text-3xl font-bold text-center' href='/Credit'>Credit</Link>
    <Link className='text-white p-3 text-3xl font-bold text-center' href='/Loan'>Loan</Link>
    <Link className='text-white p-3 text-3xl font-bold text-center' href='/Conversion_calculator'>Converter</Link>
    </div>
    </div>
  )
}

export default Navbar
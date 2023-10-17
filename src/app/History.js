import React from 'react'
import App from 'next/app'

const History = ({renderTask}) => {
  return (
    <div className='p-8 bg-slate-200'> 
    <p className='text-center bg-black text-white font-bold text-3xl p-3'>Transaction History</p>
    <br/>
    <div className='flex justify-between'>
      <h3 className='pl-10 font-bold text-2xl'>Amount</h3>
      <h3 className='font-bold text-2xl'> Description</h3>
      <h3 className='pr-10 font-bold text-2xl'> Mode</h3>
    </div>
    <br/>
    <ul>{renderTask}</ul>
    </div>
 
  )
}

export default History
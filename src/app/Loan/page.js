import React from 'react'
import page from '../page'
import History from '../History'


const LoanPage = (userData) => {
    let renderTask = <h2 className='text-center'>No Transaction History Availible</h2>
    if (userData == true)
    {
      renderTask = userData.mainTask.map((t,i)=>{  
      let listColor
      if(userData.t.mode === 'loan')
      {
        return(
            <li key={i} className='border-sky-300 border-b-2 flex items-center justify-between mb-4' style={{backgroundImage: listColor}}>
            <h5 className='text-center text-xl font-semibold pl-10'>{userData.t.amount}</h5>
            <h6 className='text-center text-xl font-semibold ml-10'>{userData.t.desc}</h6>
            <h6 className='text-center text-xl font-semibold pr-10'>{userData.t.mode}</h6>
          </li>
          )
      }
      })
    }

    return (
        <History renderTask={renderTask}/>
    )
}

export default LoanPage
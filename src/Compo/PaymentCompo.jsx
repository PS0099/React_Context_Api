import React from 'react'
import PaymentForm from './PaymentForm'
import Cart from './Cart'

function PaymentCompo() {
  return (
    <div className='flex justify-between'>
      <div className='w-[50%]'>
        <PaymentForm/>
      </div>
      <div className='w-[50%]'>
        <Cart/>
      </div>
    </div>
  )
}

export default PaymentCompo;

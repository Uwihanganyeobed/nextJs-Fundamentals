"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

const OrderProduct = () => {

   const router = useRouter();

   const handleClick = () =>{
      console.log('Placing Order');
      router.back();
   }
  return (
    <div>
      <h1>OrderProduct</h1>
      <button onClick={handleClick}>place order</button>
    </div>
  )
}

export default OrderProduct
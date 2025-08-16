import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
const CartTotal = () => {
    const { cartItems, currency, delivery_fee ,getCartAmount} = useContext(ShopContext);
    let total = getCartAmount() >999 ? getCartAmount() : getCartAmount() === 0 ? 0: getCartAmount()+delivery_fee;
  return (
    <div className='w-full border p-4 bg-white rounded-lg shadow-sm border-gray-200 hover:shadow-md transition-shadow duration-200'>
        <div className="text-2xl">
            <Title text1={'CART '} text2={' TOTAL'} />
        </div>
        <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex justify-between">
                <p className='text-gray-500'>Subtotal</p>
                <p>{currency} {getCartAmount()}.00</p>
            </div>
            <hr className='text-gray-500' />
            <div className="flex justify-between">
                <p className='text-gray-500'>Shipping Fee</p>
                <p>
                {total >= 999 
                    ? <span className="text-green-500">Free</span> 
                    : total == 0 ? `${currency} 0.00`  :`${currency}${delivery_fee}.00`
                }
                </p>

            </div>
            <hr className='text-gray-500' />
            <div className="flex justify-between">
                <b>Total</b>
                
                <b> {currency} {total}.00</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal
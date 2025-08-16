import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
  const [method, setMethod] = useState('')
  const { navigate } = useContext(ShopContext)

  const handlePlaceOrder = (e) => {
    e.preventDefault()

    const form = e.target.closest('form')
    if (!form.checkValidity()) {
      toast.error('Please fill in all required fields', { autoClose: 1000 })
      return
    }

    if (!method) {
      toast.error('Please select a payment method', { autoClose: 1000 })
      return
    }

    navigate('/orders')
  }

  return (
    <form>
      <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-200 px-4 sm:px-0'>
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'Delivery '} text2={'Info'} />
          </div>
          <div className='flex gap-3'>
            <input type='text' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First name' required />
            <input type='text' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last name' required />
          </div>
          <input type='email' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Email' required />
          <input type='text' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Street' required />
          <div className='flex gap-3'>
            <input type='text' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City' required />
            <input type='text' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State' required />
          </div>
          <div className='flex gap-3'>
            <input type='number' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Zipcode' required />
            <input type='text' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Country' required />
          </div>
          <input type='number' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Mobile Number' required />
        </div>

        <div className='mt-8'>
          <div className='mt-8 min-w-80'>
            <CartTotal />
          </div>

          <div className='mt-5 w-full border p-4 bg-white rounded-lg shadow-sm border-gray-200 hover:shadow-md transition-shadow duration-200'>
            <Title text1={'PAYMENT '} text2={'METHOD'} />
            <div className='flex flex-col lg:flex-row gap-4 mt-4'>
              <div onClick={() => setMethod('stripe')} className={`flex items-center justify-center gap-3 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer w-full lg:w-1/3 bg-white ${method === 'stripe' ? 'border-2 border-green-400' : ''}`}>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                <img src={assets.stripe_logo} className='h-6 mx-11.5' alt='Stripe' />
              </div>

              <div onClick={() => setMethod('razorpay')} className={`flex items-center justify-center gap-3 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer w-full lg:w-1/3 bg-white ${method === 'razorpay' ? 'border-2 border-green-400' : ''}`}>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                <img src={assets.razorpay_logo} className='h-6 mx-4' alt='Razorpay' />
              </div>

              <div onClick={() => setMethod('cod')} className={`flex items-center justify-center gap-3 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer w-full lg:w-1/3 bg-white ${method === 'cod' ? 'border-2 border-green-400' : ''}`}>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                <span className='text-xl font-medium'>Cash on Delivery</span>
              </div>
            </div>

            <div className='w-full text-end mt-8'>
              <button type='submit' onClick={handlePlaceOrder} className='bg-black text-white px-16 py-3 text-m'>
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder

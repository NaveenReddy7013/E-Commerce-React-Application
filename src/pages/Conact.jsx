import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
const Conact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT '} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className="text-gray-500 ">Old Maiwala <br />BTM Layout <br /> Bengaluru <br /> Karnataka, 560076</p>
          <p className='text-gray-500'>Ph: +91 7013497287 <br /> Email: contact@laffutstyles.com</p>

        </div>
      </div>
    </div>
  )
}

export default Conact
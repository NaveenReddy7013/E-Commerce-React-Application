import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
const Orders = () => {
  const {products, currency} = useContext(ShopContext);
  return (
    <div className='flex flex-col gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-200 px-4 sm:px-0'>
      <div className="text-2xl">
        <Title text1={'MY '} text2={'ORDERS'} />
      </div>
      <div className="mt-8">
  <h2 className="text-xl font-bold mb-4">My Orders</h2>

  {products.slice(1, 5).map((product, index) => (
    <div
      key={index}
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 mb-4"
      onClick={''}// Add your click handler here
      >
      {/* Product Info */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <img
          src={product.image[0]}
          alt={product.name}
          className="w-20 h-20 object-cover rounded-lg border border-gray-100"
        />
        <div>
          <h3 className="text-base sm:text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            {currency}{product.price}
          </p>
          <p className="text-gray-500 text-sm">Qty: {product.quantity}</p>
        </div>
      </div>

      {/* Order Date */}
      <div className="mt-3 sm:mt-0 text-sm sm:text-right text-gray-500 w-full sm:w-auto">
        <p>Order Date: <span className="font-medium">{product.orderDate}</span></p>
      </div>
    </div>
      ))}
  </div>


    </div>
  )
}

export default Orders
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-out p-4 cursor-pointer"
    >
      {/* Image Section */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={image[0]}
          className="hover:scale-110 transition-transform duration-500 ease-out"
          alt={name}
        />
      </div>

      {/* Product Info */}
      <p className="pt-3 Apb-1 text-gray-800 text-base font-medium truncate">
        {name}
      </p>
      <p className="text-lg font-semibold text-gray-900">
        {currency}{price}
      </p>
    </Link>
  );
};

export default ProductItem;

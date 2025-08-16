import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, setCartItems,navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        if (cartItems[item][size] > 0) {
          tempData.push({
            _id: item,
            size: size,
            quantity: cartItems[item][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const increaseQty = (id, size) => {
    let updatedCart = { ...cartItems };
    updatedCart[id][size] += 1;
    setCartItems(updatedCart);
  };

  const decreaseQty = (id, size) => {
    let updatedCart = { ...cartItems };
    if (updatedCart[id][size] > 1) {
      updatedCart[id][size] -= 1;
    } else {
      delete updatedCart[id][size];
      if (Object.keys(updatedCart[id]).length === 0) {
        delete updatedCart[id];
      }
    }
    setCartItems(updatedCart);
  };

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={'YOUR '} text2={'CART'} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const product = products.find((p) => p._id === item._id);
          if (!product) return null;

          return (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 mb-4"
            >
              {/* Product Info */}
              <div
                className="flex items-center cursor-pointer"
                onClick={() => navigate(`/product/${product._id}`)}
              >
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-md border border-gray-100 mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                </div>
              </div>

              {/* Price & Quantity */}
              <div className="flex flex-col items-end">
                <span className="text-lg font-bold text-gray-800">
                  {currency}
                  {(product.price * item.quantity).toFixed(2)}
                </span>

                {/* Quantity Controls */}
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => decreaseQty(item._id, item.size)}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-l"
                  >
                    −
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item._id, item.size)}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button onClick={()=>navigate('/place-order')} className="bg-black text-white text-sm my-8 px-8 py-3">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

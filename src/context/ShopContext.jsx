import React, { use, useEffect } from "react";
import { createContext } from "react";
import { products } from "../assets/assets";
export const ShopContext=createContext();
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ShopContextProvider=(props)=>{
    const currency='₹';
    const delivery_fee=10;
    const [search,setSearch]=useState("");
    const [showSearch, setShowSearch] = useState(true);
    const [cartItems,setCartItems]=useState({});
    const navigate = useNavigate();


    const [orders, setOrders] = useState([]);

    const placeOrder = (order) => {
    setOrders(prevOrders => [...prevOrders, order]);
    };

    const addToCart=async(itedmId,size)=>{

        if(!size){
            toast.error("Please select a size",{
                autoClose: 2000, // 1 second
            });
            return;
        }

        let cartData=structuredClone(cartItems);
        if(cartData[itedmId]){
            if(cartData[itedmId][size]){
                cartData[itedmId][size]++;  
            }else{
                cartData[itedmId][size]=1;
            }

        }else{
            cartData[itedmId]={};
            cartData[itedmId][size]=1;
        }
        toast.success("Item added to cart", {
            autoClose: 500, // 1 second
        });

        setCartItems(cartData);
    }

    const getCartItemsCount = () => {
        let count = 0;
        for (const item in cartItems) {
            for (const size in cartItems[item]) {
                try {
                    if (cartItems[item][size]) {
                        count += cartItems[item][size];
                    }
                } catch (error) {
                    console.error("Error counting cart items:", error);
                }
            }
        }
        return count;
    };


    const getCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            for (const size in cartItems[item]) {
                const product = products.find((p) => p._id === item);
                if (product) {
                    total += product.price * cartItems[item][size];
                }
            }
        }
        return total;
    }






    useEffect(()=>{
         getCartItemsCount(); 
    }, [cartItems]);
    const value={
        products,currency,delivery_fee,
        search,setSearch,
        showSearch,setShowSearch,setCartItems,
        cartItems,addToCart,getCartItemsCount,
        getCartAmount,navigate,placeOrder
    };
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
import React, { use, useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products ,search,showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category,setCategory]= useState([]);
  const [subCategory,setSubCategory]= useState([]);
  const [sortOrder, setSortOrder] = useState('relevant');
  const toggleCategory=(e)=>{
    if(category.includes(e.target.value)){
      setCategory(category.filter(cat => cat !== e.target.value));
    } else {
      setCategory(category=>[...category, e.target.value]);
    }
  }

  const toggleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(subCategory.filter(cat => cat !== e.target.value));
    } else {
      setSubCategory(subCategory=>[...subCategory, e.target.value]);  
    }
  }

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  const applyFilters = () => {
    let filtered = products;
    if (showSearch && search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      filtered = filtered.filter(product => category.includes(product.category));
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter(product => subCategory.includes(product.subCategory));
    }

    setFilterProducts(filtered);
  }

  const sortProducts = () => {
    let filtered = products;

  if (category.length > 0) {
    filtered = filtered.filter(product => category.includes(product.category));
  }

  if (subCategory.length > 0) {
    filtered = filtered.filter(product => subCategory.includes(product.subCategory));
  }

  if (sortOrder === 'low-high') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'high-low') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  setFilterProducts(filtered);
  }

  // Apply filters when category, subCategory, or products change
  useEffect(() => {
    applyFilters(); 
  }, [category, subCategory, products,search, showSearch]);

  useEffect(() => {
    sortProducts();  
  }, [category, subCategory, sortOrder, products]);

  

  return (
    <div className="flex flex-col sm:flex-row gap-6 border-t border-gray-200 bg-gray-50 min-h-screen p-4 sm:p-8">
      {/* Filter Sidebar */}
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 w-full sm:w-64">
        {/* Toggle on mobile */}
        <div
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center justify-between cursor-pointer sm:cursor-default"
        >
          <p className="text-lg font-semibold text-gray-800">Filters</p>
          <img
            src={assets.dropdown_icon}
            className={`h-3 transition-transform sm:hidden ${
              showFilter ? 'rotate-90' : ''
            }`}
            alt=""
          />
        </div>

        {/* Category */}
        <div
          className={`mt-6 space-y-4 border-t border-gray-200 pt-4 ${
            showFilter ? '' : 'hidden sm:block'
          }`}
        >
          <div>
            <p className="mb-2 text-sm font-bold text-gray-700 uppercase tracking-wide">
              Categories
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-600"  >
              {['Men', 'Women', 'Kids'].map((cat) => (
                <label key={cat}  className="flex items-center gap-2 cursor-pointer">
                  <input onChange={toggleCategory} type="checkbox" className="w-4 h-4" value={cat}  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Type */}
          <div>
            <p className="mb-2 text-sm font-bold text-gray-700 uppercase tracking-wide">
              Type
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input onChange={toggleSubCategory} type="checkbox" className="w-4 h-4" value={type} />
                  {type}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <Title text1={'ALL '} text2={' COLLECTIONS'} />
          <select onChange={(e)=>setSortOrder(e.target.value)} className="border border-gray-300 rounded-lg text-sm px-3 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none">
            <option value="relavant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>

      </div>
    </div>
  );
};

export default Collection;

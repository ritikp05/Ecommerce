import React from 'react';
import { useNavigate } from 'react-router-dom';

const Emptycart = () => {
const navigate=useNavigate();

  return (
    <div className='bg-red-500 text-white p-9 flex flex-col'>
      <h2 className='text-2xl font-bold mb-4'>Your Cart is Empty</h2>
      <p className='text-lg mb-6'>Looks like you haven't added any items to your cart yet.</p>
      <p className='text-sm'>Explore our products and find something you like!</p>
      <button className='mt-4 bg-white text-blue-700 px-4 py-2 rounded-md border border-white hover:bg-green-200' onClick={()=>navigate('/')}>
        Browse Products
      </button>
    </div>
  );
}

export default Emptycart;

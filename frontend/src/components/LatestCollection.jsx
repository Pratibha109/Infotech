import React from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { useContext } from 'react';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
   // const [latestProducts, setLatestProducts] = React.useState([]);
     const [latestProducts, setLatestProducts] = useState([]);
    
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Check out our latest collection of products</p>
      </div>
    </div>
  )
}

export default LatestCollection

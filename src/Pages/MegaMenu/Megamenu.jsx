import React, { useEffect, useState } from 'react'
import ProductCard from '../../Layout/ProductCard'
import MegamenuCard from './MegamenuCard'

const Megamenu = () => {
  const [renderProducts, setRenderProduts]=useState([])
      useEffect(()=>{
          fetch("/products.json")
          .then(res => res.json())
          .then(data => setRenderProduts(data))
      },[])
  return (
    <>
     <div className='w-8/12 mx-auto mt-20'>
        <div className='flex justify-between items-center text-black'>
          <p className='text-xl font-semibold'>Popular Products</p>
          <ul className='text-base flex gap-5'>
            <li className='text-green-400'>All</li>
            <li>Beking Meterial</li>
            <li>Fresh Fruits</li>
            <li>Vegetables</li>
            <li>Milks & Dairys</li>
            <li>Meat</li>
          </ul>
        </div>
        <div className='mt-10 grid grid-cols-4 gap-5'>
           {
        renderProducts.map(product => (
            <MegamenuCard key={product.id} product={product}></MegamenuCard>
        ))
      }
        </div>
      </div> 
    </>
  )
}

export default Megamenu

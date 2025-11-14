import React, { useEffect, useState } from 'react';
import products from '../../public/products.json'
import ProductCard from './ProductCard';
const Products = () => {
    const [renderProducts, setRenderProduts]=useState([])
    useEffect(()=>{
        fetch("/products.json")
        .then(res => res.json())
        .then(data => setRenderProduts(data))
    },[])
  return (
    <div className='grid md:grid-cols-4 grid-cols-1 gap-6 max-w-[1400px] mx-auto mt-20 px-10 '>
      {
        renderProducts.map(product => (
            <ProductCard key={product.id} product={product}></ProductCard>
        ))
      }

    </div>
  );
}

export default Products;

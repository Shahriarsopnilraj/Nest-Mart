import React from 'react'
import icon1 from '../assets/icon-1.png'
import icon2 from '../assets/icon-2.png'
import icon3 from '../assets/icon-3.png'
import icon4 from '../assets/icon-4.png'
import icon5 from '../assets/icon-5.png'

const FourCards = () => {
  return (
    <section className='grid grid-cols-5 max-w-[1400px] mx-auto mt-20 gap-2'>
        <div className='flex gap-5 justify-center items-center bg-gray-200 p-2 rounded-md'>
            <img src={icon1} alt="" className='h-10 w-10' />
            <div>
                <h3 className='text-black'>Best price & Offers</h3>
                <p className='text-gray-400'>Order $50 or more</p>
            </div>
        </div>
        <div  className='flex gap-5 justify-center items-center bg-gray-200 p-2 rounded-md'>
            <img src={icon2} alt="" className='h-10 w-10'/>
            <div>
                <h3 className='text-black'>Best price & Offers</h3>
                <p className='text-gray-400'>Order $50 or more</p>
            </div>
        </div>
        <div className='flex gap-5 justify-center items-center bg-gray-200 p-2 rounded-md'>
            <img src={icon3} alt="" className='h-10 w-10'/>
            <div>
                <h3 className='text-black'>Best price & Offers</h3>
                <p className='text-gray-400'>Order $50 or more</p>
            </div>
        </div>
        <div className='flex gap-5 justify-center items-center bg-gray-200 p-2 rounded-md'>
            <img src={icon4} alt="" className='h-10 w-10'/>
            <div>
                <h3 className='text-black'>Best price & Offers</h3>
                <p className='text-gray-400'>Order $50 or more</p>
            </div>
        </div>
        <div className='flex gap-5 justify-center items-center bg-gray-200 p-2 rounded-md'>
            <img src={icon5} alt="" className='h-10 w-10'/>
            <div>
                <h3 className='text-black'>Best price & Offers</h3>
                <p className='text-gray-400'>Order $50 or more</p>
            </div>
        </div>
    </section>
)}

export default FourCards


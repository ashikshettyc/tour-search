import React from 'react'
import { FaBookmark, FaShareAlt } from 'react-icons/fa'


function Tours({filterData}) {
   
  return (
    <div>

            <div className='py-4 flex flex-col gap-y-8'> 
            {filterData.map((data, index) => {
               return( <div key={index} className='flex justify-center flex-col w-1/2 gap-y-5  items-center mx-auto bg-[#f5f5f5] p-6 rounded-lg'>
                <div className='flex  w-full justify-around gap-20'>
                <div className='w-[50%] flex-col items-start flex gap-2 '>
                <p className='font-bold text-[#1b1b1b] text-xl'>{data.name.common}</p>
                <p className='italic text-[#1b1b1b] text-sm'>Official name: {data.name.official}</p>
                <p className='italic text-[#1b1b1b] text-sm'>Capital: {data.capital}</p>
                <p className='italic text-[#1b1b1b] text-sm'>Region: {data.region}</p>
    
                    </div>
                <div className='items-center '>
    <img src={data.flags.png} width={150} alt="map"/>
                </div>
            </div>
            <div className='flex justify-between w-full text-[#00bfff] p-2'>
               <FaBookmark/>
               <FaShareAlt/>
            </div>
            </div>)
            })}
            
        </div>
        
    
    </div>
   
   
  )
}

export default Tours
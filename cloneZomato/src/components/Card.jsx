import React from 'react'
import { HiCursorClick } from "react-icons/hi";
import { data } from './Data';
const Card = () => {
    return (
        <div className='relative w-full overflow-hidden px-4 pt-10 pb-20 px-20 grid grid-cols-4 gap-10'>
            {
                data.map((item, idx) => {
                    return (
                        <div key={idx} className={`${item.className} border-2  flex flex-col items-center py-12 px-15 rounded-4xl gap-3 hover:scale-105 duration-200 hover:cursor-pointer`}>
                            <img src={item.src} alt="" className='rounded-4xl' />
                            <div className='text-2xl font-bold'>{item.name}</div>
                            <div className="text-center text-lg text-stone-500 font-normal  2xl:text-lg">{item.desc}</div>
                            <div className='text-lg font-semibold flex items-center gap-2 animate-bounce mt-3'>check it out <HiCursorClick className='inline' /></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card

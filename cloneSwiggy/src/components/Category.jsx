import React, { useState } from 'react'
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
const Category = () => {
    const foods = [
        { src: "img/f1.png", name: "Pizza" },
        { src: "img/f2.png", name: "Burger" },
        { src: "img/f3.png", name: "Pasta" },
        { src: "img/f4.png", name: "Sandwich" },
        { src: "img/f5.png", name: "French Fries" },
        { src: "img/f6.png", name: "Dosa" },
        { src: "img/f7.png", name: "Samosa" },
        { src: "img/f8.png", name: "Biryani" },
        { src: "img/f9.png", name: "Tacos" },
        { src: "img/f10.png", name: "Noodles" },
        { src: "img/f11.png", name: "Paneer Tikka" },
        { src: "img/f12.png", name: "Salad" },
        { src: "img/f13.png", name: "Momos" }
    ];

    const [slide , setSlide] = useState(0);
    const nextSlide = () => {
        // console.log(slide+3,foods.length)
        // console.log(foods.length-7,"==",slide+3)
        if(foods.length-7 == slide) return false;
        setSlide(slide + 3);
        
    }
    const prevSlide = () => {
        if(slide == 0) return false;
        setSlide(slide - 3);
    }   

    return (
        <div className='max-w-[1200px] mx-auto mt-3 px-3'>

            <div className=' w-full flex items-center justify-between'>
                <div className='font-semibold text-[20px]'>What's on your mind?</div>
                <div className='flex'>
                    <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center'><BiLeftArrowAlt fontSize={25} onClick={prevSlide}/></div>
                    <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center'><BiRightArrowAlt fontSize={25} onClick={nextSlide}/></div>
                </div>
            </div>
            <div className='flex gap-4 my-5 overflow-hidden'>
                {
                    foods.map((item,idx) => {
                        return (
                        <div style={{
                            transform:`translateX(-${slide * 110}% )`
                        }} className='flex-grow shrink-0 flex flex-col items-center duration-700' key={idx}>
                            <img src={item.src} alt="" className='w-[156px] h-[156px] rounded-full object-cover z-0' />
                            <p>{item.name}</p>
                        </div>
                        )
                    })
                }
            </div>
            <hr className='my-4 border-[2px] border-stone-300'/>
        </div>
    )
}

export default Category

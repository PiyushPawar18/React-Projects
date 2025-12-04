import React, { useState } from 'react'
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import Card from "./Card"

const TopRest = () => {

    const foodItems = [
        {
            image: "img/f10.png",
            offer: "items at ₹199",
            title: "Veg Burger Combo",
            rating: "4.5",
            minTime: 25,
            maxTime: 35,
            name: "Burger Meal",
            place: "Dadar"
        },
        {
            image: "img/f9.png",
            offer: "items at ₹150",
            title: "Margherita Pizza",
            rating: "4.1",
            minTime: 20,
            maxTime: 30,
            name: "Pizza Slice",
            place: "Bandra"
        },
        {
            image: "img/f8.png",
            offer: "items at ₹220",
            title: "Paneer Tikka Roll",
            rating: "4.6",
            minTime: 30,
            maxTime: 45,
            name: "Tikka Roll",
            place: "Andheri"
        },
        {
            image: "img/f7.png",
            offer: "items at ₹250",
            title: "Chicken Biryani",
            rating: "4.8",
            minTime: 35,
            maxTime: 50,
            name: "Biryani Bowl",
            place: "Goregaon"
        },
        {
            image: "img/f6.png",
            offer: "items at ₹120",
            title: "Masala Dosa",
            rating: "4.0",
            minTime: 15,
            maxTime: 25,
            name: "Dosa Special",
            place: "Kurla"
        },
        {
            image: "img/f5.png",
            offer: "items at ₹180",
            title: "Pav Bhaji Combo",
            rating: "4.3",
            minTime: 20,
            maxTime: 30,
            name: "Pav Bhaji",
            place: "Thane"
        },
        {
            image: "img/f4.png",
            offer: "items at ₹160",
            title: "Momos Platter",
            rating: "3.9",
            minTime: 25,
            maxTime: 40,
            name: "Momo Feast",
            place: "Colaba"
        },
        {
            image: "img/f3.png",
            offer: "items at ₹210",
            title: "Greek Salad Bowl",
            rating: "4.5",
            minTime: 20,
            maxTime: 35,
            name: "Healthy Salad",
            place: "Powai"
        },
        {
            image: "img/f2.png",
            offer: "items at ₹300",
            title: "Tandoori Chicken",
            rating: "4.7",
            minTime: 40,
            maxTime: 55,
            name: "Tandoori Platter",
            place: "Vile Parle"
        },
        {
            image: "img/f1.png",
            offer: "items at ₹190",
            title: "Chole Bhature",
            rating: "4.2",
            minTime: 30,
            maxTime: 45,
            name: "Punjabi Thali",
            place: "Malad"
        }
    ];
    const [slide , setSlide] = useState(0)

    const prevSlide= () => {
        if(slide == 0) return false;
        setSlide(slide-2)
    }
    const nextSlide = () => {
        if(foodItems.length - 4 == slide) return false;
        setSlide(slide+2)
    }

    return (
        <div>
            <div className='max-w-[1200px] mx-auto mt-3 px-3'>

                <div className=' w-full flex items-center justify-between'>
                    <div className='font-semibold text-[20px]'>Top restaurant chains in Mumbai</div>
                    <div className='flex'>
                        <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center'><BiLeftArrowAlt fontSize={25} onClick={prevSlide}/></div>
                        <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center'><BiRightArrowAlt fontSize={25} onClick={nextSlide}/></div>
                    </div>
                </div>
                <div  className='flex gap-4 overflow-hidden mt-4'>
                    {
                        foodItems.map((item, idx) => {
                            return (
                                <div key={idx} style={{
                                    transform:`translateX(-${slide * 100}% )`
                                }} className='duration-700 w-full md:w-[260px] shrink-0'>
                                <Card  {...item}/>
                                </div>
                            )
                        })
                    }
                </div>
            <hr className='my-4 border-[2px] border-stone-300'/>
            </div>
        </div>
    )
}

export default TopRest

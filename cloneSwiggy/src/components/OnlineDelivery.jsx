import React, { useState, useRef, useEffect } from 'react'
import Card from './Card'

const OnlineDelivery = () => {
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

    const refDiv = useRef(null);
    const [isTop, setIsTop] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            const topPosition = refDiv.current.getBoundingClientRect().top;
            if (topPosition <= 0) setIsTop(true);
            else setIsTop(false);
        };

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);


    return (
        <div className='max-w-[1200px] mx-auto mt-3 px-2' ref={refDiv} >
            <div className=' w-full flex items-center justify-between'>
                <div className='font-semibold text-[20px]'>Restaurants with online food delivery in Mumbai</div>
            </div>
            <div className={isTop ? "fixed bg-white top-0 z-[9999999] w-full left-0" : ""}>
                <div className='max-w-[1200px] mx-auto my-5 flex gap-3 border border-red-800'>
                    <div className='p-3 rounded-md shadow-xl text-stone-700'>filter</div>
                    <div className='p-3 rounded-md shadow-xl text-stone-700'>Sort by</div>
                </div>
            </div>
            <div className='grid gap-4  grid-cols-2 md:grid-cols-4 mt-4'>
                {
                    foodItems.map((data, idx) => {
                        return (
                            <Card {...data} key={idx} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OnlineDelivery

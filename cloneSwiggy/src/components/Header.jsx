import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { CgSearch } from "react-icons/cg";
import { CiDiscount1 } from "react-icons/ci";
import { FaSignInAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }
    const hideSideMenu = (e) => {
        // console.log(e.target.className,e.target.id);
        // if(e.target.id === "1"){
        //     setToggle(false);
        // }
        setToggle(false)
    }

    const a = [
        {
            icon:<CgSearch/>,
            name:"Search"
        },
        {
            icon:<CiDiscount1/>,
            name:"Discount",
            sup:"New"
        },
        {
            icon:"",
            name:"Help"
        },
        {
            icon:<FaSignInAlt/>,
            name:"Sign-in"
        },
        {
            icon:<FaCartArrowDown/>,
            name:"Cart",
            sup:"(2)"
        },
    ]
    return (
        <>
            <div className='black-overlay w-full h-full fixed duration-500' id="1" onClick={(e) => hideSideMenu(e)} style={{
                opacity: toggle? 1:0,
                visibility:toggle? "visible" : 'hidden'
            }}>
                <div className='w-[400px] bg-white h-full absolute duration-[600ms]' style={{
                    left: toggle? '0%' : "-100%"
                }} onClick={(e) => e.stopPropagation()}></div>
            </div>
            <header className=' p-[15px] shadow-xl sticky top-0 bg-white z-[9999999]'>
                <div className='max-w-[1200px] mx-auto  flex items-center'>
                    <div className='w-[100px]'>
                        <img src="./img/swiggyLogo.png" alt="swiggyLogo" className='w-full' />
                    </div>
                    <div>
                        <span className='font-bold border-b-2 '>Ratanda</span>  Jodhpur, Rajasthan , India
                        <RxCaretDown fontSize={25} className='inline  text-[#fcB019] cursor-pointer'  onClick={showSideMenu}/>
                    </div>
                    <nav className='hidden md:flex list-none gap-14 ml-auto font-semibold text-[18px]'>
                        {
                            a.map((link,idx) => {
                                return (
                                    <li key={idx} className='flex items-center gap-2'>
                                        {link.icon}
                                        <a href="#" className=' hover:text-[#fcB019]'>
                                            {link.name}
                                            <sup className='text-orange-500'>{link.sup}</sup> 
                                        </a>
                                    </li>
                                )
                            })
                        }
                        
                        
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header

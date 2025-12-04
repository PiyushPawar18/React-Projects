import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { PiXLogo } from "react-icons/pi";
export const Footer = () => {
    return (
        <div className='w-full bg-black py-20'>
            <div className='max-w-[1000px] mx-auto h-100  flex flex-col gap-5'>
                <div>
                    <img src="./src/assets/ZomatoLogo.png" alt="" className='w-40' />
                </div>
                <div className=' grid grid-cols-5 gap-5'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl text-[#f3f0f0]'>Eternal</h1>
                        <div className='text-stone-600 duration-150 flex flex-col gap-2'>
                            <div className='hover:text-[#f3f0f0]'>Zomato</div>
                            <div className='hover:text-[#f3f0f0]'>Blinkit</div>
                            <div className='hover:text-[#f3f0f0]'>District</div>
                            <div className='hover:text-[#f3f0f0]'>Hyperpure</div>
                            <div className='hover:text-[#f3f0f0]'>Feeding India</div>
                            <div className='hover:text-[#f3f0f0]'>Investor Relations</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl text-[#f3f0f0]'>For Restaurants</h1>
                        <div className='text-stone-600 duration-150 flex flex-col gap-2'>
                            <div className='hover:text-[#f3f0f0]'>Partner With Us</div>
                            <div className='hover:text-[#f3f0f0]'>Apps For You</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl text-[#f3f0f0]'>For Delivery <br />Partners</h1>
                        <div className='text-stone-600 duration-150 flex flex-col gap-2'>
                            <div className='hover:text-[#f3f0f0]'>Partner With Us</div>
                            <div className='hover:text-[#f3f0f0]'>Apps For You</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl text-[#f3f0f0]'>Learn More</h1>
                        <div className='text-stone-600 duration-150 flex flex-col gap-2'>
                            <div className='hover:text-[#f3f0f0]'>Privacy</div>
                            <div className='hover:text-[#f3f0f0]'>Security</div>
                            <div className='hover:text-[#f3f0f0]'>Terms of Service</div>
                            <div className='hover:text-[#f3f0f0]'>Help & Support</div>
                            <div className='hover:text-[#f3f0f0]'>Report a Fraud</div>
                            <div className='hover:text-[#f3f0f0]'>Blog</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl text-[#f3f0f0]'>Social Links</h1>
                        <div className=' duration-150 flex gap-1'>
                            <FaLinkedin color='white' fontSize={"20px"} />
                            <FaInstagram color='white' fontSize={"20px"} />
                            <FaFacebookSquare color='white' fontSize={"20px"} />
                            <IoLogoYoutube color='white' fontSize={"20px"} />
                            <PiXLogo color='white' fontSize={"20px"} />
                        </div>
                        <div className='flex flex-col gap-3  mt-2'>
                            <a href="#"><img src="./src/assets/Googleplay.png" alt="" className='w-35' /></a>
                            <a href="#" ><img src="./src/assets/AppStore.png" alt="" className='w-35' /></a>
                        </div>
                    </div>
                </div>
                <div className='text-stone-600'>
                    <hr />
                    <p className='text-[13px] mt-5'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners
                        2008-2025 © Zomato™ Ltd. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

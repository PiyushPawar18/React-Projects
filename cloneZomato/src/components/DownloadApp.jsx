import React from 'react'
import Appinstall from './Appinstall'

const DownloadApp = () => {
    return (
        <div className='relative w-full px-20 my-30'>
            <div className='download-wrap  border-5 border-[#fcd5d5] rounded-4xl flex items-center justify-evenly pt-10'>
                <div className=' h-full flex flex-col justify-center'>
                    <div className='text-5xl font-bold '>Download the app now!</div>
                    <div className='text-3xl mt-2 text-stone-500'>Experience seamless online ordering <br /> only on the Zomato app</div>
                    <Appinstall />
                </div>
                <div className='relative w-[35%] h-full  transition-transform duration-700 ease-out translate-y-0'>
                    <div className=''>
                        <img src="./src/assets/Mobile.png" alt="" />
                    </div>
                    <div className='absolute top-0 size-full left-0 flex flex-col items-center justify-end gap-5'>
                        <div className='text-2xl text-stone-500 text-center'> Scan the QR code <br/> to download the app</div>
                        <div className='self-center w-70 mb-5'>
                            <img src="./src/assets/scanner.png" alt="dge" className='object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadApp

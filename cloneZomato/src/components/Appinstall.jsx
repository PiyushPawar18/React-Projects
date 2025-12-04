import React from 'react'

const Appinstall = () => {
    return (
        <div className='flex py-7 gap-7 items-center  z-10'>
            <div className='border-2 border-white rounded-[10px] overflow-hidden bg-black'>
                <a href="#"><img src="./src/assets/Googleplay.png" alt=""  className='w-43'/></a>
            </div>
            <div className='border-2 border-white rounded-[10px] overflow-hidden bg-black'>
                <a href="#" ><img src="./src/assets/AppStore.png" alt="" className='w-38' /></a>
            </div>
        </div>
    )
}

export default Appinstall

import React from 'react'
import zomatoVideo from './assets/ZomatoVideo.mp4'
import { RiScrollToBottomLine } from "react-icons/ri";
import Card from './components/Card';
import DownloadApp from './components/DownloadApp';
import Appinstall from './components/Appinstall';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className='bg-white'>
      <div className='relative h-screen w-full flex flex-col items-center justify-end'>
        <div className='absolute top-0 left-0 h-full w-full bg-[#212121 ] '>
          <div className='relative h-full w-full overflow-hidden'>
            <video src={zomatoVideo} className='w-full' autoPlay loop muted />
          </div>
        </div>
        <div className='z-20 max-h-[75%]  text-white flex flex-col items-center justify-center'>
          <div>
            <img src="./src/assets/ZomatoLogo.png" alt="dge" className='w-80 mb-6' />
          </div>
          <div className='flex flex-col items-center justify-center z-10'>
            <h1 className='text-center text-[56px]  font-extrabold font-serif leading-tight px-3 mb-6'>India's #1 <br /> food delivery app </h1>
            <h3 className='text-center text-[20px] font-semibold leading-tight'>Experience fast & easy online ordering <br></br>
              on the Zomato app</h3>
          </div>
          <Appinstall/>
          <div className='mb-4 animate-bounce z-10'>
            <span className='text-lg font-extrabold '>Scroll down <RiScrollToBottomLine fontSize={"25px"} className='inline' /></span>
          </div>
          <div className='image-overlay absolute w-full h-full top-0 z-0'></div>
        </div>
      </div>
      <div className='relative w-full overflow-hidden'>
        <div className='ralative h-[45rem] z-0 w-full'>
          <div className='absolute top-[32px] h-[28em] left-0 w-[70%] z-30 translate-x-[-65%]'>
              <img src="./src/assets/style.png" alt="" className='n-full w-full object-cover '/>
          </div>
          <div className='absolute top-[-20%] right-0 w-[70%] z-10 translate-x-[65%]'>
            <img src="./src/assets/style.png" alt="" className='n-full w-full object-cover '/>
          </div>
          <div className='absolute top-[200px] left-0 bg-white w-full z-5 flex flex-col items-center'>
            <h1 className='text-center text-7xl font-semibold text-[#ef7676] mb-6'>Better food for <br/> more people</h1>
            <p className='text-center text-4xl text-stone-500'>For over a decade, we’ve enabled our <br/> customers to discover new tastes,<br/>delivered right to their doorstep</p>
          </div>
          <img src="./src/assets/burger.png" alt="" className='absolute z-30 w-60 top-52 left-32'/>
          <img src="./src/assets/momo.png" alt="" className='absolute z-30 w-60 top-0 right-52'/>
          <img src="./src/assets/pizza.png" alt="" className='absolute z-30 w-60 top-102 right-22'/>
          <img src="./src/assets/tomatoSlice.png" alt="" className='absolute z-30 w-13 top-80 right-50 rotate-45'/>
          <img src="./src/assets/tomatoSlice.png" alt="" className='absolute z-30 w-12 top-130 left-22'/>
          <img src="./src/assets/leaf.png" alt="" className='absolute z-30 w-14 top-20 left-102'/>
        </div>
        <div className='relative bottom-10 max-w-[1200px] mx-auto h-30 rounded-4xl flex items-center justify-between  py-3 px-6' style={{boxShadow:"0px 0px 20px 0px #dadada"}}>
          <div className='flex h-full items-center'>
              <div className='flex flex-col justify-center'>
                <h1 className='text-5xl font-bold text-stone-500'>3,00,000+</h1>
                <p className='text-2xl text-stone-400'>restaurants</p>
              </div>
              <img src="./src/assets/home.png" alt="" className='ml-8 h-15'/>
          </div>
          <div className='h-15 w-0 border-1 border-stone-400 '></div>
          <div className='flex h-full items-center'>
              <div className='flex flex-col justify-center'>
                <h1 className='text-5xl font-bold text-stone-500'>800+</h1>
                <p className='text-2xl text-stone-400'>cities</p>
              </div>
              <img src="./src/assets/location.png" alt="" className='ml-8 h-15'/>
          </div>
          <div className='h-15 w-0 border-1 border-stone-400 '></div>
          <div className='flex h-full items-center'>
              <div className='flex flex-col justify-center'>
                <h1 className='text-5xl font-bold text-stone-500'>3 billion+</h1>
                <p className='text-2xl text-stone-400'>orders delivered</p>
              </div>
              <img src="./src/assets/delivery.png" alt="" className='ml-8 h-15'/>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center pt-20'>
        <img src="./src/assets/eternal.png" alt="" className='w-60'/>
      </div>
      <div className='relative w-full flex items-center justify-center mt-10 mb-3 gap-5'>
          <div className='bg-stone-300 w-20 h-0.5 '></div>
            <span className='text-3xl text-center text-stone-400'>POWERING INDIA’S <br/> CHANGING LIFESTYLES</span>
          <div className='bg-stone-300 w-20 h-0.5 '></div>
      </div>
      <Card/>
      <DownloadApp/>
      <Footer/>
    </div>
  )
}

export default App

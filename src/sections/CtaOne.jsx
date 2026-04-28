import React, { useEffect } from 'react'
import cta1 from "../assets/about2.webp"
import { FaPlay } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css';

const CtaOne = () => {

  useEffect(()=>{
      Aos.init({
        duration:800,
        delay:200,
        once:false,
      })
    },[]);

  return (
    <div id='cta1'style={{backgroundImage: `url(${cta1})`}} className='relative w-full lg:h-[500px] h-auto lg:p-22
    p-10 flex flex-col justify-center items-center gap-5 bg-cover bg-center'>
      {/* black overlay */}
      <div className='absolute inset-0 bg-black/50'>
      </div>

      {/* content part */}
      <div className='relative z-10 flex flex-col justify-center
      items-center gap-5'>
        <h1 data-aos="zoom-in" data-aos-delay="100" className='lg:text-5xl text-3xl
        font-fakhwang font-semibold text-white lg:w-[60%] w-full text-center capitalize
        '>Your Gateway to Seamless Travel Experiences</h1>
        <p data-aos="zoom-in" data-aos-delay="200" className='text-white lg:w-[50%] w-full text-lg text-center'>Discover a smarter way to plan your journeys with our travel agency app,
         designed to make every trip effortless and enjoyable.
         From booking flights and hotels to exploring curated 
        destinations and personalized itineraries, everything you need is in one place. Whether you're planning a 
        relaxing vacation, a business trip, or an adventurous getaway, our app offers real-time updates, exclusive deals, and 
        24/7 support to ensure a smooth travel experience. Travel with confidence and convenience, wherever your destination may be.</p>
        <div data-aos="zoom-in" data-aos-delay="300" className='bg-white lg:p-7 p-4
        rounded-full'>
        <FaPlay className='text-orange-600 text-2xl'/>
        </div>
      </div>
    </div>
  )
}

export default CtaOne
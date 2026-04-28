import React, { useEffect } from 'react'
import aboutimg1 from '../assets/about1.webp'
import aboutimg2 from '../assets/about2.webp'
import { FaGlobeAmericas } from 'react-icons/fa'
import { IoIosPricetag } from 'react-icons/io'
import Aos from 'aos'
import 'aos/dist/aos.css';

const About = () => {

  useEffect(()=>{
      Aos.init({
        duration:800,
        delay:200,
        once:false,
      })
    },[]);

  return (
    <div id='about' className='flex lg:flex-row flex-col justify-between items-center
    gap-15 lg:px-22 py-5 lg:py-22 p-20 '>
      <div className='flex flex-col justify-center items-start'>
        <img data-aos="zoom-in" data-aos-delay="100" src={aboutimg1}  className="rounded-md"
        alt='about_img_1'/>
        <img data-aos="zoom-in" data-aos-delay="200" src={aboutimg2}  className="rounded-md w-[40%]
        border-10 border-white -mt-[150px] -ml-[30px] -rotate-2" alt='about_img_2'/>
      </div>
      <div className='flex flex-col gap-5'>
          <h1 data-aos="zoom-in" data-aos-delay="300" className='text-md text-center text-gray-600
          '>About Us</h1>
          <h1 data-aos="zoom-in" data-aos-delay="400" className='lg:text-5xl text-3xl font-fakhwang
          text-semibold text-black'>Embark on hilarious journey with our travel experts</h1>
          <p data-aos="zoom-in" data-aos-delay="500" className='text-gray-700 font-semibold'>We are a passionate travel agency dedicated to turning your dream journeys into reality. With expert 
          planning and personalized service, we create unforgettable 
          travel experiences. From relaxing holidays to adventurous tours, we handle every detail with care. Our mission
           is to make travel easy, affordable, and truly memorable for every traveler.</p>
           <p data-aos="zoom-in" data-aos-delay="600" className='text-gray-500 '>We craft unique travel experiences with trusted expertise,
            personalized itineraries, seamless planning, and exceptional service, helping you discover destinations with comfort.</p>
            <hr className='w-full border-top border-gray-300'/>

            <div data-aos="zoom-in" data-aos-delay="600" id='icon-box' className='w-full grid lg:grid-cols-2 
             grid-cols-1 justify-between items-center lg:gap-5 gap-10'>
               <div id='left' className='flex lg:flex-row flex-col justify-between lg:items-center items-start 
                 gap-4'>
                  <div id='icon' className='w-[20%] justify-center flex items-center bg-orange-600 hover:bg-black
                  cursor-pointer p-4 rounded-md'>
                   <FaGlobeAmericas className='text-3xl text-white'/>
                  </div>
                  <div className='w-[80%] flex-col justify-center items-start gap-1'>
                    <h1 className='text-black text-xl font-medium'>Best Destination</h1>
                    <p className='text-sm text-gray-500'>Discover your perfect getaway with curated destinations and seamless booking</p>
                  </div>
                </div>

                 <div id='right' className='flex lg:flex-row flex-col justify-between lg:items-center items-start 
                 gap-4'>
                  <div id='icon' className='w-[20%] justify-center flex items-center bg-orange-600 hover:bg-black
                  cursor-pointer p-4 rounded-md'>
                   <IoIosPricetag className='text-3xl text-white'/>
                  </div>
                  <div className='w-[80%] flex-col justify-center items-start gap-1'>
                    <h1 className='text-black text-xl font-medium'>Affordable Price</h1>
                    <p className='text-sm text-gray-500'>Affordable pricing plans tailored for seamless and memorable travel experiences.</p>
                  </div>
                </div>
           

            </div>
      </div>
    </div>
  )
}

export default About
import React, {useState} from 'react'
import Navbar from './Navbar'
// import img1 from './hero/image.png'

import { FaCheckCircle } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

// import { Application } from '@splinetool/runtime';
import Spline from '@splinetool/react-spline';


const Carousel = ({ textData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textData.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + textData.length) % textData.length);
    };
  
    return (
        <div className="text-xs w-[80%] flex items-center justify-between ">
            <div className="w-[75%]">
                <p >{textData[currentIndex]}</p>
            </div>
            <div className="flex w-[20%] items-center justify-between">
                <FaArrowCircleLeft onClick={handlePrev} size={30} className='text-[#FF6600] cursor-pointer'/>
                <FaArrowCircleRight onClick={handleNext} size={30} className='text-[#FF6600] cursor-pointer'/>
            </div>
        </div>
    );
  };


const Hero = () => {

    const text = [
        'Engaging platform for professional growth, comprehensive networking, and focused career advancement.',
        'Mitigate disparities, seamless connections for students & employers, valuable tools for recruiters.',
        'User-friendly interfaces, efficient matchmaking, personalized guidance, skill development focus.',
      ];
    
// style={{backgroundImage: `url(${img1})`, backgroundSize:'contain', backgroundRepeat:"no-repeat"}}
  return (
    <div className='h-auto  pb-20 '>
        <Navbar />

        <div className='md:flex w-full h-full items-center justify-center mt-5 text-black px-10'>

            <div className='md:w-[55%] px-16 ' >
                
                <div className='flex items-center justify-start text-[10px] gap-3'>
                    <p className='bg-[#FF6600] py-1 px-3 rounded-full font-bold text-white'>Jobs</p>
                    <p className='bg-[#FF6600] py-1 px-3 rounded-full font-bold text-white'>Internships</p>
                    <p className='bg-[#FF6600] py-1 px-3 rounded-full font-bold text-white'>Skills</p>
                </div>

                <h1 className='md:text-[45px] text-5xl font-semibold py-3 '>Empowering Growth </h1> 
                <h1 className='md:text-[45px] text-5xl font-semibold pt-3 -ml-4'><span className='bg-[#FF6600] px-4 rounded-full text-white'>with Engaze</span></h1>

                <p className="text-sm py-8 pr-40 font-bold my-5">
                Engaze introduces groundbreaking compliance solutions, empowering businesses to seamlessly navigate intricate regulatory frameworks and unlock their full potential in tomorrow’s dynamic business environment. 
                </p>

                <div className='flex items-center gap-7 uppercase text-xs font-extrabold'>
                    <p className='flex items-center justify-start gap-1'><FaCheckCircle size={20} className='text-[#FF6600]'/>Engaze</p>
                    <p className='flex items-center justify-start gap-1'><FaCheckCircle size={20} className='text-[#FF6600]'/>VibeLynk</p>
                    <p className='flex items-center justify-start gap-1'><FaCheckCircle size={20} className='text-[#FF6600]'/>Interacto</p>
                </div>
                
                <hr className=' border border-[#F0F1EB] my-3 w-[80%]'/>

                <Carousel textData={text}/>
                
            </div>

            <div className='md:w-[45%] flex justify-center'>
                    
                <Spline scene="https://prod.spline.design/mdqYKI0OkRxmlXcn/scene.splinecode" className='
                h-full' style={{height:"75vh", width:"60%"}}/>

            </div>


        </div>


    </div>
  )
}

export default Hero
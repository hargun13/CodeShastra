import React from 'react'
import { AiFillInteraction } from "react-icons/ai";
import { IoIosTimer } from "react-icons/io";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import nhf from './no_hidden_fees.png'

const Features = () => {


    const bag2 = "https://assets.website-files.com/62cc07ca0720bd63152e1799/62cd16b4a5613c06cf9a0ff4_line-bg.svg";

    const data = [
        {
          logo: <AiFillInteraction size={40} />,
          heading: "Interactive Compliance Solutions",
          content:
            "Engaze transcends traditional networking, blending meaningful connections with growth opportunities. ",
        },
        {
          logo: <IoIosTimer size={40} />,
          heading: "Real-time Compliance Monitoring",
          content:
            "It's a platform where professional aspirations thrive, reshaping how we engage in the virtual social culture.",
        },
        {
          logo: nhf,
          heading: "Transparent Practices",
          content:
            "Engaze revolutionizes learning with Micro-Learning Bytes, transforming digital education into engaging, bite-sized sessions. ",
        },
        {
          logo: <AiOutlineSafetyCertificate size={40} />,
          heading: "Certifications and Verifications",
          content:
            "These curated Bytes offer a personalized learning experience, making knowledge accessible and enjoyable for everyone",
        },
      ];
    
  return (
    <div style={{backgroundImage: `url(${bag2})`, backgroundSize:'cover'}} className='h-auto flex flex-col items-center justify-center py-5'>
        
        <h1 className='text-5xl  font-bold text-center py-5'>We Offer Amazing Features</h1>
        <p className='md:text-xl text-lg italic font-semibold text-gray-500 text-center my-5 px-10'>Future of Networking & Micro-Learning</p>

        <div className='grid md:grid-cols-4 grid-cols-1 place-items-center items-center justify-center m-10 '>
            
            {data.map((data) =>(

            <div className='mx-5 p-6 bg-white rounded-2xl transition duration-700 hover:-translate-y-3 hover:bg-[#212121] hover:text-white group shadow-2xl'>

                {data.logo === nhf ? <img src={data.logo} alt='features' className='h-12'/> : <span>{data.logo}</span>}
                <h1 className='text-2xl font-bold my-5 hover:text-[#FF6600]'>{data.heading}</h1>
                <p className=' text-lg font-bold italic text-gray-300 transition duration-700 group-hover:text-white'>{data.content}</p>

            </div>

            ))}

        </div>


    </div>
  )
}

export default Features
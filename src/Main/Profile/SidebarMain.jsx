import React, { useState } from 'react'
import placeholder from './placeholder.jpg'
import { FaClipboard } from "react-icons/fa";


const CopyToClipboardButton = ({ text }) => {
    const [copied, setCopied] = useState(false);
    console.log(copied)
    const handleCopyClick = async () => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    };
  
    return (
      <div>
        <button onClick={handleCopyClick} className='text-xs'><FaClipboard size={20}/></button>
      </div>
    );
  };



const SidebarMain = () => {
    const textToCopy = "https://apple.com/cook"
  return (
    <div className='h-full w-full overflow-y-scroll scrollbar-hide flex flex-col items-center justify-start'>
        <div className='my-3 text-center'>
            <img src={placeholder} alt="profile" className='h-32 rounded-full' />
            <p className='text-xl font-bold mt-2'>Tim Cook</p>
            <p className='text-sm '>CEO of Apple</p>
        </div>

        <div className='w-full'>
            <div className='flex items-center justify-between mx-5 my-4 border-b border-gray-200 font-semibold'><p>Opportunities applied</p><span className='font-extrabold'>32</span></div>
            <div className='flex items-center justify-between mx-5 my-4 border-b border-gray-200 font-semibold'><p>Opportunities won</p><span className='font-extrabold'>26</span></div>
            <div className='flex items-center justify-between mx-5 my-4 border-b border-gray-200 font-semibold'><p>Current opportunities</p><span className='font-extrabold'>6</span></div>
        </div>

        <div className='w-[85%] my-4'>
            <button className='w-full font-extrabold text-gray-400 border rounded-md py-2 px-4'>View Public Profile</button>

            <div className='flex items-center justify-between my-5 w-full rounded-lg p-2 border border-gray-200'>
                <p className='text-sm'>{textToCopy}</p>
                <CopyToClipboardButton text={textToCopy} />
            </div>
        </div>

    </div>
  )
}

export default SidebarMain
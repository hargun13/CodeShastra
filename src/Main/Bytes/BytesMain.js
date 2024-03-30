import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaRegDotCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { Button } from '@mui/material';


const Card = ({banner, profile}) => {
    return(
        <div className='w-[310px]'>
            <Link to='/Bytes'>
                <img src={banner} alt="card image" className='h-[250px] w-[320px] mt-7 rounded-xl border border-gray-200 shadow-xl' />

                <div className='flex items-center justify-start my-3 gap-2'>
                    <div className='w-[90%] flex'>
                        <img src={profile} className='rounded-full h-14 w-14'/>
                        <div className='ml-2'>
                            <p className='text-sm'>DSA with Python</p>
                            <p className='text-xs font-bold'>by Prerak</p>
                            <div className='text-xs flex items-center gap-3'>
                                <p className='flex'><IoMdTime size={14} className='mt-[2px]'/> &nbsp; 30min</p>
                                <p className='flex'><FaRegDotCircle size={14} className='mt-[2px]'/> &nbsp; 96/100</p>
                            </div>  
                        </div>
                    </div>
                    <BsThreeDotsVertical />
                </div>
            </Link>
        </div>
    )
}

const LongCard = ({banner}) => {
    return(
        <div  className='w-full bg-white border-b border-gray-200 gap-3 px-4 pb-2 flex rounded-lg mr-4 mt-5 mb-4 justify-between    items-center'>
            <div className='flex items-center justify-start gap-2'>
                <img src={banner} alt="something" className='w-40 h-40 rounded-2xl m-2'/>
                <div className='h-full py-1 flex flex-col items-center justify-between w-[350px]'>
                    <div>
                        <div className='text-lg font-semibold'>Startup Tips</div>
                        <div className='text-xs'>A curated collection of quick, impactful videos designed to guide aspiring entrepreneurs through the essentials of launching and scaling a successful startup</div>
                    </div>
                    <div className='w-full mt-5'>
                        <div className='text-xs flex items-center justify-start gap-3'>
                            <p className='flex'><IoMdTime size={14} className='mt-[2px]'/> &nbsp; 30min</p>
                            <p className='flex'><FaRegDotCircle size={14} className='mt-[2px]'/> &nbsp; 80/100</p>
                            <p className='flex'><HiOutlineChartSquareBar size={14} className='mt-[2px]'/> &nbsp; 3.2k</p>
                        </div> 
                        <div className='flex items-center justify-start'>
                            |
                            <img src='https://s3-alpha-sig.figma.com/img/aa15/84ab/60a750874427fd7d225f297d13d8aa9a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXkxCVhKhabe8KFfpaw1yc7uKMuMqF95Qh-YO0GaZZPf8lzUX7Om58gYsYazZM6QQLtgk~1DhWFpt62hMbppLL59EKyXd~as1Ck31lx8DZcjkA4v0phRn0uGCrBK94yXblDRhTdgKacuDCMktILstv3C3kAeeSIO~141uk7VsmEhi21-rM2nYqBheeMQPUsizBzhXFoMBdrQwJGb0j1hmlJqgR4HA1id6RMZeKw0SVhzo~BeSMEZCN7wSOoglVTlg8MIgZjheOIHgakO0PL6JwrGuZu-eOQqfR48-twuV3-S9aQbbMikqEKVrq12HdPKXRLMrtyuDlgXdR3p0xM7WA__' className='h-5 w-5 rounded-full ml-2 mr-1'/> 
                            <p className='text-xs'> Prerak Gada</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap w-[280px]'>
                <p className='text-xs border border-orange-600 rounded-3xl px-2 m-1'>Funding</p>
                <p className='text-xs border border-orange-600 rounded-3xl px-2 m-1'>IPO's</p>
                <p className='text-xs border border-orange-600 rounded-3xl px-2 m-1'>Bootstrap</p>
                <p className='text-xs border border-orange-600 rounded-3xl px-2 m-1'>Strategies</p>
            </div>
            <div className='text-center h-40 flex items-start justify-start '>
                <BsThreeDotsVertical size={20} />
            </div>
        </div>
    )
}

const HotTopic = () => {
    return(
        <div className='bg-[#15181C] p-10 rounded-2xl text-white w-[40%] h-[550px]'>
            <p className='text-xl font-semibold'>What's Happening</p>

            <div className='mt-5 mb-5 flex items-center justify-around w-full'>
                <div className='w-[85%]'>   
                    <p className='text-xs text-[#c0c0c0]'>Blockchain Technology? How Does It Work?</p>
                    <p className='text-sm text-white'>Blockchain: a decentralized, distributed, and oftentimes public, digital ledger consisting ...</p>
                    <p className='text-xs text-[#c0c0c0]'>Trending with <span className='text-blue-500'>#Blockchain</span>, <span className='text-blue-500'>#Ethereum</span></p>
                </div>

                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwrF5ZYvUG2M3x3cdFyx1pxEWlLFXt31LUg&usqp=CAU' alt='random' className='h-16 w-16 rounded-2xl' />
            </div>

            <div className='mt-5 mb-5 flex items-center justify-around w-full'>
                <div className='w-[85%]'>   
                    <p className='text-xs text-[#c0c0c0]'>Blockchain Technology? How Does It Work?</p>
                    <p className='text-sm text-white'>Blockchain: a decentralized, distributed, and oftentimes public, digital ledger consisting ...</p>
                    <p className='text-xs text-[#c0c0c0]'>Trending with <span className='text-blue-500'>#Blockchain</span>, <span className='text-blue-500'>#Ethereum</span></p>
                </div>

                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwrF5ZYvUG2M3x3cdFyx1pxEWlLFXt31LUg&usqp=CAU' alt='random' className='h-16 w-16 rounded-2xl' />
            </div>

            <div className='mt-5 mb-5 flex items-center justify-around w-full'>
                <div className='w-[85%]'>   
                    <p className='text-xs text-[#c0c0c0]'>Blockchain Technology? How Does It Work?</p>
                    <p className='text-sm text-white'>Blockchain: a decentralized, distributed, and oftentimes public, digital ledger consisting ...</p>
                    <p className='text-xs text-[#c0c0c0]'>Trending with <span className='text-blue-500'>#Blockchain</span>, <span className='text-blue-500'>#Ethereum</span></p>
                </div>

                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwrF5ZYvUG2M3x3cdFyx1pxEWlLFXt31LUg&usqp=CAU' alt='random' className='h-16 w-16 rounded-2xl' />
            </div>


            <Button>Show More... </Button>
        </div>
    )
}


const BytesMain = () => {
    const items = [
        {   id: 1, 
            banner: 'https://s3-alpha-sig.figma.com/img/deb4/c413/d62c9dd04bedc6fa7af29d5712d161d4?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K8J98FmfW-1m3o1PAgWj6sjHrMX1A8qRhF-q3NCetoF3sUAQBtLfBF00ZwULVc7kaIPvxNePlc7NJ6KAQsmTouvzRREPRIKwi-d4ljmxOkO~qRKDI8-IuI0zf9lVm9bm1G4MwrZa9gYbIWhzXRLceIqj2Dq3v2HgUbk9o8gcHd60~WCQlBcSp3TsxpHiE2l7B17hcTAwjxY~Zs5EBi20o-P4PYL8PjgbFGzxClgY9GyYhprgi-6i0-6BDMfHhDQPe3jUHN8QkTeORe1EM9s1fvcmgCcd9wnNyn630DvWOUhvNKR5-NDOluoulbqty4Pzi5P8VjRKAOwHKP5RgZUpHg__', 
            profile: 'https://s3-alpha-sig.figma.com/img/aa15/84ab/60a750874427fd7d225f297d13d8aa9a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXkxCVhKhabe8KFfpaw1yc7uKMuMqF95Qh-YO0GaZZPf8lzUX7Om58gYsYazZM6QQLtgk~1DhWFpt62hMbppLL59EKyXd~as1Ck31lx8DZcjkA4v0phRn0uGCrBK94yXblDRhTdgKacuDCMktILstv3C3kAeeSIO~141uk7VsmEhi21-rM2nYqBheeMQPUsizBzhXFoMBdrQwJGb0j1hmlJqgR4HA1id6RMZeKw0SVhzo~BeSMEZCN7wSOoglVTlg8MIgZjheOIHgakO0PL6JwrGuZu-eOQqfR48-twuV3-S9aQbbMikqEKVrq12HdPKXRLMrtyuDlgXdR3p0xM7WA__' 
        },
        {   id: 2, 
            banner: 'https://s3-alpha-sig.figma.com/img/0319/e74e/9c31d9952ee9003f4ddf578e34eeda71?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nOjDZGJC5jX9dvm-JX~7vibcIYEyYXT7AKEihC5YyNoYmSyIE8lOVODuDBgDSAY6bA4hiyTB6j9iLvcJLIXCyPZfgWl3rVG4KQM4dZlAOss6-7Dm64m4HbRoJKulIuGrJRS6OwMJiQ9fPYYl9BvDyRoM~5r0L-DcU5emW6xmFFi-t6j8GjwuRNo4QxwdjypNGXoBaZhVWh1MEag0-og4bdaihxC9--n52n~SHcGZo23X39ThW41VgXs67Lbd2~FtTwZIDc974lvouM153ilJ8gXZKla~4DXigNFxOWYXWSI~UeWFM-KxiBUP7zbk06B9b9~N6dCjKIAFjLtGyJyw5g__', 
            profile: 'https://s3-alpha-sig.figma.com/img/3de1/7eeb/badca0eabb143438fe29406e6d3ec8a1?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fXU6eXFaK5XqbiohnwmQh1sR09lEonzkRBAO1do-7s5Kqt-Q65v~MA-s4D3ykuV0NCBQSF9K92u77Hag-fg3fmGiV6DJ51H~sG1GhoL7F50mgCtjPIx9QISU7UyIypLdj2DIGXF~vPTYRtNjFcl2oo35WC4qt5adU7bKXkB1dOsWsOvAehwvx4YZz7Z2TatYlhxv453I9in0ueIIN1h~~75g4HrfYje5UiqWw1NI2ftjc5fl~qxqbdK6OsBmlxyOdeaMm~N7yxoP4Rkg0DOjgE~835C-1BPw6TFobRT~nZMLzOMNsC0yW-GBOEuroUtfpLL8cwWPLTqUMCYa-wcQwg__' 
        },
        {   id: 3, 
            banner: 'https://s3-alpha-sig.figma.com/img/ce8a/94cb/f9c72d2aefbfef6e7a2229af23914714?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n1moaYkWM806e0Nv7s4Ym70ePBS1Q5beQ-h-Q5-hqJbioYLOMxgKZzUq8Jbqn9Uewkli1uR-oEiNT4FonhYSvMUhojjwhuwURQgRWDMq~ScbKGLlZJZLXndkV5bGnpnMfiiz3cn0hN72osiKVtGh13qqg~du83VrUdFQQfnzFtftwruxxRLvehPPqMYUIfDmAoYjuMiarwttguPLmKdRRoFUM2hgS~osc872PTJ-8rxlskyhHIuTsotGXmHCYS31XL8dH2YRYma1P64qN4KO8eZsgqDz~-RyOM422XYb-q3dWpHGJDQ16bdl7kf0940D-B2OSSRjP5c~IbTq9nLc7Q__', 
            profile: 'https://s3-alpha-sig.figma.com/img/aa15/84ab/60a750874427fd7d225f297d13d8aa9a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXkxCVhKhabe8KFfpaw1yc7uKMuMqF95Qh-YO0GaZZPf8lzUX7Om58gYsYazZM6QQLtgk~1DhWFpt62hMbppLL59EKyXd~as1Ck31lx8DZcjkA4v0phRn0uGCrBK94yXblDRhTdgKacuDCMktILstv3C3kAeeSIO~141uk7VsmEhi21-rM2nYqBheeMQPUsizBzhXFoMBdrQwJGb0j1hmlJqgR4HA1id6RMZeKw0SVhzo~BeSMEZCN7wSOoglVTlg8MIgZjheOIHgakO0PL6JwrGuZu-eOQqfR48-twuV3-S9aQbbMikqEKVrq12HdPKXRLMrtyuDlgXdR3p0xM7WA__' 
        },
        {   id: 4, 
            banner: 'https://s3-alpha-sig.figma.com/img/3de1/7eeb/badca0eabb143438fe29406e6d3ec8a1?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fXU6eXFaK5XqbiohnwmQh1sR09lEonzkRBAO1do-7s5Kqt-Q65v~MA-s4D3ykuV0NCBQSF9K92u77Hag-fg3fmGiV6DJ51H~sG1GhoL7F50mgCtjPIx9QISU7UyIypLdj2DIGXF~vPTYRtNjFcl2oo35WC4qt5adU7bKXkB1dOsWsOvAehwvx4YZz7Z2TatYlhxv453I9in0ueIIN1h~~75g4HrfYje5UiqWw1NI2ftjc5fl~qxqbdK6OsBmlxyOdeaMm~N7yxoP4Rkg0DOjgE~835C-1BPw6TFobRT~nZMLzOMNsC0yW-GBOEuroUtfpLL8cwWPLTqUMCYa-wcQwg__', 
            profile: 'https://s3-alpha-sig.figma.com/img/aa15/84ab/60a750874427fd7d225f297d13d8aa9a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXkxCVhKhabe8KFfpaw1yc7uKMuMqF95Qh-YO0GaZZPf8lzUX7Om58gYsYazZM6QQLtgk~1DhWFpt62hMbppLL59EKyXd~as1Ck31lx8DZcjkA4v0phRn0uGCrBK94yXblDRhTdgKacuDCMktILstv3C3kAeeSIO~141uk7VsmEhi21-rM2nYqBheeMQPUsizBzhXFoMBdrQwJGb0j1hmlJqgR4HA1id6RMZeKw0SVhzo~BeSMEZCN7wSOoglVTlg8MIgZjheOIHgakO0PL6JwrGuZu-eOQqfR48-twuV3-S9aQbbMikqEKVrq12HdPKXRLMrtyuDlgXdR3p0xM7WA__' 
        },
      ];

    const LongCardItems =[
        {   id: 1, 
            banner: 'https://s3-alpha-sig.figma.com/img/b40e/2e05/34c529c34b11d294d56b53598667f348?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pf8CeUo9I6S-dZ2KQvbe8ZaaQaCzoGyfhFZvr12qIR2HR~dymcV7piyuKGDXIVLApCAUCaekQQLkxWXjG12sClO-3Lsjc5SBVkstNDCZSEAqHd8p3MOWFNjlr51pyAEggiLx9NUP94tXSWdX0LryU2QiKut9MoRejWkx50mMt9ZkeC5f8~Amsr~u5eNWaxVbYPOusvHaY4GfR3Eq7nV26eM4uR4X6w7RIBfQquHZm6BdZaY9ZJUxK3CS1Qk-MJiWqWhbqgziLMPi3RRKgPQqptRg~CNo0zdOYCowSaV4P71U6oTmpdeRtYVOBW6vJRAaYOye3ZNSb94aMvrJT52Grw__'
        },
        {   id: 2, 
            banner: 'https://s3-alpha-sig.figma.com/img/0319/e74e/9c31d9952ee9003f4ddf578e34eeda71?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nOjDZGJC5jX9dvm-JX~7vibcIYEyYXT7AKEihC5YyNoYmSyIE8lOVODuDBgDSAY6bA4hiyTB6j9iLvcJLIXCyPZfgWl3rVG4KQM4dZlAOss6-7Dm64m4HbRoJKulIuGrJRS6OwMJiQ9fPYYl9BvDyRoM~5r0L-DcU5emW6xmFFi-t6j8GjwuRNo4QxwdjypNGXoBaZhVWh1MEag0-og4bdaihxC9--n52n~SHcGZo23X39ThW41VgXs67Lbd2~FtTwZIDc974lvouM153ilJ8gXZKla~4DXigNFxOWYXWSI~UeWFM-KxiBUP7zbk06B9b9~N6dCjKIAFjLtGyJyw5g__', 

        },
        {   id: 3, 
            banner: 'https://s3-alpha-sig.figma.com/img/ce8a/94cb/f9c72d2aefbfef6e7a2229af23914714?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n1moaYkWM806e0Nv7s4Ym70ePBS1Q5beQ-h-Q5-hqJbioYLOMxgKZzUq8Jbqn9Uewkli1uR-oEiNT4FonhYSvMUhojjwhuwURQgRWDMq~ScbKGLlZJZLXndkV5bGnpnMfiiz3cn0hN72osiKVtGh13qqg~du83VrUdFQQfnzFtftwruxxRLvehPPqMYUIfDmAoYjuMiarwttguPLmKdRRoFUM2hgS~osc872PTJ-8rxlskyhHIuTsotGXmHCYS31XL8dH2YRYma1P64qN4KO8eZsgqDz~-RyOM422XYb-q3dWpHGJDQ16bdl7kf0940D-B2OSSRjP5c~IbTq9nLc7Q__', 

        },
        {   id: 4, 
            banner: 'https://s3-alpha-sig.figma.com/img/3de1/7eeb/badca0eabb143438fe29406e6d3ec8a1?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fXU6eXFaK5XqbiohnwmQh1sR09lEonzkRBAO1do-7s5Kqt-Q65v~MA-s4D3ykuV0NCBQSF9K92u77Hag-fg3fmGiV6DJ51H~sG1GhoL7F50mgCtjPIx9QISU7UyIypLdj2DIGXF~vPTYRtNjFcl2oo35WC4qt5adU7bKXkB1dOsWsOvAehwvx4YZz7Z2TatYlhxv453I9in0ueIIN1h~~75g4HrfYje5UiqWw1NI2ftjc5fl~qxqbdK6OsBmlxyOdeaMm~N7yxoP4Rkg0DOjgE~835C-1BPw6TFobRT~nZMLzOMNsC0yW-GBOEuroUtfpLL8cwWPLTqUMCYa-wcQwg__', 

        },
    ]
  return (
    <div className='m-8'>
        <p className='flex items-center justify-start text-3xl'>My Learning <MdOutlineKeyboardArrowRight className='ml-6' /></p>
        <div className='flex items-center justify-around gap-2'>
            {/* Map over the items object to render each item */}
            {items.map((item) => (
                <div key={item.id}>
                    <Card banner={item.banner} profile={item.profile}/>
                </div>
            ))}
        </div>

        <p className='flex items-center justify-start text-3xl mt-8'>Recommendations for you <MdOutlineKeyboardArrowRight className='ml-6' /></p>
        <div className='w-full flex items-center justify-between'>
            <div className='flex flex-col w-full overflow-y-scroll scrollbar-hide h-[550px]'>
                {LongCardItems.map((item) => (
                    <div className='w-[90%] h-auto' key={item.id}>
                        <LongCard banner={item.banner}/>
                    </div>
                ))}
            </div>

            <HotTopic />
        </div>
        
    </div>
  )
}

export default BytesMain
import { WithSeeMore } from 'react-insta-stories';
import { MdWorkOutline } from "react-icons/md";
import { Player } from 'react-simple-player';
import CustomAudioPlayer from '../CustomAudioPlayer'
import { FaGraduationCap } from "react-icons/fa";
import video from '../intro-video-1.mp3'

const onDragStart = (ev, story) => {
    ev.dataTransfer.setData("text/plain", JSON.stringify(story));
  };

const customCollapsedComponent1 = ({ toggleMore, action }) =>
	<div className='  h-[30vh] pb-16 pl-8 text-white'  draggable onDragStart={(e) => onDragStart(e, stories)}>
		<h1 className='text-3xl font-extrabold'>Prerak Gada</h1>
        <p className='flex items-center my-2 text-sm'> - &nbsp; <MdWorkOutline size={15}/> &nbsp; UI/UX Designer at Engaze</p>
        <p className='w-[80%] text-sm my-2'>UI UX 🎨 | Design Thinking 💭 | Graphic Designing 👩‍💻 | Freelancing 🌐</p>
        {/* <CustomAudioPlayer src='https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3'/> */}
        <CustomAudioPlayer src={video}/>
        

    </div>

const CustomStoryContent1 = ({ story, action }) => {
	return <WithSeeMore
		story={story}
		action={action}
		customCollapsed={customCollapsedComponent1}
	>
		<div draggable onDragStart={(e) => onDragStart(e, stories)}>
			<h1>Hello!</h1>
			<p>This story would have a 'See More' link at the bottom and will open a URL in a new tab.</p>
		</div>
	</WithSeeMore>
}

const customCollapsedComponent2 = ({ toggleMore, action }) =>
    <div className=' bg-black opacity-80 h-[50vh] pb-16 pl-8 pt-16 text-white'  draggable onDragStart={(e) => onDragStart(e, stories)}>
        <h1 className='text-3xl font-extrabold'>Prerak Gada</h1>
        <p className='flex items-center my-2 text-sm'> - &nbsp; <MdWorkOutline size={15}/> &nbsp; UI/UX Designer at Engaze</p>
        <p className='w-[80%] text-sm my-2'>Mumbai, India</p>
        <p className='font-extrabold mt-5'>About Me</p>
        <p>Can we just stop talking and hop on Figma? I am ready for quick UX brainstorming, am already fed up with this LinkedIn!</p>
    </div>

const CustomStoryContent2 = ({ story, action }) => {
	return <WithSeeMore
		story={story}
		action={action}
		customCollapsed={customCollapsedComponent2}
	>
		<div draggable onDragStart={(e) => onDragStart(e, stories)}>
			<h1>Hello!</h1>
			<p>This story would have a 'See More' link at the bottom and will open a URL in a new tab.</p>
		</div>
	</WithSeeMore>
}

const customCollapsedComponent3 = ({ toggleMore, action }) =>
    <div className=' bg-black opacity-80 h-[70vh] pb-16 pl-8 pt-5 text-white'  draggable onDragStart={(e) => onDragStart(e, stories)}>
        <h1 className='text-3xl font-extrabold'>Prerak Gada</h1>
        <p className='flex items-center my-2 text-sm'> - &nbsp; <MdWorkOutline size={15}/> &nbsp; UI/UX Designer at Engaze</p>

        <div className='mt-10'>
            <h1 className='text-lg font-extrabold my-4'>Top Skills</h1>
            <div className='flex flex-wrap items-center gap-2'>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>React.JS</p>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>AI/ML</p>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>Python</p>
            </div>
            <h1 className='text-lg font-extrabold my-4'>Technical Skills</h1>
            <div className='flex flex-wrap items-center gap-2'>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>React.JS</p>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>AI/ML</p>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>Python</p>
            </div>
            <h1 className='text-lg font-extrabold my-4'>Soft Skills</h1>
            <div className='flex flex-wrap items-center gap-2'>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>React.JS</p>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>AI/ML</p>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>Python</p>
            </div>
            <h1 className='text-lg font-extrabold my-4'>Other Skills</h1>
            <div className='flex flex-wrap items-center gap-2'>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>React.JS</p>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>AI/ML</p>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>Python</p>
            </div>
        </div>

    </div>

const CustomStoryContent3 = ({ story, action }) => {
	return <WithSeeMore
		story={story}
		action={action}
		customCollapsed={customCollapsedComponent3}
	>
		<div draggable onDragStart={(e) => onDragStart(e, stories)}>
			<h1>Hello!</h1>
			<p>This story would have a 'See More' link at the bottom and will open a URL in a new tab.</p>
		</div>
	</WithSeeMore>
}



const customCollapsedComponent4 = ({ toggleMore, action }) =>
    <div className=' bg-black opacity-80 h-[70vh] pb-16 pl-8 pt-5 text-white'  draggable onDragStart={(e) => onDragStart(e, stories)}>
        <h1 className='text-3xl font-extrabold'>Prerak Gada</h1>
        <p className='flex items-center my-2 text-sm'> - &nbsp; <MdWorkOutline size={15}/> &nbsp; UI/UX Designer at Engaze</p>

        <div className='mt-8'>
            <h1 className='text-lg font-extrabold my-4'>Experience</h1>
            <div className='flex flex-col items-center justify-start w-full gap-2'>
                <p className='w-full text-xl px-2 flex gap-2'><FaGraduationCap size={30} />Hungry Brain</p>
                <p className='ml-[75px] w-full text-[10px] px-2'>Professional Designer</p>
                <p className='ml-[75px] w-full text-[8px] px-2'>October 2022 - Present</p>
                <p className='ml-[75px] w-full text-[8px] px-2'>Mumbai</p>
            </div>
            <div className='flex flex-col items-center justify-start w-full gap-2 mt-3'>
                <p className='w-full text-xl px-2 flex gap-2'><FaGraduationCap size={30} />Engaze Technosolutions</p>
                <p className='ml-[75px] w-full text-[10px] px-2'>Professional Designer</p>
                <p className='ml-[75px] w-full text-[8px] px-2'>October 2022 - Present</p>
                <p className='ml-[75px] w-full text-[8px] px-2'>Mumbai</p>
            </div>
            <div className='flex flex-col items-center justify-start w-full gap-2 mt-3'>
                <p className='w-full text-xl px-2 flex gap-2'><FaGraduationCap size={30} />Cisco</p>
                <p className='ml-[75px] w-full text-[10px] px-2'>Professional Designer</p>
                <p className='ml-[75px] w-full text-[8px] px-2'>October 2022 - Present</p>
                <p className='ml-[75px] w-full text-[8px] px-2'>Mumbai</p>
            </div>

        </div>

    </div>  

const CustomStoryContent4 = ({ story, action }) => {
	return <WithSeeMore
		story={story}
		action={action}
		customCollapsed={customCollapsedComponent4}
	>
		<div draggable onDragStart={(e) => onDragStart(e, stories)}>
			<h1>Hello!</h1>
			<p>This story would have a 'See More' link at the bottom and will open a URL in a new tab.</p>
		</div>
	</WithSeeMore>
}


const customCollapsedComponent5 = ({ toggleMore, action }) =>
    <div className=' bg-black opacity-80 h-[40vh] pb-16 pl-8 pt-5 text-white'  draggable onDragStart={(e) => onDragStart(e, stories)}>
        <h1 className='text-3xl font-extrabold'>Prerak Gada</h1>
        <p className='flex items-center my-2 text-sm'> - &nbsp; <MdWorkOutline size={15}/> &nbsp; UI/UX Designer at Engaze</p>

        <div className='mt-8'>
            <h1 className='text-lg font-extrabold my-4'>Experience</h1>
            <div className='flex flex-col items-center justify-start w-full gap-2'>
                <p className='w-full text-lg px-2 flex gap-2'><FaGraduationCap size={30} />Atharva College Of Engineering</p>
                <p className='ml-[75px] w-full text-[10px] px-2'>B.E. in Electronics and Computer Science</p>
                <p className='ml-[75px] w-full text-[8px] px-2'>October 2022 - Present</p>
                <p className='ml-[75px] w-full text-[8px] px-2'>GDSC App Lead and IEEE Tech Head</p>
            </div>

        </div>

    </div>  

const CustomStoryContent5 = ({ story, action }) => {
	return <WithSeeMore
		story={story}
		action={action}
		customCollapsed={customCollapsedComponent5}
	>
		<div draggable onDragStart={(e) => onDragStart(e, stories)}>
			<h1>Hello!</h1>
			<p>This story would have a 'See More' link at the bottom and will open a URL in a new tab.</p>
		</div>
	</WithSeeMore>
}


const customCollapsedComponent6 = ({ toggleMore, action }) =>
    <div className=' bg-black opacity-80 h-[40vh] pb-16 pl-8 pt-5 text-white'  draggable onDragStart={(e) => onDragStart(e, stories)}>
        <h1 className='text-3xl font-extrabold'>Prerak Gada</h1>
        <p className='flex items-center my-2 text-sm'> - &nbsp; <MdWorkOutline size={15}/> &nbsp; UI/UX Designer at Engaze</p>

        <div className='mt-10'>
            <h1 className='text-lg font-extrabold my-4'>Hobbies</h1>
            <div className='flex flex-wrap items-center gap-2'>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>React.JS</p>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>AI/ML</p>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>Python</p>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>React.JS</p>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>AI/ML</p>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>Python</p>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>React.JS</p>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>AI/ML</p>
                <p className='w-[70px] border-2 border-white rounded-md text-xs px-2 py-[2px] text-center'>Python</p>
            </div>
        </div>

    </div>

const CustomStoryContent6 = ({ story, action }) => {
	return <WithSeeMore
		story={story}
		action={action}
		customCollapsed={customCollapsedComponent6}
	>
		<div draggable onDragStart={(e) => onDragStart(e, stories)}>
			<h1>Hello!</h1>
			<p>This story would have a 'See More' link at the bottom and will open a URL in a new tab.</p>
		</div>
	</WithSeeMore>
}



const stories = [
    {
        url: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        header: {
			heading: 'Prerak Gada',
			profileImage: 'https://picsum.photos/100/100',
		},
        seeMoreCollapsed: customCollapsedComponent1,
        seeMore: CustomStoryContent1, // when expanded
        video: video
      },
      {
        url: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        header: {
			heading: 'Prerak Gada',
			profileImage: 'https://picsum.photos/100/100',
		},
        seeMoreCollapsed: customCollapsedComponent2,
        seeMore: CustomStoryContent2, // when expanded
      },
      {
        url: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        header: {
			heading: 'Prerak Gada',
			profileImage: 'https://picsum.photos/100/100',
		},
        seeMoreCollapsed: customCollapsedComponent3,
        seeMore: CustomStoryContent3, // when expanded
      },
      {
        url: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        header: {
			heading: 'Prerak Gada',
			profileImage: 'https://picsum.photos/100/100',
		},
        seeMoreCollapsed: customCollapsedComponent4,
        seeMore: CustomStoryContent4, // when expanded
      },
      {
        url: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        header: {
			heading: 'Prerak Gada',
			profileImage: 'https://picsum.photos/100/100',
		},
        seeMoreCollapsed: customCollapsedComponent5,
        seeMore: CustomStoryContent5, // when expanded
      },
      {
        url: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        header: {
			heading: 'Prerak Gada',
			profileImage: 'https://picsum.photos/100/100',
		},
        seeMoreCollapsed: customCollapsedComponent6,
        seeMore: CustomStoryContent6, // when expanded
      },
];

export default stories


//cover, about, skills, Experience, education, hobbies

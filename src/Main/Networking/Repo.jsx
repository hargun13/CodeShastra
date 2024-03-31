import React, { useState, useEffect } from 'react';
import { FaFolder } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Repo = () => {
  const [droppedStories, setDroppedStories] = useState([]);
  const [hoveredFolderIndex, setHoveredFolderIndex] = useState(null);

  const onDrop = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/plain");
    const story = JSON.parse(data);
    console.log('Dropped Story:', story);
    setDroppedStories([...droppedStories, story]); // Update state with the dropped story data
    toast.success('File Successfully Added', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
    });
  };

  useEffect(() => {
    console.log('Updated Dropped Stories:', droppedStories);
  }, [droppedStories]); // Log updated stories whenever droppedStories changes

  const onDragOver = (ev) => {
    ev.preventDefault();
    // Get the index of the folder being hovered over
    const index = Number(ev.target.dataset.index);
    // Update the hoveredFolderIndex state
    setHoveredFolderIndex(index);
  };

  const onDragLeave = () => {
    // Reset the hoveredFolderIndex state when dragging leaves the folder area
    setHoveredFolderIndex(null);
  };

  const foldernames = [
    {
        name: "Shortlisted Applicants"
    },
    {
        name: "Selected Applicants"
    },
    {
        name: "Waitlisted Applicants"
    },
    {
        name: "SDE Hiring 2021"
    },
    {
        name: "SDE Hiring 2022"
    },
    {
        name: "SDE Hiring 2023"
    },
    {
        name: "SDE Hiring 2020"
    },
    {
        name: "SDE Hiring 2021"
    },
  ];

  return (
    <div className='w-[35%] h-[85vh] rounded-xl bg-white shadow-2xl p-5' onDrop={onDrop} onDragOver={onDragOver}>
        <h1 className='text-2xl font-bold mb-5'>Work</h1>
        <div className='flex flex-wrap items-center '>
            {foldernames.map((folder, index) => (
            <div
                className={`flex flex-col items-center justify-center text-center m-3 ${
                    hoveredFolderIndex === index ? 'bg-blue-100' : ''
                }`}
                key={index}
                data-index={index} // Add data-index attribute to identify folder index
                onMouseEnter={() => setHoveredFolderIndex(index)} // Update hoveredFolderIndex on mouse enter
                onMouseLeave={onDragLeave} // Reset hoveredFolderIndex on mouse leave
            >
                <FaFolder  size={40} style={{color:"#FEEAA3"}}/>
                <p className='text-sm w-20'>{folder.name}</p>
            </div>
            ))}
        </div>
        <ToastContainer />
    </div>
  );
};

export default Repo;

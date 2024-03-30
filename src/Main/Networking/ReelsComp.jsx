import React, { useEffect, useState, useRef } from 'react';
import './ReelsComp.css';
import VideoCard from './components/VideoCard';
import BottomNavbar from './components/BottomNavbar';
import stories1 from "./StoryProfiles/stories"
import stories2 from './StoryProfiles/stories2'
import stories3 from './StoryProfiles/stories3'
import stories4 from './StoryProfiles/stories4'

// This array holds information about different videos
const videoUrls = [
  {
    stories: stories1,
  },
  {
    stories: stories2,
  },
  {
    stories: stories3,
  },
  {
    stories: stories4,
  },
];

function ReelsComp() {
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    setVideos(videoUrls);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8, // Adjust this value to change the scroll trigger point
    };

    // This function handles the intersection of videos
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const videoElement = entry.target;
          videoElement.play();
        } else {
          const videoElement = entry.target;
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // We observe each video reference to trigger play/pause
    videoRefs.current.forEach((videoRef) => {
      observer.observe(videoRef);
    });

    // We disconnect the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [videos]);

  // This function handles the reference of each video
  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };

  return (
    <div className="app">
      <div className="container">
        {/* Here we map over the videos array and create VideoCard components */}
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            stories = {video.stories}
            likes={video.likes}
            saves={video.saves}
            comments={video.comments}
            shares={video.shares}
            url={video.url}
            profilePic={video.profilePic}
            setVideoRef={handleVideoRef(index)}
            autoplay={index === 0}
          />
        ))}
        {/* <BottomNavbar className="bottom-navbar z-40" /> */}
      </div>
    </div>
  );
  
}

export default ReelsComp;

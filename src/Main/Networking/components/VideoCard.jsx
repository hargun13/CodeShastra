import React from 'react';
import './VideoCard.css';
import Stories from 'react-insta-stories';

const VideoCard = (props) => {
  const { stories } = props;

  const onDragStart = (ev, story) => {
    ev.dataTransfer.setData("text/plain", JSON.stringify(story));
  };


  return (
    <div className="video" draggable 
    onDragStart={(e) => onDragStart(e, stories)}>

      <Stories
        stories={stories}
        defaultInterval={10000000}
        width={375}
        height={600}
        
		  />

    </div>
  );
};

export default VideoCard;

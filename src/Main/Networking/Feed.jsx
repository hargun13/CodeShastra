import React from 'react'
import ReelsComp from './ReelsComp';


const Feed = () => {
    const reelsData = [
        { image: 'https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { image: 'https://images.pexels.com/photos/4587991/pexels-photo-4587991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { image: 'https://images.pexels.com/photos/4587979/pexels-photo-4587979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1path_to_reel3_image' },
        // Add more reels as needed
      ];
  return (
    <div>
        <ReelsComp reelsData={reelsData} />
    </div>
  )
}

export default Feed
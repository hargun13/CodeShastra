import React from 'react'
import Feed from './Feed'
import Repo from './Repo'
import CandidateNotes from './CandidateNotes'

const Networking = () => {
  return (
    <div className='bg-[#d4d4d4] px-5 scrollbar-hide flex items-center justify-between w-full'>
        <CandidateNotes />
        <Feed />
        <Repo />
    </div>
  )
}

export default Networking
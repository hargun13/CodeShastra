import React, { useState } from 'react';
// Import all tab components
import PersonalDetails from './PersonalDetails';
import AdditionalInfo from './AdditionalInfo';
import Documets from './Documents'
import SidebarMain from './SidebarMain';
import { UserAuth } from '../../FirebaseAuthContext/AuthContext';


const UserProfile = () => {

  const [activeTab, setActiveTab] = useState('Personal');
  
  const { user } = UserAuth();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const tabContents = {
    Personal: <PersonalDetails />,
    Documents: <Documets />,
    Additional: <AdditionalInfo/>
  };

  return (
    <div className='w-full ' style={{height:"84vh"}}>
      <div className='text-xl px-10 pt-3 flex items-center justify-between'>
        <p className='font-semibold tracking-widest text-2xl'>Profile Page</p>
        <p>{user && user.email}</p>  
      </div>

      
      <div className='flex items-center justify-around w-full h-full'>
        <div className='w-[22%] h-[95%] rounded-xl shadow-2xl overflow-y-scroll scrollbar-hide mx-4' >
          <SidebarMain />
        </div>

        <div className='w-[78%] border border-gray-200 shadow-2xl rounded-xl mx-4 overflow-y-scroll scrollbar-hide ' style={{height:"79vh"}}>
          {/* Tabs for displaying user information */}
          <div className='mb-10 mt-5 px-10'>
            <ul className='flex items-center justify-around text-lg border-b'>
              {Object.keys(tabContents).map((tabName) => (
                <li
                  key={tabName}
                  onClick={() => handleTabClick(tabName)}
                  className={`py-2 cursor-pointer ${
                    activeTab === tabName ? 'border-b border-black' : 'border-black hover:border-b'
                  }`}
                >
                  {tabName}
                </li>
              ))}
            </ul>
          </div>

          {/* Display the selected tab content */}
          {tabContents[activeTab]}
        </div>
      </div>

    </div>
  );
}

export default UserProfile;
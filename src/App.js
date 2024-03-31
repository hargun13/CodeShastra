import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import { AuthContextProvider } from './FirebaseAuthContext/AuthContext';

import Landing from './Landing/Landing/Landing';
import Home from './Blog/Home';
import Community from './Community/Community'
import Login from './Login_Signup/Login';
import Signup from './Login_Signup/Signup';

import Sidebar from './components/Sidebar'
import MainDash from './Main/MainDash/Home';
import UserProfile from './Main/Profile/UserProfile'

import Networking from './Main/Networking/Networking';
import GovScehems from './Main/GovSchemes/GovScehems';
import BytesMain from './Main/Bytes/BytesMain'
import Bytes from './Main/Bytes/Bytes'
import Analytics from './Main/Analytics/Analytics'

function App() {

  const [login, setLogin] = useState(false);
  useEffect(()=>{}, [login]) 

  return (
    <div className="h-full w-full">
      <AuthContextProvider>
        {login && <Sidebar setLogin={setLogin} />}
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/Blog' element={<Home/>} />
          <Route path='/Community' element={<Community/>} />
          <Route path='/Login' element={<Login setLogin={setLogin} />} />
          <Route path='/SignUp' element={<Signup setLogin={setLogin} />} />
          <Route path='/Dashboard' element={<MainDash/>} />
          <Route path='/Profile' element={<UserProfile/>} />
          <Route path='/Networking' element={<Networking/>} />
          <Route path='/GovSchemes' element={<GovScehems/>} />
          <Route path='/BytesMain' element={<BytesMain/>} />
          <Route path='/Bytes' element={<Bytes/>} />
          <Route path='/Analytics' element={<Analytics/>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

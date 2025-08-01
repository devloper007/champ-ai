import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu, X } from 'lucide-react';
import Sidebar from '../component/Sidebar';
import { useUser, SignIn } from '@clerk/clerk-react';

const Layout = () => {
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(false);
  const {user} = useUser();

  return  user ? (
    <div className='flex flex-col items-start justify-start h-screen'>
       <nav className='w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200'>
        <img src={assets.logo} className='w-28 sm:w-32 cursor-pointer' alt="" onClick={() => navigate('/')} />
        {
          sideBar ? <X onClick={() => setSideBar(!sideBar)} className='w-6 h-6 text-gray-600 sm:hidden' />
          : <Menu onClick={() => setSideBar(!sideBar)} className='w-6 h-6 text-gray-600 sm:hidden' />
        } 
       </nav>
        <div className='flex-1 w-full flex h-[calc(100hvh-64px)]'>
          <Sidebar sideBar={sideBar} setSideBar={setSideBar}/>
          <div className='flex-1 bg-[#F4F7FB]'>
            <Outlet />
          </div>
        </div>
    </div>
  ) : (
    <div className='flex items-center justify-center h-screen'>
      <SignIn />
    </div>
  )
}

export default Layout
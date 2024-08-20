import React from 'react'
import Banner from './Banner';
import Description from './Description';
import Footer from './Footer';
import Header from './Header';
import ProfileIcon from './ProfileIcon';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>  <div className='flex flex-col items-center p-4 sm:p-7'>
    <div className="bg-red-400 shadow-xl rounded-xl text-center w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 ">
    <Banner/>
    <Header/>
    <div className='flex flex-col sm:flex-row justify-around m-5'>
    <ProfileIcon/>
    <div className='pl-0 sm:pl-10 pt-4 sm:pt-0'><Description/></div>
    
   
    </div>
    <Footer/>
    </div>
    </div></div>
  )
}

export default Layout
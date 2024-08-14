import React from 'react'
import Banner from './Banner';
import Description from './Description';
import Footer from './Footer';
import Header from './Header';
import ProfileIcon from './ProfileIcon';
const Layout = () => {
  return (
    <div>  <div className='flex items-center p-7'>
    <div className="bg-red-400  shadow-xl rounded-xl text-center items-center ">
    <Banner/>
    <Header/>
    <div className='flex justify-around m-5 mr-52 ml-52'>
    <ProfileIcon/>
    <div className='pl-10'><Description/></div>
    
   
    </div>
    <Footer/>
    </div>
    </div></div>
  )
}

export default Layout
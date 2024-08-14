import React from 'react'
import ProfilePic from '../assests/ProfilePic.jpg'

const ProfileIcon = () => {
  return (
   
      <>
      <img src={ProfilePic} className='rounded-full size-60 shadow-md' alt='profile-pic'/>
      </>
  )
}

export default ProfileIcon
import React from 'react'

const Footer = () => {
    const currentYear=new Date().getFullYear()
  return (
    <div className='text-white pb-1'>
        <h6 className=' font-bold text-lg '>Thank you for visiting!!</h6> 
        <p className='text-sm'>© {currentYear} Bindu patil All Rights Reserved.</p></div>
  )
}

export default Footer
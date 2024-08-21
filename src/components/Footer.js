import React from 'react'

const Footer = () => {
    const currentYear=new Date().getFullYear()
  return (
    <div className='text-white pb-3 text-center'>
        <h6 className='font-bold text-lg sm:text-xl '>Thank you for visiting!!</h6> 
        <p className='text-sm sm:text-base'>© {currentYear}  All Rights Reserved.</p></div>
  )
}

export default Footer
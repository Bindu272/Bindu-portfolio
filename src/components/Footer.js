import React from 'react'

const Footer = () => {
    const currentYear=new Date().getFullYear()
  return (
    <div>
        <h6>Thank you for visiting!!</h6> 
        <p>© {currentYear} Bindu patil All Rights Reserved.</p></div>
  )
}

export default Footer
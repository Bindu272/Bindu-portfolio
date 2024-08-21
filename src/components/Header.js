import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header rounded-tl-3xl rounded-br-3xl bg-white text-red-500 shadow-xl'>
      <ol className='flex flex-col sm:flex-row justify-around pt-2 pb-2 font-bold space-y-2 sm:space-y-0'>
      <li><Link to={'#'} target="_blank">LinkedIn <i class="fa-brands fa-linkedin"></i></Link></li>
      <li><Link to={'#'} target="_blank">GitHub <i class="fa-brands fa-github"></i></Link></li>
      <li><Link to={`#`} target="_blank">Email <i class="fa-regular fa-envelope"></i></Link></li>
      <li><Link to={"#"} target="_blank">Instagram <i class="fa-brands fa-instagram"></i></Link></li>
      </ol>
     
    </div>
  )
}

export default Header
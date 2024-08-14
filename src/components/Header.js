import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header rounded-tl-3xl rounded-br-3xl bg-white text-red-500 shadow-xl'>
      <ol className='flex justify-around pt-1 pb-1 font-bold'>
      <li><Link to={'https://www.linkedin.com/in/bindu-rvikumar-patil-1782601a7/'} target="_blank">LinkedIn <i class="fa-brands fa-linkedin"></i></Link></li>
      <li><Link to={'https://github.com/Bindu272'} target="_blank">GitHub <i class="fa-brands fa-github"></i></Link></li>
      <li><Link to={`mailto:bindu272@gmail.com`} target="_blank">Email <i class="fa-regular fa-envelope"></i></Link></li>
      <li><Link to={'https://instagram.com/_i_bindupatil_?igshid=NGVhN2U2NjQ0Yg=='} target="_blank">Instagram <i class="fa-brands fa-instagram"></i></Link></li>
      </ol>
     
    </div>
  )
}

export default Header
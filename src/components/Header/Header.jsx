import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <section className='h-wrapper'>
      <div className='flexCenter paddings innerWidth  h-conatiner'>
        <img src='./logo.png' alt='logo' width={100}/>


        <div className='flexCenter h-menu'>
            <a href=''>Residencies</a>
            <a href=''>Our values</a>
            <a href=''>Join</a>
            <a href=''>Residencies</a>
            <button className='button'>
            <a href=''>Conatct</a>
            </button>

        </div>
      </div>
    </section>
  )
}

export default Header

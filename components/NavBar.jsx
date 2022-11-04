import React, { useState, useRef, useReducer } from 'react'
import Link from "next/link"
import { noenforceall } from 'jshint/src/options'


function menuReducer(open, action) {

  switch(action.type) {
    case "open":
      return true
    case "closed":
      return false;
    default:
      // throw new Error("Not open or closed")
  }
}


function NavBar({textDecoration, color}) {

  const NavStyles = {
    width: "100vw",
    height: "96px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  }

  const linkStyles = {
    textDecoration: textDecoration,
    color: color,
    marginRight: "16px",
    display: "flex",
    alignItems: "center",
  }

  const sideStyles = {
    display: "flex",
    flexDirection: "row",
  }

  const chevron = <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.78125 10.3431L12.4381 16L18.095 10.3431" stroke="#8C6339" stroke-width="2"/>
  </svg>
  
  const logo = <svg width="31" height="49" viewBox="0 0 31 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.1406 48.7395C6.94661 48.7395 0.273438 42.05 0.273438 33.8359V15.643C0.273438 7.42898 6.94661 0.739471 15.1406 0.739471C23.3346 0.739471 30.0078 7.42898 30.0078 15.643V33.8267C30.0078 42.05 23.3438 48.7395 15.1406 48.7395ZM15.1406 1.77431C7.50885 1.77431 1.30575 7.9926 1.30575 15.643V33.8267C1.30575 41.4771 7.50885 47.6954 15.1406 47.6954C22.7723 47.6954 28.9754 41.4771 28.9754 33.8267V15.643C28.9754 8.00184 22.7723 1.77431 15.1406 1.77431Z" fill="#8C6339"/>
  <path d="M25.6571 17.0383H20.4033V13.019H15.2326V13.0467C16.1727 13.3516 16.8455 13.8691 17.1774 14.5713C17.4539 15.1072 17.629 15.9295 17.6935 17.0383H14.3753V13.019H9.20458V13.0467C10.1447 13.3516 10.8176 13.8691 11.1494 14.5713C11.4259 15.1072 11.601 15.9295 11.6655 17.0383H6.43945V18.9878H11.6932V32.5424C11.6932 35.6839 11.0849 37.7905 9.35205 39.8325L9.93274 40.3776C12.8822 37.846 14.3753 34.9817 14.3753 31.7478V18.9786H17.7212V32.5332C17.7212 35.6747 17.1128 37.7813 15.38 39.8233L15.9607 40.3684C18.9102 37.8367 20.4033 34.9724 20.4033 31.7386V18.9786H25.6571V17.0383Z" fill="#8C6339"/>
  </svg>

  const hamburger = <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="2" fill="#8C6339"/>
  <rect y="6" width="32" height="2" fill="#8C6339"/>
  </svg>

  const closeBtn = <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.980469 23.6079L23.6079 0.980469L25.0221 2.39468L2.39468 25.0221L0.980469 23.6079Z" fill="#8C6339"/>
  <path d="M2.39468 0.98047L25.0221 23.6079L23.6079 25.0221L0.980469 2.39468L2.39468 0.98047Z" fill="#8C6339"/>
  </svg>
  
  
  
  const [isVisible, setIsVisible] = useState(false);
  const slideMenu = useRef()
  const [open, dispatch] = useReducer(menuReducer, false)

  // const menuSlide = document.querySelector(".slideMenu")


  const toggleVisibility = (e) => {
  
    const submenu = document.getElementById("submenu");
     
    isVisible ? setIsVisible(false) : setIsVisible(true);

    if(isVisible) {
      submenu.style.visibility = "hidden"
    } else {
      submenu.style.visibility = "visible"
    }
    
  }

  return (
      <nav className="z-[1000] fixed top-0 bg-white w-full flex flex-row justify-between items-center text-body h-[96px] px-24 lg:px-72 text-defaultText shadow-md">
       <ul className="h-[100%] items-center left-nav flex flex-row">
        <li className='ml-0'><Link href="/"><a className='nav-link '>Home</a></Link></li>
        <li className='hidden flex flex-row items-center dropdown'>
        <Link   href="#"><a onMouseLeave={f => f} onMouseOver={f => f} className='top-menu relative nav-link flex flex-row items-center'><span>About</span>{chevron}</a></Link>
        <ul  id="submenu" className="submenu bg-woody absolute top-[96px] left-[144px] text-white flex flex-col px-32 py-16">
          <li className='hidden nav-link mb-8'><Link href="/about-us"><a >About us</a></Link></li>
          <li><Link href="/about-team"><a className='nav-link'>Team</a></Link></li>
        </ul>
        </li>
        <li className='hidden'><Link href="/services"><a className='nav-link'>Services</a></Link></li>
       </ul>
       <div className='logo justify-self-center'>{logo}</div>
        <ul className="right-nav flex flex-row hidden">
          <li><Link href="/portfolio"><a className='nav-link'>Portfolio</a></Link></li>
          <li><Link href="/news-and-updates"><a className='nav-link'>News & updates</a></Link></li>
          <li><Link href="/contact"><a className='no-underline mr-0 uppercase font-semibold'>Contact</a></Link></li>
        </ul>

        <div onClick={ open ? () => dispatch({type: "close"}) : () => dispatch({type: "open"})} className="cursor-pointer hamburger menuBtn">
          {hamburger}
        </div>

        <div ref={slideMenu} style={open ? {transform: "translateX(0%)", transition: "transform 0.3s ease-in-out"} : {transform: "translateX(100%)", transition: "transform 0.3s ease-in-out"}} className="slideMenu flex flex-row justify-center items-center hamburger-menu h-screen font-walkingrush text-[36px]  bg-white top-0 left-0 w-screen absolute">
          <ul className='flex flex-col'>
            <li onClick={ open ? () => dispatch({type: "close"}) : () => dispatch({type: "open"})}  className='mb-32 ml-0 text-center' ><Link href="/"><a>Home</a></Link></li>
            <li onClick={ open ? () => dispatch({type: "close"}) : () => dispatch({type: "open"})} className='mb-32 ml-0 text-center' ><Link href="/about-us"><a>Who we are</a></Link></li>
            <li onClick={ open ? () => dispatch({type: "close"}) : () => dispatch({type: "open"})} className='mb-32 ml-0 text-center' ><Link href="/about-team"><a>Team</a></Link></li>
            <li onClick={ open ? () => dispatch({type: "close"}) : () => dispatch({type: "open"})} className='mb-32 ml-0 text-center' ><Link href="/services"><a>Services</a></Link></li>
            <li onClick={ open ? () => dispatch({type: "close"}) : () => dispatch({type: "open"})} className='mb-32 ml-0 text-center' ><Link href="/portfolio"><a>Portfolio</a></Link></li>
            <li onClick={ open ? () => dispatch({type: "close"}) : () => dispatch({type: "open"})} className='mb-32 ml-0 text-center' ><Link href="/news-and-updates"><a>News & updates</a></Link></li>
            <li onClick={ open ? () => dispatch({type: "close"}) : () => dispatch({type: "open"})} className='mb-32 ml-0 text-center' ><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
          <div onClick={ open ? () => dispatch({type: "close"}) : () => dispatch({type: "open"})}  className="cursor-pointer close-btn absolute right-24 lg:right-72 top-36">
            {closeBtn}
          </div>
        </div>

        
      </nav>
  ) 
}

export default NavBar

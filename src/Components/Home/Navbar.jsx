import React, { useRef } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import "./navbar.scss" ;
import {BsChevronDown} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";
import {RiTodoFill} from "react-icons/ri"
import {BsFillCalendarEventFill} from "react-icons/bs"
import {BsFillBellFill} from "react-icons/bs";
import {BsFillClockFill} from "react-icons/bs";



export const Navbar = () => {

const mySidenav = useRef();
const pannelDisplay1 = useRef();
const pannelDisplay2 = useRef();

  const openMenu = ()=>{
    mySidenav.current.style.width = "70%" ;
  }
  const closeMenu = ()=>{
    mySidenav.current.style.width = "0" ;
  }
   
  const pannelDisplayHandler1 = ()=>{
   
  if(pannelDisplay1.current.style.display === "block"){
    pannelDisplay1.current.style.display = "none" ;
  }else{
    pannelDisplay1.current.style.display = "block" ;
  }

  }
  
const pannelDisplayHandler2 = ()=>{

    if(pannelDisplay2.current.style.display === "block"){
        pannelDisplay2.current.style.display = "none" ;
      }else{
        pannelDisplay2.current.style.display = "block" ;
      }
}


  return (
    <div className='navbar'>
        <h1>snap</h1>
        <div className="nav-desktop">
        <div className="nav1">
           <div className="drop-down">
           <a href="#" className='drop-btn'>Features <BsChevronDown/></a>
            <div class="drop-content">
                <a href="#"><RiTodoFill color='#3916d9'/>Todo List</a>
                <a href="#"><BsFillCalendarEventFill color='#16d9b5'/>Calender</a>
                <a href="#"><BsFillBellFill color='#d9cc16'/>Reminder</a>
                <a href="#"><BsFillClockFill color='#7e16d9'/>Planning</a>
            </div>
           </div>
           <div className="drop-down">
            <a href="#" className='drop-btn'>Company <BsChevronDown/></a>
            <div class="drop-content">
                <a href="#">History</a>
                <a href="#">Our team</a>
                <a href="#">Blog</a>
            </div>
            </div>
            <a href="#">Carears</a>
            <a href="#">About</a>
        </div>
        <div className="nav2">
            <a href="#">Login</a>
            <a href="#">Register</a>
        </div>
        </div>
        <div className="nav-mobile" onClick={openMenu}>
            <GiHamburgerMenu className='icon'/>
        </div>
        <div ref={mySidenav} class="sidenav">
            <span href="javascript:void(0)" class="closebtn" onClick={closeMenu}><AiOutlineClose/></span>
            <div className="nav1">
            <a href="#" onClick={pannelDisplayHandler1}>Features <BsChevronDown/></a>
            <div ref={pannelDisplay1} className="panel">
                <a href="#"><RiTodoFill color='#3916d9'/>Todo List</a>
                <a href="#"><BsFillCalendarEventFill color='#16d9b5'/>Calender</a>
                <a href="#"><BsFillBellFill color='#d9cc16'/>Reminder</a>
                <a href="#"><BsFillClockFill color='#7e16d9'/>Planning</a>
            </div>
            <a href="#" onClick={pannelDisplayHandler2}>Company <BsChevronDown/></a>
            <div ref={pannelDisplay2} className="panel">
                <a href="#">History</a>
                <a href="#">Our team</a>
                <a href="#">Blog</a>
            </div>
            <a href="#">Carears</a>
            <a href="#">About</a>
            </div>
            <div className="nav2">
            <a href="#">Login</a>
            <a href="#">Register</a>
             </div>
       </div>
    </div>
  )
}

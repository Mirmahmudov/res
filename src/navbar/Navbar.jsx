import React from 'react'
import "./Navbar.css"
import { IoIosArrowForward } from 'react-icons/io'
function Navbar() {
  return (
    <>
 <nav>
            <div class="container">
                <div class="logo">
                    <img src="/images/logo3.png" alt="" />
                    <h3>THE GLOBAL GOALS</h3>
                </div>
                <ul class="links">
                   <div className="linkcha"> <li><a href="">HOME <IoIosArrowForward /></a></li></div>
                   <div className="linkcha"> <li><a href="">THE17GOALS <IoIosArrowForward /></a></li></div>
                   <div className="linkcha"> <li><a href="">TAKE ACTION <IoIosArrowForward /></a></li></div>
                   <div className="linkcha"> <li><a href="">NEWS <IoIosArrowForward /></a></li></div>
                   <div className="linkcha">  <li><a href="">RESOURCES <IoIosArrowForward /></a></li></div>
                   <div className="linkcha"> <li><a href="">PODCAST <IoIosArrowForward /></a></li></div>
                   <div className="linkcha"><li><a href="">LANGUAGE</a></li></div>
                  
                   
                    
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
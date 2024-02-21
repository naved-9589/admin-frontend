import React, { useState } from "react";
import { FiHome } from "react-icons/fi";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { CiStickyNote } from "react-icons/ci";
import { NavLink } from "react-router-dom";

let exportingfunction = (e)=>{
  
}

const Leftmenu = ()=>{

    const [isopen, setisopen] = useState(true);
    const [slide, setslide] = useState(true);


     exportingfunction = (e)=>{
      setslide(!slide)
  
    }

   const handledrop = () =>{
      setisopen(!isopen);
     
   }


    return (
        <>
        <div className={slide ? "leftmenuwidth": "leftmenuwidth leftmenuwidthdecrease"}>
              <div className={slide ? "leftmenu": "leftmenuincrease"}>
                <div className="innerleftmenu mb-5">
                  <div className="sidetop">
                    <img className="headerimage" src="images/user.jpg" />
                    <span className="usertext">John Deao</span>
                  </div>
                  <div className="menumiddle">
                    <div className="homemenu">
                      <ul>
                        <div className="listheading my-2">{slide? "HOME": "H.."}</div>
                        <li className="">
                          <button className="dropdownlistbutton" onClick={handledrop}>
                            <div> <FiHome className="me-4 menuicons"/></div>
                            <div>Dashboard</div>
                            <div className="ms-auto"><IoIosArrowForward className="ms-auto" style={{transform: isopen? "rotate(90deg)": "rotate(0deg)"}} /></div>
                          </button>
                          <ul className={isopen? "dropdownitems drop" : "hide"}>
                            <li><NavLink to="/">Analytics</NavLink></li>
                          </ul>
                        </li>
                        <div className="listheading my-2">{slide ? "APPS" : "A.."}</div>
                        <li>
                          <button className="dropdownlistbutton">
                            <div> <IoNewspaperOutline className="me-4 menuicons"/></div>
                            <div><NavLink to="/Notes">Notes</NavLink></div>
                          </button>
                        </li>
                        <li>
                          <button className="dropdownlistbutton">
                            <div> <FiUser className="me-4 menuicons"/></div>
                            <div><NavLink to="/Contacts">Contacts</NavLink></div>
                          </button>
                        </li>
                        <li>
                          <button className="dropdownlistbutton">
                            <div> <CiCalendar className="me-4 menuicons"/></div>
                            <div><NavLink to="/Calendar">Calendar</NavLink></div>
                          </button>
                        </li>
                        <li>
                          <button className="dropdownlistbutton">
                            <div> <FiUserCheck className="me-4 menuicons"/></div>
                            <div><NavLink to="/casl">CASL</NavLink></div>
                          </button>
                        </li>
                        <li>
                          <button className="dropdownlistbutton">
                            <div> <CiShoppingCart className="me-4 menuicons"/></div>
                            <div><NavLink activeClassName="active" to="/shop">shop</NavLink></div>
                          </button>
                        </li>
                        <li>
                          <button className="dropdownlistbutton">
                            <div> <CiStickyNote className="me-4 menuicons"/></div>
                            <div><NavLink  activeClassName="active" to="/Ticket">Ticket</NavLink></div>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}


export default Leftmenu;
export {exportingfunction};
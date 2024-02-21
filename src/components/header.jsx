import React, { useState } from "react";
import { PiDotsNineBold } from "react-icons/pi";
import { FiMessageSquare } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { exportingfunction } from "./leftmenu";
import { FaFacebookMessenger } from "react-icons/fa6";
import { exportappfunction } from "../App";

const Header = ()=>{

   const [topslide, settopslide] = useState(true);

    const handleslide = ()=>{
     settopslide(!topslide);
     exportappfunction();
     exportingfunction();
    }

    return(
        <>
            <div className="header container-fluid">
                    <div className="innerheader row">
                        <div className={topslide ? "col-lg-2": "col-lg-1"}>
                          <h2><FaFacebookMessenger/>{topslide ? "admin": ""}<span className="fw-lighter">pro</span></h2>
                        </div>
                        <div className={topslide ? "col-lg-4 d-flex align-items-center" : "col-lg-5 d-flex align-items-center"}>
                           <p className="m-0 hamburger" onClick={handleslide}><RxHamburgerMenu/></p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-end">
                          <div className="headerright">
                               <PiDotsNineBold />
                          </div>
                          <div className="headerright">
                               <FiMessageSquare />
                          </div>
                          <div className="headerright">
                               <CiMail />
                          </div>
                          <div className="headerright">
                               <img className="headerimage" src="images/user.jpg" />
                          </div>
                        </div>
                    </div>

                        

                  </div>
        </>
    );
}

export default Header;
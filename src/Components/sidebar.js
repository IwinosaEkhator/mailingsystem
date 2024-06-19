import React, { useState } from 'react'

import nnpcLogo from "./Assets/nnpc-logo.png"
import { MdOutlineDashboard } from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegThumbsDown } from "react-icons/fa6";
import { GiEntryDoor } from "react-icons/gi";


const Sidebar = (props) => {


    // const modeSwitch = body.querySelector(".toggle-switch");
    // const modeText = body.querySelector(".mode-text");



    // modeSwitch.addEventListener("click", () => {
    //     body.classList.toggle("dark");

    //     if (body.classList.contains("dark")) {
    //         modeText.innerText = "Light mode";
    //     } else {
    //         modeText.innerText = "Dark mode";

    //     }
    // });

    // const [isDarkMode, setIsDarkMode] = useState(false);

    // const toggleMode = () => {
    //     setIsDarkMode(!isDarkMode);
    // };

    



    const SidebarLinks = (props) => {
        return (
            <>
                <li className="nav-link">
                    <a href="#">
                        <span className='icon'>{props.children}</span>
                        <span className="text nav-text">{props.name}</span>
                    </a>
                </li>
            </>
        )

    }


    return (
        <>
            <header>
                <div className="image-text">
                    <span className="image">
                        <img src={nnpcLogo} style={{ width: "100px", minWidth: "120px" }} />
                    </span>

                    {/* <div className="text logo-text">
                            <span className="name">Codinglab</span>
                            <span className="profession">Web developer</span>
                        </div> */}
                </div>
                {props.children}
                {/* <MdKeyboardArrowRight onClick={toggleBtn} className='bx bx-chevron-right toggle' style={{ fontSize: "60px" }} /> */}
            </header>

            <div className="menu-bar">
                <div className="menu">

                    {/* <li className="search-box" onClick={searchBar}>
                            <i className='bx bx-search icon'></i>
                            <input type="text" placeholder="Search..." />
                        </li> */}

                    <ul className="menu-links">
                        <SidebarLinks
                            name='Dashboard'
                        >
                            <MdOutlineDashboard style={{ fontSize: "27px" }} />
                        </SidebarLinks>
                        <SidebarLinks
                            name='Requests'
                        >
                            <VscRequestChanges style={{ fontSize: "27px" }} />
                        </SidebarLinks>
                        <SidebarLinks
                            name='Pending'
                        >
                            <MdOutlinePendingActions style={{ fontSize: "27px" }} />
                        </SidebarLinks>
                        <SidebarLinks
                            name='Approved'
                        >
                            <FaRegThumbsUp style={{ fontSize: "27px" }} />
                        </SidebarLinks>
                        <SidebarLinks
                            name='Declined'
                        >
                            <FaRegThumbsDown style={{ fontSize: "27px" }} />
                        </SidebarLinks>
                    </ul>
                </div>

                <div className="bottom-content">
                    <li className="">
                        <a href="#" style={{padding: "0 30px 0 0"}}>
                            <GiEntryDoor className='icon' style={{ fontSize: "27px" }} />
                            <span className="text nav-text">Logout</span>
                        </a>
                    </li>

                    <li className="mode">
                        <div className="sun-moon">
                            <i className='bx bx-moon icon moon'></i>
                            <i className='bx bx-sun icon sun'></i>
                        </div>
                        <span className="mode-text text">{props.isDarkMode ? 'Light mode' : 'Dark mode'}</span>

                        <div className="toggle-switch" onClick={props.toggleMode}>
                            <span className="switch"></span>
                        </div>
                    </li>

                </div>
            </div>

        </>

    )
}

export default Sidebar;
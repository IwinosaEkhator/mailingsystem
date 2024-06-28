import React, { useState } from 'react'

import nnpcLogo from "./Assets/nnpc-logo.png"
import { MdOutlineDashboard } from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegThumbsDown } from "react-icons/fa6";
import { GiEntryDoor } from "react-icons/gi";
import { Link } from 'react-router-dom';


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








    return (
        <>
            <header>
                <div className="image-text">
                    <span className="image">
                        <img src={nnpcLogo} style={{ minWidth: "120px" }} />
                    </span>

                    {/* <div className="text logo-text">
                            <span className="name">Codinglab</span>
                            <span className="profession">Web developer</span>
                        </div> */}
                </div>

            </header>
            <div className="menu-bar">
                <div className="menu">

                    {/* <li className="search-box" onClick={searchBar}>
                            <i className='bx bx-search icon'></i>
                            <input type="text" placeholder="Search..." />
                        </li> */}

                    <ul className="menu-links">
                        <li className="nav-link">
                            <Link to='/'>
                                <span className='icon'><MdOutlineDashboard style={{ fontSize: "33px" }} /></span>
                                <span className="text nav-text">Dashboard</span>
                            </Link>

                        </li>
                        <li className="nav-link">
                            <Link to='/requests'>
                                <span className='icon'><VscRequestChanges style={{ fontSize: "33px" }} /></span>
                                <span className="text nav-text">Requests</span>
                            </Link>

                        </li>
                        <li className="nav-link">
                            <Link to="/pending">
                                <span className='icon'><MdOutlinePendingActions style={{ fontSize: "33px" }} /></span>
                                <span className="text nav-text">Pending</span>
                            </Link>

                        </li>
                        <li className="nav-link">
                            <Link to="/approved">
                                <span className='icon'><FaRegThumbsUp style={{ fontSize: "33px" }} /></span>
                                <span className="text nav-text">Approved</span>
                            </Link>

                        </li>
                        <li className="nav-link">
                            <Link to="/declined">
                                <span className='icon'><FaRegThumbsDown style={{ fontSize: "33px" }} /></span>
                                <span className="text nav-text">Declined</span>
                            </Link>

                        </li>
                    </ul>
                </div>

                <div className="bottom-content">
                    <li className="">
                        <Link to="#" style={{ padding: "0 30px 0 0" }}>
                            <GiEntryDoor className='icon' style={{ fontSize: "27px" }} />
                            <span className="text nav-text">Logout</span>
                        </Link>
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
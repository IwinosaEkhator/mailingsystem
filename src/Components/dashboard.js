import React, { useState } from "react";
import classNames from 'classnames'

import Navbar from "../Components/navbar.js";
import "../Components/Admin/admin.css"
import "../Components/Assets/nnpc-logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar, { AdminBody } from "./sidebar.js";
import Card from "./admin-card.js";
import { VscRequestChanges } from "react-icons/vsc";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegThumbsDown } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import Adminorder from "./admin-order.js";
import Ordertable from "./order-table.js";

const Dashboard = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    // Dark Mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        
        <>
            <div className={classNames('body', { 'dark': isDarkMode })}>
                <div className={classNames('main pt-2', { 'close': !isSidebarOpen })}>

                    <Navbar />

                    <div className="cardBox">
                        <Card
                            aName="Requests"
                            aNum="100"
                        >
                            <VscRequestChanges style={{ fontSize: "27px", fontSize: "3.5rem" }} />
                        </Card>
                        <Card
                            aName="Pending"
                            aNum="50"
                        >
                            <MdOutlinePendingActions style={{ fontSize: "27px", fontSize: "3.5rem" }} />
                        </Card>
                        <Card
                            aName="Approved"
                            aNum="30"
                        >
                            <FaRegThumbsUp style={{ fontSize: "27px", fontSize: "3.5rem" }} />
                        </Card>
                        <Card
                            aName="Declined"
                            aNum="20"
                        >
                            <FaRegThumbsDown style={{ fontSize: "27px", fontSize: "3.5rem" }} />
                        </Card>
                    </div>
                    <div className="details">
                        <Adminorder>
                            <Ordertable
                                idNum="npdc.b0000"
                                tName="Ekhator Iwinosa"
                                tItems="Laptop"
                                tStatus="Denied"
                            />
                            <Ordertable
                                idNum="npdc.b0001"
                                tName="Osunbor Favour"
                                tItems="Laptop"
                                tStatus="Approved"
                            />
                            <Ordertable
                                idNum="npdc.b0000"
                                tName="Edwin Ezue"
                                tItems="Laptop"
                                tStatus="Approved"
                            />
                            <Ordertable
                                idNum="npdc.b0000"
                                tName="Ugheoke Amhanosi"
                                tItems="Laptop"
                                tStatus="Pending"
                            />
                            <Ordertable
                                idNum="npdc.b0011"
                                tName="Ugiagbe Francess"
                                tItems="Laptop"
                                tStatus="Pending"
                            />
                        </Adminorder>
                    </div>
                    {/* </AdminBody> */}
                </div>
                <nav className={classNames('sidebar', { 'close': !isSidebarOpen })}>
                    <Sidebar isDarkMode={isDarkMode} toggleMode={toggleMode}>
                        <MdKeyboardArrowRight onClick={toggleSidebar} className='bx bx-chevron-right toggle' style={{ fontSize: "60px" }} />
                    </Sidebar>
                </nav>
            </div>

        </>
    )
};

export default Dashboard;
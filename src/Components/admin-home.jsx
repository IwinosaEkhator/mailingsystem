import React, { useState } from "react";
import classNames from 'classnames'

import Navbar from "./navbar.js";
import "../Components/Admin/admin.css"
import "../Components/Assets/nnpc-logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./sidebar.jsx";
import Dashboard from "./dashboard.js";

import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Pending from "./pending.js";
import Requests from "./requests.js";
import Approved from "./approved.js";
import Declined from "./declined.js";
import AdminForm from "./admin-form.js";

const AdminHome = () => {


    // Dark Mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (

        <>
            <div className={classNames('body', { 'dark': isDarkMode })}>
                <Router>
                    <div className={classNames('main pt-2')}>

                        <Navbar />


                        <Routes>
                            <Route index element={<Dashboard />} />
                            <Route path="/requests" element={<Requests />} />
                            <Route path="/pending" element={<Pending />} />
                            <Route path="/approved" element={<Approved />} />
                            <Route path="/declined" element={<Declined />} />
                            <Route path="/add-form" element={<AdminForm />} />
                        </Routes>

                    </div>
                    <nav className={classNames('sidebar')}>
                        <Sidebar isDarkMode={isDarkMode} toggleMode={toggleMode} />
                    </nav>

                </Router>
            </div>

        </>
    )
};

export default AdminHome;
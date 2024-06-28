import React from 'react';
import "../Components/Admin/admin.css";

import { FaBell } from "@react-icons/all-files/fa/FaBell";



const Navbar = () => {

    return(
        <>
            <header className="pb-3 mb-4 border-bottom pt-4 dashboard-navbar">
                <div className="container d-flex flex-wrap justify-content-center">
                    <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                        <span className="fs-4 welcome">Welcome Back, Admin👏</span>
                    </a>
                    <div className="d-flex align-items-center">
                        <FaBell className='me-3' style={{backgroundColor: "none"}} />
                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-4" role="search">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                        </form>

                        <div className="dropdown text-end">
                            <a href="#" className="d-flex justify-content-center align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle me-1"/>
                            </a>
                            <ul className="dropdown-menu text-small">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>

                    </div>
                
                </div>
            </header>
        </>
    )
        
    
}

export default Navbar;
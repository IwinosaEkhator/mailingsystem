import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import AdminForm from "../admin-form.js";
import AdminHome from "../admin-home.jsx";



const Admin = () => {


    return (
        <>
            <AdminHome/>
        </>
    )
}

export default Admin;
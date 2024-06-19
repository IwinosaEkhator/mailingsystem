import React from "react";

import "../Components/Admin/admin.css";



const Adminorder = (props) => {
    return(
        <> 
             <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Recent Orders</h2>
                        <a href="#" className="btn">View All</a>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>ID-No</td>
                                <td>Name</td>
                                <td>Items</td>
                                <td>Status</td>
                                <td>Actions</td>
                            </tr>
                        </thead>

                        <tbody>
                           {props.children}
                        </tbody>
                    </table>
                </div>
           
        </>
    )
};

export default Adminorder;
import React, { Component } from 'react';

import "../Components/Admin/admin.css";
import { AiOutlineEdit } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";



class Ordertable extends Component {

    state = {
        status: 'pending' // initial status
    }

    approvedChanges = () => {
        this.setState({
            status: 'approved'
        });
    }

    declinedChanges = () => {
        this.setState({
            status: 'declined'
        });
        window.alert("Are you sure you want to reject this request");

    }

    render() {
        const { idNum, tName, tItems } = this.props;
        const { status } = this.state;
        const statusClass = status == 'approved' ? 'status approved' : status == 'declined' ? 'status declined' : 'status pending';
        const statusText = status == 'approved' ? 'Approved' : status == 'declined' ? 'Declined' : 'Pending';

        return (
            <>
                <tr>
                    <td>{idNum}</td>
                    <td>{tName}</td>
                    <td>{tItems}</td>
                    <td><span className={statusClass}>{statusText}</span></td>
                    <td>
                        <button style={{ fontSize: "22px" }} className="btn"><AiOutlineEdit /></button>
                        <button style={{ fontSize: "22px" }} className="btn" onClick={this.declinedChanges}><FaXmark /></button>
                        <button style={{ fontSize: "22px" }} className="btn" onClick={this.approvedChanges}><FaCheck /></button>
                    </td>
                </tr>

            </>
        )
    }
}


export default Ordertable;
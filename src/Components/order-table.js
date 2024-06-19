import React from "react";

import "../Components/Admin/admin.css";
import { AiOutlineEdit } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";


class Ordertable extends Component {
    state = { 
        approved: false,
        denied: false
    }

    approvedChange = () => {
        this.setState({
            approved: true
        })
    }

    render() { 
        return (
            <>
                <tr>
                <td>{props.idNum}</td>
                <td>{props.tName}</td>
                <td>{props.tItems}</td>
                <td><span className={this.state.approved? "status pending" : "status approved"}>{props.tStatus}</span></td>
                <td>
                    <button style={{fontSize: "22px"}} className="btn"><AiOutlineEdit /></button>
                    <button style={{fontSize: "22px"}} className="btn"><FaXmark /></button>
                    <button style={{fontSize: "22px"}} className="btn" onClick={this.approvedChange}><FaCheck /></button>
                </td> 
                
            </tr>
            </>
        );
    }
}

export default Ordertable;
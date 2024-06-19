import React from "react";

import "../Components/Admin/admin.css";



const Card = (props) => {
    return(
        <> 
            <div className="aCard">
                <div>
                    <div className="numbers">{props.aNum}</div>
                    <div className="cardName">{props.aName}</div>
                </div>

                <div className="iconBx">
                    {props.children}
                </div>
            </div>
        </>
    )
};

export default Card;
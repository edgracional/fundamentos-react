import "./card.css";
import React from "react";


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.com || '#F00',
    }
    
    return (
        <div className="card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
     );
    
};
import "./Card.css";

const Card = (props) => {
    const classes = "card " + props.className;

    return <div className={classes}>{props.children}</div>;
}

// Old example of doing react is: 
// import React from "react";
//  return React.createElement("div", {className: classes}, props.children);

export default Card;
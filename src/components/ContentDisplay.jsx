import React from "react";
import "./ContentDisplay.css";

const ContentDisplay = ({ title, content }) => {
    return (
        <div className="content-box">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default ContentDisplay;

import React from "react";
import "./SubjectList.css";

const SubjectList = ({ subjects, onSelect }) => {
    return (
        <div className="subject-list">
            {subjects.map((subject) => (
                <div
                    key={subject.id}
                    className="subject-card"
                    onClick={() => onSelect(subject)}
                >
                    <h3>{subject.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default SubjectList;

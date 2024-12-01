import React, { useState } from "react";
import Header from "./components/Header";
import SubjectList from "./components/SubjectList";
import ReviewerContent from "./components/ReviewerContent";

const App = () => {
    const [selectedSubject, setSelectedSubject] = useState(null);

    const subjects = [
        { id: 1, title: "SIA101", content: "Business Process Integration details..." },
        { id: 2, title: "IS103", content: "Introduction to middleware..." },
        { id: 3, title: "IS101", content: "free time" },
        { id: 4, title: "ALI101", content: "brute force ni bong" },
        { id: 5, title: "CC105", content: "proud hecker! " },
        { id: 6, title: "AR", content: "wala" },
        { id: 7, title: "TLWR", content: "wala" },
    ];

    return (
        <div>
            <Header />
            {selectedSubject ? (
                <ReviewerContent
                    subject={selectedSubject}
                    onClose={() => setSelectedSubject(null)}
                />
            ) : (
                <SubjectList
                    subjects={subjects}
                    onSelect={(subject) => setSelectedSubject(subject)}
                />
            )}
        </div>
    );
};

export default App;

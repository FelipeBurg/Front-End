import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const teammates = ["Alice", "Bob", "Charlie", "Dana"];
const aspects = ["Communication", "Teamwork", "Problem Solving", "Initiative", "Reliability"];

function App() {
    const [selectedTeammate, setSelectedTeammate] = useState("");
    const [feedbackType, setFeedbackType] = useState("");
    const [selectedAspects, setSelectedAspects] = useState([]);

    const toggleAspect = (aspect) => {
        setSelectedAspects((prev) =>
            prev.includes(aspect) ? prev.filter((a) => a !== aspect) : [...prev, aspect]
        );
    };

    const submitFeedback = () => {
        if (!selectedTeammate || !feedbackType) {
            alert("Please select a teammate and feedback type.");
            return;
        }

        const data = {
            teammate: selectedTeammate,
            feedback: feedbackType,
            aspects: selectedAspects,
        };

        console.log("Submitted Feedback:", data);
        alert("Feedback submitted successfully!");
        // Reset
        setSelectedTeammate("");
        setFeedbackType("");
        setSelectedAspects([]);
    };

    return (
        <div className="container">
            <h2>Give Teammate Feedback</h2>

            <div className="select">
                <label>Select Teammate:</label>
                <select value={selectedTeammate} onChange={(e) => setSelectedTeammate(e.target.value)}>
                    <option value="">-- Choose a teammate --</option>
                    {teammates.map((teammate) => (
                        <option key={teammate} value={teammate}>
                            {teammate}
                        </option>
                    ))}
                </select>
            </div>

            <div className="feedback-buttons">
                <label>Feedback Type:</label>
                <div>
                    <button
                        className={`feedback-positive ${feedbackType === "Positive" ? "selected" : ""}`}
                        onClick={() => setFeedbackType("Positive")}
                    >
                        👍 Positive
                    </button>
                    <button
                        className={`feedback-negative ${feedbackType === "Negative" ? "selected" : ""}`}
                        onClick={() => setFeedbackType("Negative")}
                    >
                        👎 Negative
                    </button>
                </div>
            </div>

            <div className="aspects">
                <label>Select Aspects:</label>
                <div>
                    {aspects.map((aspect) => (
                        <button
                            key={aspect}
                            className={selectedAspects.includes(aspect) ? "selected" : ""}
                            onClick={() => toggleAspect(aspect)}
                        >
                            {aspect}
                        </button>
                    ))}
                </div>
            </div>

            <div className="submit-section">
                <button onClick={submitFeedback}>Submit Feedback</button>
            </div>
        </div>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

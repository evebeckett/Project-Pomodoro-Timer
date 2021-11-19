import React from "react";

function BarPercentage({session, focusDuration, breakDuration}) {
    let barPercentage; 
    if(session.label === "Focusing"){
        barPercentage =100-((session.timeRemaining / (focusDuration * 60)) * 100);
    } else {
        barPercentage =100-((session.timeRemaining / (breakDuration * 60)) * 100);
    }

    return (
        <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={barPercentage} 
              style={{ width: `${barPercentage}%` }} 
            />
          </div>
        </div>
      </div>
    )
}

export default BarPercentage;
import React from "react";
import {secondsToDuration, minutesToDuration} from "../utils/duration"
import Subtitle from "./Subtitle";
import BarPercentage from "./BarPercentage";

function SessionTitle({session, focusDuration, breakDuration}){
    if(!session) return null;
    
    return (
        <div>
        
        <div className="row mb-2">
          <div className="col">
            
            <h2 data-testid="session-title">
                {session.label} for {minutesToDuration(session.label === "Focusing" ? focusDuration : breakDuration)} minutes 
            </h2>
            
            <Subtitle session={session} secondsToDuration={secondsToDuration}/>
          </div>
        </div>
        <BarPercentage session={session} focusDuration={focusDuration} breakDuration={breakDuration}/>
      </div>
    )
}

export default SessionTitle;
import React, { PureComponent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause,  faFastBackward, faFastForward, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const Player = () => {
    return (
        <div className="player">
            <div className="time-control">
                <p>Start</p>
                <input type="range"></input>
                <p>End</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon size="2x"className="skip-back" icon={faFastBackward}/>                
                <FontAwesomeIcon size="2x"className="play" icon={faPlay}/>              
                <FontAwesomeIcon size="2x"className="skip-next" icon={faFastForward}/>
            </div>            
        </div>
    );
};

export default Player;

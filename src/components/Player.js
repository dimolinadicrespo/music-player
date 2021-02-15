import React, { useContext, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause,  faFastBackward, faFastForward, faAngleDoubleLeft, faAngleDoubleRight, faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import {SongsContext} from './../hooks/songsContext';
import {formatTime} from './../helpers';

const Player = ({imageRef}) => {

    const { currentSong : {name, cover, artist, audio, color, active}  } = useContext(SongsContext);
    const { play, setPlay  } = useContext(SongsContext);
    const { currentSongProps, setCurrentSongProps  } = useContext(SongsContext);

    const audioRef = useRef(null);

    const playHandler = () => {        
        setPlay( play => !play);        
        if ( !play ) {  
            imageRef.current.style.animationPlayState = "running";                      
            audioRef.current.play();
            return;
        }
        imageRef.current.style.animationPlayState = "paused";  
        audioRef.current.pause();        
    }

    const changeAudioTime = (event) => {
        audioRef.current.currentTime = event.target.value;
    } 

    const updateSongProps = () => {
        setCurrentSongProps({
            currentTime: audioRef.current.currentTime,
            duration: audioRef.current.duration
        });        
    }

    return (
        <div className="player">
            <div className="time-control">
                <p>{formatTime(currentSongProps.currentTime) }</p>
                <input 
                    type="range"
                    min={0}
                    max={currentSongProps.duration || 100}
                    value={currentSongProps.currentTime || 0}
                    onChange={event => changeAudioTime(event)}></input>
                <p>{formatTime(currentSongProps.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon size="2x" className="skip-back" icon={faFastBackward}/>                
                <FontAwesomeIcon size="2x" className="play" icon={!play ? faPlay : faPause} onClick={() => playHandler() }/>              
                <FontAwesomeIcon size="2x" className="skip-next" icon={faFastForward}/>
            </div>
            <audio 
                ref={audioRef} 
                onTimeUpdate={updateSongProps}
                onLoadedMetadata={updateSongProps}
                onEnded={() => setPlay(false)}
                src={audio}></audio>                          
        </div>
    );
};

export default Player;

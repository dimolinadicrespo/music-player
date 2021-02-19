import React, { useContext, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause,  faFastBackward, faFastForward, faAngleDoubleLeft, faAngleDoubleRight, faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { SongsContext } from './../hooks/songsContext';
import { formatTime, calculatePercent } from './../helpers';
import { useCounterSong } from './../hooks/useCounterSong';

const Player = ({imageRef, audioRef}) => {

    const { currentSong : {name, cover, artist, audio, color, active}, songs, play, setPlay, currentSongProps, setCurrentSongProps, prevSong, setPrevSong} = useContext(SongsContext);
    const[updateCurrentSong, nextSong, skipBackSong] = useCounterSong(imageRef, audioRef);   

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
            duration: audioRef.current.duration,
            percent: calculatePercent(audioRef.current.currentTime, audioRef.current.duration),
            color: color
        });        
    }

    return (
        <div className="player">
            <div className="time-control">
                <p>{formatTime(currentSongProps.currentTime) }</p>
                <div className="track-time" style={{backgroundImage: `linear-gradient(to right, ${color[1]}, ${color[0]})`}}>
                    <input 
                        type="range"
                        min={0}
                        max={currentSongProps.duration || 100}
                        value={currentSongProps.currentTime || 0}
                        onChange={event => changeAudioTime(event)}></input>
                        <div className="animation-time" style={{transform: `translateX(${currentSongProps.percent}%)`}}></div>
                </div>
                <p>{formatTime(currentSongProps.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon size="2x" className="icon skip-back" icon={faFastBackward} onClick={() => skipBackSong()}/>                
                <FontAwesomeIcon size="2x" className="icon play" icon={!play ? faPlay : faPause} onClick={() => playHandler() }/>              
                <FontAwesomeIcon size="2x" className="icon skip-next" icon={faFastForward} onClick={() => nextSong()}/>
            </div>
            <audio 
                ref={audioRef} 
                onTimeUpdate={updateSongProps}
                onLoadedMetadata={updateSongProps}
                onEnded={() => nextSong()}
                src={audio}></audio>                          
        </div>
    );
};

export default Player;

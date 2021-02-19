import React, { useContext, useEffect, useRef } from "react";
import {SongsContext} from './../hooks/songsContext';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Song = ({imageRef}) => {
    
    const { currentSong : {name, cover, artist, audio, color, active} ,play, setPlay,  open, setOpen  } = useContext(SongsContext);

    const checkAnimation = (e) => {
        if (e.animationName === 'flip-scale-down-ver') {
            imageRef.current.classList.remove('next-song');
            imageRef.current.style.animationPlayState = 'paused';     
        }
    }
    
    return (
        <div className="song-container">          
            <header>
                <h2>Smusicfy</h2>
                <button className="btn" onClick={() => setOpen(!open)}>
                    <FontAwesomeIcon className="library-btn" icon={faCompactDisc}/> Library   
                </button>
            </header>
            <img ref={imageRef} src={cover} alt={name} className={'cover'} onAnimationEnd={(e) => checkAnimation(e)}/>
            <h1>{artist}</h1>
            <h2>{name}</h2>            
        </div>
    );
};

export default Song;

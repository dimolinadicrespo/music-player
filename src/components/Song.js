import React, { useContext, useEffect, useRef } from "react";
import {SongsContext} from './../hooks/songsContext';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Song = ({imageRef}) => {
    
    const { currentSong : {name, cover, artist, audio, color, active}  } = useContext(SongsContext);
    const { play, setPlay  } = useContext(SongsContext);
    const { open, setOpen  } = useContext(SongsContext);
    
    // const setAnimationDisk = () => {
    //     if (play)
    //     imageRef.cuanimation-play-state
    // }

    return (
        <div className="song-container">          
            <header>
                <a>Smusicfy</a>
                <button className="btn" onClick={() => setOpen(!open)}>
                    <FontAwesomeIcon className="library-btn" icon={faCompactDisc} color={'#4e4c4c'}/> Library   
                </button>
            </header>
            <img ref={imageRef} src={cover} alt={name} className={'cover'}/>
            <h1>{artist}</h1>
            <h2>{name}</h2>            
        </div>
    );
};

export default Song;

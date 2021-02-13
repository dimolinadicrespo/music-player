import React, { useContext, useEffect, useRef } from "react";
import {SongsContext} from './../hooks/songsContext';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Song = () => {
    
    const { currentSong : {name, cover, artist, audio, color, active}  } = useContext(SongsContext);
    const { play, setPlay  } = useContext(SongsContext);
    const { open, setOpen  } = useContext(SongsContext);
    const imageRef = useRef(null);
    
    useEffect(() => {
        console.log(imageRef);
    }, [play])

    return (
        <div className="song-container">          
            <header>
                <a>Smusicfy</a>
                <button className="btn" onClick={() => setOpen(!open)}>
                    <FontAwesomeIcon className="library-btn" icon={faCompactDisc} color={'#4e4c4c'}/> Library   
                </button>
            </header>
            <img ref={imageRef} src={cover} alt={name} className={play ? 'cover-play' : ''}/>
            <h1>{artist}</h1>
            <h2>{name}</h2>            
        </div>
    );
};

export default Song;

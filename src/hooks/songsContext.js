import React, { createContext, useState } from 'react';
import chillHop from './../data.js';

export const SongsContext = createContext();

const SongsProvider = (props) => {

    const [songs, setSongs] = useState(chillHop);    
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [prevSong, setPrevSong] = useState(0);
    const [currentSongProps, setCurrentSongProps] = useState({});
    const [play, setPlay] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <SongsContext.Provider
            value={{
                songs,
                currentSong, setCurrentSong,
                prevSong, setPrevSong,
                play, setPlay,
                currentSongProps, setCurrentSongProps,
                open, setOpen
            }}
        >
            {props.children}
        </SongsContext.Provider>
    );
}

export default SongsProvider;
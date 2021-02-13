import React, { useContext } from "react";
import LibraryItem from "./LibraryItem";
import { SongsContext } from "./../hooks/songsContext.js";

const Library = () => {
    const { songs, setSongs } = useContext(SongsContext);
    const { setCurrentSong, setPlay } = useContext(SongsContext);
    const { prevSong, setPrevSong } = useContext(SongsContext);
    const { open, setOpen } = useContext(SongsContext);
    const { currentSong } = useContext(SongsContext);
    
    const updateCurrentSong = (index) => {    
        songs[prevSong].active = false;
        songs[index].active = true;
        setPrevSong(index);          
        setCurrentSong(songs[index]);
        setPlay(false);
    };

    return (
        <div className={`library ${open ? "open" : ""} `}>
            <h2>Library</h2>
            {songs.map((song, index) => (
                <LibraryItem
                    key={index}
                    song={song}
                    updateCurrentSong={() => updateCurrentSong(index)}
                ></LibraryItem>
            ))}
        </div>
    );
};

export default Library;

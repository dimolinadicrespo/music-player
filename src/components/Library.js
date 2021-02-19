import React, { useContext } from "react";
import LibraryItem from "./LibraryItem";
import { SongsContext } from "./../hooks/songsContext.js";
import { useCounterSong } from "./../hooks/useCounterSong";

const Library = ({ imageRef, audioRef }) => {
    const { songs, open } = useContext(SongsContext);

    const [updateCurrentSong] = useCounterSong(imageRef, audioRef);

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

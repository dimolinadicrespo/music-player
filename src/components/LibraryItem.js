import React, { useContext } from "react";

const LibraryItem = ({ song, updateCurrentSong }) => {
    const { name, cover, artist, audio, color, active } = song;

    return (
        <div
            className={`library-item  ${active ? "active" : ""}`}
            onClick={updateCurrentSong}
        >
            <img src={cover} alt={name} />
            <div className={`library-item-description`}>
                <h3>{name}</h3>
                <h4>{artist}</h4>
            </div>
        </div>
    );
};

export default LibraryItem;

import React, { PureComponent } from 'react';

const LibraryItem = ({cover, name, artist}) => {
    return (
        <div>
            <img src={cover} alt={name} width="50px" height="50px"/>
            <p>{name}</p>
            <p>{artist}</p>
        </div>
    );
}
 
export default LibraryItem;
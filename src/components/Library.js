import React, { PureComponent } from 'react';
import LibraryItem from './LibraryItem';

const Library = ({songs}) => {
    return (
        <div>
            {songs.map((song, index) => (                
                <LibraryItem 
                    cover={song.cover} 
                    name={song.name} 
                    artist={song.artist}></LibraryItem>
            ))}        
        </div>
    );
}
 
export default Library;
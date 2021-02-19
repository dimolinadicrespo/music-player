import { useContext } from "react";
import { SongsContext } from "./../hooks/songsContext.js";

export const useCounterSong = (imageRef, audioRef) => {

    const { songs, setCurrentSong, setPlay, prevSong, setPrevSong, setOpen} = useContext(SongsContext);
    
    const updateCurrentSong = (index) => {  
        imageRef.current.style.animationPlayState = "running";         
        imageRef.current.classList.add('next-song');  
        songs[prevSong].active = false;
        songs[index].active = true;
        setTimeout(() => {
            setPrevSong(index);          
            setCurrentSong(songs[index]);
            setPlay(true);
            setOpen(false);
            imageRef.current.style.animationPlayState = "running";                      
            audioRef.current.play();                        
        }, 250);
        imageRef.current.classList.remove('cover');        
        void imageRef.current.offsetWidth;
        imageRef.current.classList.add('cover');
    };

    const nextSong = () => {
        if ((prevSong + 1)  < songs.length) {
            updateCurrentSong(prevSong + 1);
        }
    }

    const skipBackSong = () => {
        if ((prevSong - 1)  > -1) {
            updateCurrentSong(prevSong - 1);
        }
    }

    return [updateCurrentSong, nextSong, skipBackSong];
}
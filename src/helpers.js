export const formatTime = (time) => {   
    if (isNaN(time))
        return `0:00`;
    // Minutes and seconds        
    let mins = Math.round((time / 60), 1);
    let secs = ~~time % 60;
    if (secs < 10)
        secs = `0${secs}`;        
    return `${mins}:${secs}`;        
}

export const calculatePercent = (valueOverTotal, total) => {
    return Math.floor((valueOverTotal / total) * 100);
}
import "./styles/index.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from './components/Library';
import chillHop from './data.js';
import { useState } from "react";

function App() {
    const [songs, setsongs] = useState(chillHop)
    const [currentSong, setCurrentSong] = useState(null)
    return (
        <div className="App">
            <Song></Song>
            <Player></Player>
            <Library songs={songs}></Library>
        </div>
    );
}

export default App;

import "./styles/index.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from './components/Library';
import SongsProvider from './hooks/songsContext.js'
import Switcher from './components/Switcher';
import { useRef } from 'react';


function App() {   
    const imageRef = useRef(null);
    return (
        <div className="App">
            <SongsProvider>
                <Switcher></Switcher>
                <Song imageRef={imageRef}></Song>
                <Player imageRef={imageRef}></Player>
                <Library imageRef={imageRef}></Library>
            </SongsProvider>
        </div>
    );
}

export default App;

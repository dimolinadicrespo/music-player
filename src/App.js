import "./styles/index.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from './components/Library';
import SongsProvider from './hooks/songsContext.js'
import Switcher from './components/Switcher';

function App() {   
    
    return (
        <div className="App">
            <SongsProvider>
                <Switcher></Switcher>
                <Song></Song>
                <Player></Player>
                <Library></Library>
            </SongsProvider>
        </div>
    );
}

export default App;

import './App.css';
import Tile from './components/Tile';
import Card from './components/Card';



function App() {
  return (
    <div className="App">
      <main className="flexbox">  
        <Tile id="tile-1" className="tile">
          <Card id="card-1" className="card" draggable="true">
            <p>Card one</p>
          </Card>
        </Tile>

        <Tile id="tile-2" className="tile">
          <Card id="card-2" className="card" draggable="true">
            <p>Card one</p>
          </Card>
        </Tile>
      </main>
    </div>
  );
}

export default App;

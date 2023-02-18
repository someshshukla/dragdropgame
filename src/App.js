import './App.css';
import Tile from './components/Tile';
import Card from './components/Card';



function App() {
  return (
    <div className="App">
      <main className="flexbox">  
        <Tile id="tile1" className="tile1">
          <Card id="card-1" className="card" draggable="true">
            <p>Card1</p>
          </Card>
        </Tile>

        <Tile id="tile2" className="tile2">
          <Card id="card-2" className="card" draggable="true">
            <p>Card2</p>
          </Card>
        </Tile>

        <Tile id="tile3" className="tile3">
          <Card id="card-2" className="card" draggable="true">
            <p>Card3</p>
          </Card>
        </Tile>

        <Tile id="tile4" className="tile4">
          <Card id="card-2" className="card" draggable="true">
            <p>Card4</p>
          </Card>
        </Tile>

        <Tile id="tile5" className="tile5">
          <Card id="card-2" className="card" draggable="true">
            <p>Card5</p>
          </Card>
        </Tile>

        {/* <Tile id="tile6" className="tile6">
          <Card id="card-2" className="card" draggable="true">
            <p>Card6</p>
          </Card>
        </Tile>

        <Tile id="tile7" className="tile7">
          <Card id="card-2" className="card" draggable="true">
            <p>Card7</p>
          </Card>
        </Tile>

        <Tile id="tile8" className="tile8">
          <Card id="card-2" className="card" draggable="true">
            <p>Card8</p>
          </Card>
        </Tile>
 */}


      </main>
    </div>
  );
}

export default App;

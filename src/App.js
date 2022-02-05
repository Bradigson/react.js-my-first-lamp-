import Lamp from './Component/Lamp.js'
import Clock from './Component/Clock.js'
import './App.css';

function App() {
  return (
    <div className="App">

      <Lamp/>
      <Clock time={new Date()}/>
    </div>
  );
}

export default App;

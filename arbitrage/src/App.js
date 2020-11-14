import './App.css';
import Calculator from './components/Calculator';
import Gamedisplay from './components/Gamedisplay';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>Arbitrage Betting Application</h1>
      </header>
      
      <Calculator/>
      <Gamedisplay/>
      <Sidebar/>
    </div>
  );
}

export default App;

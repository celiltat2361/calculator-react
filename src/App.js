import Home from './pages/Home';
import DataContext from './contexts/DataContext.js';


function App() {
  return (
    <div className="App">
    <h1 align="center">Simple Calculator</h1>
      <DataContext>
        <Home />
      </DataContext>

    </div>
  );
}

export default App;

import Home from './pages/Home';
import DataContext from './contexts/DataContext.js';


function App() {
  return (
    <div className="App">
    <h1>Hej</h1>
      <DataContext>
        <Home />
      </DataContext>

    </div>
  );
}

export default App;

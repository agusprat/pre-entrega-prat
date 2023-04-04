import './App.css';
import NavBar from './components/NavBar/NavBar';
import itemListContainer from './components/itemListContainer/itemListContainer';
function App() {
  return (
    <div className="App">
     <NavBar />
     <itemListContainer greeting={'bienvenido'} />
    </div>
  );
}

export default App;

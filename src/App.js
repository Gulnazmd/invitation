
import './App.css';
import Footer from './components/Footer/Footer';
import Builder from './containers/Builder/Builder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Builder/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;

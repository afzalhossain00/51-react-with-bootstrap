import logo from './logo.svg';
import './App.css';
import CardGroup from './components/CardGroup/CardGroup';

function App() {
  return (
    <div className="App">
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <br />
      <br />
      <CardGroup></CardGroup>
      <br />
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default App;

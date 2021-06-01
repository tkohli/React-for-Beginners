// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <Info/>
    <AddItem/>
    </div>
  );
}

function Info(){
  return (
    <div>
      <h1> Inventory manamgement</h1>
      <p>This is my new project</p>
    </div>
  );
}

function AddItem(){
  return(
      <div>
        <form>
          <label for id = 'text-id'>Type Something: </label>
          <input type = 'text' id = 'text-id'></input>
        </form>
      </div>

  );
}

export default App;

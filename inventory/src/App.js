// import logo from './logo.svg';
import './App.css';
import Info from "./info.js"

function App() {
  return (
    <div>
    <Info/>
    <AddItem/>
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

// import logo from './logo.svg';
import './App.css';
import Info from "./info.js"

function App() {
  return (
    <div>
    <Info/>
    <AddItem text = "Tanishka" number ={2}/>
    </div>
  );
}



function AddItem(props){
  const value = props.text;
  return(
      <div>
        <form>
          <label for id = 'text-id'>Type Something: </label>
          <input type = 'text' id = 'text-id' value={value}></input>
        </form>
      </div>

  );
}

export default App;

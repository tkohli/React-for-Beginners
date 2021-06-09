// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import { userState } from 'react';
import SearchBar from "./SearchBar"

function App() {
   const [data,setData] = useState({});

   const updateData = (seachParams) => {
      setData(seachParams);
   };

  return (
    <div>
      <SearchBar callback = {updateData }></SearchBar>
      <p>Name: {"name" in data ? data['name']: "No data to display"}</p>
      <p>Price: {"price" in data ? data['price']: "No data to display"}</p>
      <p>Type: {"type" in data ? data['type']: "No data to display"}</p>
      <p>Brand: {"brand" in data ? data['brand']: "No data to display"}</p>
    </div>
  );
}

export default App;

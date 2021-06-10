// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import { userState } from 'react';
import SearchBar from "./SearchBar";
import AddItem from "./Additem";
import ItemsDisplay from "./ItemsDisplay"

function App() {
   const [filters,setFilters] = useState({});
   const[data, setData] = useState({items:[]});

   const updateFilters = (seachParams) => {
      setFilters(seachParams);
   };

   const addItemToData = (item) => {
      let items = data["items"];
      item.id = items.length;
      items.push(item);
      setData({items:items});
      console.log(data);
   };

  return (
    <div>
      <SearchBar updateSearchParams = { updateFilters }></SearchBar>
      <ItemsDisplay items={data["items"]}/>
      <AddItem addItem = {addItemToData}/>
    </div>
  );
}

export default App;

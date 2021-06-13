// import logo from './logo.svg';
import { useState } from 'react';
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
    <div className='container'>
    <div class='row mt-3'>
        <ItemsDisplay items={data["items"]}/>
        </div>
      <div class='row mt-3'>
        <SearchBar updateSearchParams = { updateFilters }></SearchBar>
      </div>
      
      <div class='row mt-3'>
      <AddItem addItem = {addItemToData}/>
      </div>
    </div>
  );
}

export default App;

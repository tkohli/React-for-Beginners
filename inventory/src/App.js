// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import { userState } from 'react';
import SearchBar from "./SearchBar"
import AddItem from "./Additem"

function App() {
   const [filters,setFilters] = useState({});
   const[data, setData] = useState({intems:[]})

   const updateFilters = (seachParams) => {
      setFilters(seachParams);
   };

  return (
    <div>
      <SearchBar updateSearchParams = { updateFilters }></SearchBar>
      <AddItem/>
    </div>
  );
}

export default App;

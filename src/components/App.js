import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search,setSearch] = useState('')
  const [list,setList] = useState([])


  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then((resp)=> resp.json())
    .then((list)=> {
      setList(list)})
  },[])

  const handleSearch = (newSearch)=>{
    setSearch(newSearch)
  }
  
  return (
    <div className="app">
      <Header search={search} onSearch={handleSearch}/>
      <ListingsContainer search={search} list={list} setList={setList}/>
    </div>
  );
}

export default App;

import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({search, list, setList}) {


  const filteredList = list.filter((item)=> item.description.includes(search))
  const handleDelete = (target)=>{
    const updatedList = filteredList.filter((item) => item.id !== target.id )
    setList(updatedList) 
  }

  return (
    <main>
      <ul className="cards">
        {filteredList.map((item)=> <ListingCard  key={item.id} item={item} onDelete={handleDelete}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;

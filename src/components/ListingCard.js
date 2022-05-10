import React,{useState} from "react";

function ListingCard({item, onDelete}) {
  const { description, image, location } = item;
  const [liked, setLiked] = useState(false)

  const deleteItem = ()=>{

    fetch(`http://localhost:6001/listings/${item.id}`,{
      method: 'DELETE'
    })
    .then((resp)=> resp.json())
    .then(()=> onDelete(item) )

  }

  const handleLike = ()=>{
    setLiked((liked)=> !liked)

  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">

        {liked ? (
          <button className="emoji-button favorite active" onClick={handleLike}>★</button>
        ) : (
          <button className="emoji-button favorite"onClick={handleLike}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={deleteItem}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

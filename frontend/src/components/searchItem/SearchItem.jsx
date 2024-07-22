import { Link } from "react-router-dom";
import React from 'react'
import "./searchItem.css"
const SearchItem = ({item}) => {
  const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgmQbkQQXg5sdyGhxNKkMJ71_7ig_6de3VQ&s"; // URL of the default image
  return (
    <div className='searchItem'>
      
        <img src={item.photos && item.photos.length > 0 ? item.photos[0] : defaultImage}
         alt="" 
         className='siImg'/>
        <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
        </div>
        <div className="siDetails"> 
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
      <div className="siDetailTexts">
      <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
      </div>
        </div>
    </div>
  )
}

export default SearchItem
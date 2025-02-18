import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  // const timer = useCounter(0);
  return (
    <div className="body">
      <div className="filter">
        {/* <p>{timer}</p> */}
        <select 
        onChange={(e)=> { 
            // setRating(e.target.value); console.log(e.target.value)
            console.log(e.target.value);
            const filteredList = resList.filter(
                (res) => res.info.avgRating > e.target.value
              );
              console.log(filteredList)
              setListOfRestaurants(filteredList);
        }} 
        >
          <option value={0}>All</option>
          <option value={4.1}>Rating &gt; 4.1</option>
          <option value={4.2}>Rating &gt; 4.2</option>
          <option value={4.3}>Rating &gt; 4.3</option>
          <option value={4.4}>Rating &gt; 4.4</option>
        </select>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked");

            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 5
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;

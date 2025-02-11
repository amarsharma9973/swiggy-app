import Card from "./components/Card";
import { useState, useEffect } from "react";
import Shimmer from "./components/Shimmer";

const Body = () => {
  const [setCard, setFilteredCard] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredResturant, setFilteredResturant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.1196607&lng=85.390982&carousel=true&third_party_vendor=1"
      );
      const json = await data.json();
      console.log(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredCard(
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredResturant(
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  //Conditional shimmer

  // if (setCard.length === 0){
  //   return <Shimmer/>;
  // }

  return setCard.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* {console.log("textChange")} */}
      <div className="filter">
        <input
          type="search"
          placeholder="Search a restaurant you want..."
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // console.log(searchText);
            const searchfilter = setCard.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredResturant(searchfilter);
          }}
        >
          search
        </button>
        <button
          className="filtertBtn"
          onClick={() => {
            const filteredCard = setCard.filter((res) => res.info.avgRating > 4.3);
            setFilteredResturant(filteredCard);
            console.log(filteredCard);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map((resturant) => (
          <Card key={resturant.info.id} ResData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

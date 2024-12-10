import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import {Link} from "react-router-dom";

const Body = () => {

    // state variable - powerful variable
    const [listofRestarunt, setlistofRestarunt] = useState([]);
    const [filteredRestarunt, setfilteredRestarunt] = useState([]);
    const [searchText, setsearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log(json);
        
        setlistofRestarunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestarunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(listofRestarunt.length === 0) {
        return <Shimmer/>;
    }

  return (
    <div className="body">
      <div className="filter">
      <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setsearchText(e.target.value);
        }}></input>
        <button onClick={() => {
            console.log({searchText})
          const filteredRest =  listofRestarunt.filter((res) => {
            return res?.info?.name.toLowerCase().includes(searchText.toLowerCase()); 
            });
            setfilteredRestarunt(filteredRest);
        }}>search</button>
      </div>
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("btn clicked");
            const filteredList = listofRestarunt.filter(
                (res) => res.info.avgRating >= 4.6
            )
            setfilteredRestarunt(filteredList);
          }}
        >
          Top Ratings
        </button>
      </div>
      <div className="res-container">
        {filteredRestarunt.map((restaraunt) => (
          <Link to = {"/restaurant/" + restaraunt.info.id} key={restaraunt.info.id}><RestaurentCard resData={restaraunt} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

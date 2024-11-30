import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {

    // state variable - powerful variable
    const [listofRestarunt, setlistofRestarunt] = useState(resList);

  return (
    <div className="body">
      {/* <div className="search">search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("btn clicked");
            const filteredList = listofRestarunt.filter(
                (res) => res.info.avgRating >= 4.6
            )
            setlistofRestarunt(filteredList);
          }}
        >
          Top Ratings
        </button>
      </div>
      <div className="res-container">
        {listofRestarunt.map((restaraunt) => (
          <RestaurentCard key={restaraunt.info.id} resData={restaraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;

import RestaurentCard, {withDiscountLabel} from "./RestaurentCard";
import resList from "../utils/mockData";
import { useEffect, useState, useContext} from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  // state variable - powerful variable
  const [listofRestarunt, setlistofRestarunt] = useState([]);
  const [filteredRestarunt, setfilteredRestarunt] = useState([]);
  const [searchText, setsearchText] = useState("");

  const RestaurantCardDiscount = withDiscountLabel(RestaurentCard);
  const {setUserName,loggedInUser} = useContext(UserContext)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);

    setlistofRestarunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestarunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are Offline🗿,😑Please check your Internet Connection
      </h1>
    );
    // console.log(listofRestarunt)
  return listofRestarunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body py-[20px] px-[45px]">
      <div className="filter flex gap-8 items-center pb-6">
        <div className="search flex gap-2 items-center">
          <input
            type="text"
            className="search-box p-1.5 h-6 border border-black text-[12px]"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button className="p-1 h-6 flex items-center justify-center text-[12px] bg-orange-200"
            onClick={() => {
              console.log({ searchText });
              const filteredRest = listofRestarunt.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilteredRestarunt(filteredRest);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn p-2  h-6 flex items-center justify-center text-[12px] bg-orange-200"
          onClick={() => {
            // console.log("btn clicked");
            const filteredList = listofRestarunt.filter(
              (res) => res.info.avgRating >= 4.4
            );
            setfilteredRestarunt(filteredList);
          }}
        >
          Top Ratings
        </button>
        <div className="m-4 p-4 flex gap-1 items-center">
          <label>UserName: </label>
        <input className="border border-orange-200" value={loggedInUser} onChange={(e) => {
          setUserName(e.target.value);
        }}/>
        </div>
      </div>
      <div className="res-container flex flex-wrap gap-6">
        {filteredRestarunt.map((restaraunt) => (
          <Link
            to={"/restaurant/" + restaraunt.info.id}
            key={restaraunt.info.id}
          >
            {/** if the restaurant is having discount then it addes discount label to it */}
            {
              restaraunt.info.aggregatedDiscountInfoV3 ? <RestaurantCardDiscount resData={restaraunt}/> : <RestaurentCard resData={restaraunt} />
            }
            {/* <RestaurentCard resData={restaraunt} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

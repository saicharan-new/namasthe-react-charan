# namasthe react 
https://github.com/namastedev/namaste-react

...
# parcel 
- dev buld 
- local server
- HMR = hot module replacement
- file watching algorithem 0- written in c++
- caching - faster builds
- image optimization
- minification
- bundling
- compress files
- consistant Hashing
- code splitting
- differential bundling - support older browsers
- diagnostic
- error suggestion
- https
- tree shaking - remove unsed code
- different dev and prod bundles


# ep-2 
 - commented code
 // const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [React.createElement("div", { id: "children" }, [
//     React.createElement("h1", { id: "h1" }, "This is namaste React 🗿"),
//     React.createElement("h2", { id: "h2" }, "hi this is child's h2"),
//   ]),React.createElement("div", { id: "children2" }, [
//     React.createElement("h1", { id: "h1" }, "hi this is child's h1"),
//     React.createElement("h2", { id: "h2" }, "hi this is child's h2"),
//   ])]

// );

// // const heading = React.createElement(
// //   "h1",
// //   { id: "heading" },
// //   "hello World From React😉"
// // );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// console.log(parent);

# ep-3 
- // const Head = () => {
//   return <h1>hi</h1>;  // functional component
// };

// const Title = function () {
//   return (
//     <h1 className="title" tabIndex="5">
//       Namste react 🚀🗿
//     </h1>
//   );
// };

// react element
// const jsxheading = <h1> hi </h1> this is react element babael understand this as jsx
// const elem = <spam>React element</spam>;

const title = (
  <h1 className="title" tabIndex="5">
    Namste react 🚀🗿
  </h1>
);

//react components functional component
// component composition ->using component inside a component
const HeadingComponent = () => {
  return (
    <div id="container">
      <h1 className="heading">Namasthe React Functional Component</h1>
      {/* <Title /> */}
      {/* <h2>{100+200}</h2> */}
      
      {title}
    </div>
  );
};


{/* we can also use index as key but its not a good pattern. ex: (restaraunt, index), key is uesed for performance imporvement and also to reduce warnings */}
        {/* not using key(not accepatable warning) <<< index as key <<<<<<< unique id (best practice) */}
        {/* <RestaurentCard resData={resList[0]}/>
            <RestaurentCard resData={resList[1]}/>
            <RestaurentCard resData={resList[2]}/>
            <RestaurentCard resData={resList[3]}/>
            <RestaurentCard resData={resList[4]}/> */}

# React Hooks  - normal js utility functions
- useState()
- useEffect()



restaurantMenu
 {/* Only map over menuList.itemCards if it exists */}
        {/* {menuList?.itemCards?.length > 0 ? (
          menuList.itemCards.map((menu, index) => (
            <li key={index}>{menu.card.info.name}</li>
          ))
        ) : (
          <li>No items available</li>
        )} */}

commented code
import { CDN_URL } from "../utils/constants";
import React from "react";

const fallbackImage = "https://via.placeholder.com/200?text=Image+Unavailable"; // Placeholder image

const RestaurentCard = React.memo((props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info || {};
  const { deliveryTime } = resData?.info?.sla || {};

  return (
    <div className="res-card w-[200px] p-4 h-[320px] rounded-[4px] flex flex-col justify-between bg-gray-50 hover:bg-gray-200">
      <img
        className="res-img w-full h-[120px] rounded-xl"
        src={
          cloudinaryImageId ? `${CDN_URL}${cloudinaryImageId}` : fallbackImage
        }
        alt={`Image of ${name}`}
      />
      <h3
        className="font-semibold text-lg pt-1 line-clamp-1 text-ellipsis"
        title={name}
      >
        {name}
      </h3>
      <h4
        className="text-wrap h-[48px] text-ellipsis line-clamp-2"
        title={cuisines?.join(", ")}
      >
        {cuisines?.join(", ")}
      </h4>
      <h4
        className={`font-bold ${avgRating >= 4
            ? "text-green-600"
            : avgRating >= 3
              ? "text-yellow-500"
              : "text-red-600"
          }`}
      >
        {avgRating ?? "N/A"}
      </h4>
      <h5>
        {deliveryTime
          ? `${deliveryTime} minutes`
          : "Delivery time not available"}
      </h5>
      <h5>{costForTwo ? costForTwo : "Cost not available"}</h5>
    </div>
  );
});

export default RestaurentCard;


body

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (isUpdate = false) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&page=${page}`
      );

      const json = await response.json();
      const newRestaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants((prev) => (isUpdate ? [...prev, ...newRestaurants] : newRestaurants));
      setFilteredRestaurants((prev) => (isUpdate ? [...prev, ...newRestaurants] : newRestaurants));

      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      if (scrollHeight - scrollTop <= clientHeight + 100 && !loading) {
        fetchData(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  if (!onlineStatus) {
    return <h1>Looks like you are Offline🗿,😑Please check your Internet Connection</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body py-[20px] px-[45px]">
      <div className="filter flex gap-8 items-center pb-6">
        <div className="search flex gap-2 items-center">
          <input
            type="text"
            className="search-box p-1.5 h-6 border border-black text-[12px]"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="p-1 h-6 flex items-center justify-center text-[12px] bg-orange-200"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn p-2 h-6 flex items-center justify-center text-[12px] bg-orange-200"
          onClick={() => {
            const filtered = listOfRestaurants.filter((res) => res.info.avgRating >= 4.4);
            setFilteredRestaurants(filtered);
          }}
        >
          Top Ratings
        </button>
      </div>
      <div className="res-container flex flex-wrap gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            <RestaurentCard resData={restaurant} />
          </Link>
        ))}
      </div>
      {loading && <p>Loading more restaurants...</p>}
    </div>
  );
};

export default Body;


from restaurantMenu

{/* <h3>Menu</h3>
      <ul className="flex flex-col gap-2" >
        {itemCards.map((menu) => <li key={menu.card.info.id}>{menu.card.info.name} {"for Rs : "}{menu.card.info.defaultPrice/100 || menu.card.info.price/100}/-</li> )}
      </ul> */}
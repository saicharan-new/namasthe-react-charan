import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";


// const stylecard = {
//     background: "#f0f0f0"
//   }

const fallbackImage = "https://via.placeholder.com/200?text=Image+Unavailable"; // Placeholder image

const RestaurentCard = (props) => {
    // console.log(props);
    //(props) => {resName,cuisine} or 
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines,avgRating,costForTwo} = resData?.info;
    const{deliveryTime} = resData?.info?.sla;
    // console.log("ddddd"+resData?.info)
    const {loggedInUser} = useContext(UserContext)
    return (
      <div className="res-card w-[200px] p-4 h-[320px] rounded-[4px] flex flex-col justify-between bg-gray-50 hover:bg-gray-200 relative">
        <img className="res-img w-full h-[120px] rounded-xl" src={cloudinaryImageId ? `${CDN_URL}${cloudinaryImageId}` : fallbackImage} alt={"😑 image not fetched from "+name}/>
        <h3 className="font-semibold text-lg pt-1 line-clamp-1 text-ellipsis" title={name}>{name}</h3>
        <h4 className="text-wrap h-[48px] text-ellipsis line-clamp-2" title={cuisines.join(", ")}>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h5>{deliveryTime} minutes</h5>
        <h5>{costForTwo}</h5>
        <h5>user: {loggedInUser}</h5>
      </div>
    )
  }

  // higher order component
  // takes input from restrocard and gives output wuth discount values or promoted restro card

   export const withDiscountLabel = (RestaurentCard) => {
     return (props) => {
      const {resData} = props;
      const{subHeader,header} = resData?.info?.aggregatedDiscountInfoV3;
      // background: linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%);
    // width: 83%;
      return (
        <div className="relative">
          <RestaurentCard {...props}/>
          <label className="absolute font-semibold text-white bg-gradient-to-b from-[rgba(27,30,36,0)] via-[rgba(0,0,0,0.5)] to-[rgb(27,30,36)]  rounded-b-xl  z-10 top-[112px] w-[84%] left-[17px]">{header} {subHeader}</label>
        </div>
      )
     }
  }

  export default RestaurentCard;
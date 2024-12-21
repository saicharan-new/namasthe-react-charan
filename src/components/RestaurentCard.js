import { CDN_URL } from "../utils/constants";

// const stylecard = {
//     background: "#f0f0f0"
//   }

const RestaurentCard = (props) => {
    // console.log(props);
    //(props) => {resName,cuisine} or 
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines,avgRating,costForTwo} = resData?.info;
    const{deliveryTime} = resData?.info?.sla;
    // console.log(props)
    return (
      <div className="res-card w-[200px] p-4 h-[320px] rounded-[4px] flex flex-col justify-between bg-gray-50 hover:bg-gray-200">
        <img className="res-img w-full h-[120px] rounded-xl" src={CDN_URL+cloudinaryImageId} alt={"😑 image not fetched from "+name}/>
        <h3 className="font-semibold text-lg pt-1 line-clamp-1 text-ellipsis" title={name}>{name}</h3>
        <h4 className="text-wrap h-[48px] text-ellipsis line-clamp-2" title={cuisines.join(", ")}>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h5>{deliveryTime} minutes</h5>
        <h5>{costForTwo}</h5>
      </div>
    )
  }

  export default RestaurentCard;
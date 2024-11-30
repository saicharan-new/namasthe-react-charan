import { CDN_URL } from "../utils/constants";

const stylecard = {
    background: "#f0f0f0"
  }

const RestaurentCard = (props) => {
    // console.log(props);
    //(props) => {resName,cuisine} or 
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines,avgRating,costForTwo} = resData?.info;
    const{deliveryTime} = resData?.info?.sla;
    // console.log(props)
    return (
      <div className="res-card" style={stylecard}>
        <img className="res-img" src={CDN_URL+cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h5>{deliveryTime} minutes</h5>
        <h5>{costForTwo}</h5>
      </div>
    )
  }

  export default RestaurentCard;
import { useState ,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState(true)
  // console.log("header rendered")
  // if thr dependency [] has btnNameReact then => called every time btnNameReact is updated.
  // useEffect(() => {
  //    console.log("useEffect rendered")
  // }, [btnNameReact]);
const onlineStatus = useOnlineStatus();
const {loggedInUser} = useContext(UserContext)
  console.log(loggedInUser)
  return (
    <div className="flex items-center justify-between border border-black h-20 shadow-lg px-[45px] sm: bg-orange-200 lg:bg-orange-100" >
      <div className="w-100">
        <Link to = "/"><img
          className="w-14"
          src = {LOGO_URL} title="home"
        /></Link>
      </div>
      <div className="nav-items">
        <ul className="flex items-center p-3 gap-4">
          <li>Online Status:{onlineStatus ? "🟢": "🔴"}</li>
          <li><Link to = "/">home</Link></li>
          <li><Link to = "/about">About Us</Link></li>
          <li><Link to = "/contact">Contact Us</Link></li>
          <li><Link to = "/grocery">Grocery</Link></li>
          <li>Cart</li>
          <button className="login-btn p-2 w-fit h-fit " onClick={() =>{
            setbtnNameReact(!btnNameReact);
          }}>{btnNameReact ? 'Login' : 'Logout'}</button>
          <li className="font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

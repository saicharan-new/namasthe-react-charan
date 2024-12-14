import { useState ,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState(true)
  console.log("header rendered")
  // if thr dependency [] has btnNameReact then => called every time btnNameReact is updated.
  // useEffect(() => {
  //    console.log("useEffect rendered")
  // }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo">
        <Link to = "/"><img
          className="logo-img"
          src = {LOGO_URL} title="home"
        /></Link>
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li><Link to = "/">home</Link></li>
          <li><Link to = "/about">About Us</Link></li>
          <li><Link to = "/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button className="login-btn" onClick={() =>{
            setbtnNameReact(!btnNameReact);
          }}>{btnNameReact ? 'Login' : 'Logout'}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

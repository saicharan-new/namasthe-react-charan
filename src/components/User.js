import {useState} from "react";
const User = (props) => {
    const [count, setcount] = useState(0);
    return (
        <div className="user-card">
            <h1>Count= {count}</h1>
            <h2>Name: {props.name}</h2>
            <h3>Location: Anantapur</h3>
            <h4>contact: 9963878703</h4>
        </div>
    )
}

export default User;

import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        // console.log("parent constructor")
    }

    componentDidMount() {
        // console.log("parent component did mount")
    }

    render() {
        // console.log("parent render")
        return(
            <div>
                <h1>ABOUT</h1>
                <h2>THis is namaste React web Series</h2>
                <UserClass name={"charan from class"}/>
            </div>
        )
    }
}



// const About = () => {
//     return(
//         <div>
//             <h1>ABOUT</h1>
//             <h2>THis is namaste React web Series</h2>
//             <UserClass name={"charan from class"} location={"Anantapur from class"}/>
//         </div>
//     )
// }

export default About;
import React from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Name",
                location: "default",
                avatar_url: "dummy"
            }
        }
    }

   async componentDidMount() {
        const data = await fetch("https://api.github.com/users/saicharan-new");
        const json = await data.json();
        // console.log(json);
        this.setState({
            userInfo:json
        })
    }

componentDidUpdate() {
  // console.log("component did update")
}

componentWillUnmount() {
  // is used to clear the code while leaving the component in functional coponents we have useEffect 's return method to clear code return () => {...}
}

  render() {
    const{name, location, blog, avatar_url} = this.state.userInfo
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
        <h4>contact: {blog}</h4>
      </div>
    );
  }
}

export default UserClass;
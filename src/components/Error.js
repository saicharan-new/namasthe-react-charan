import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    // console.log(error)
    return (
        <div>
            <h1>😉😁Error</h1>
            <h2>..Ooops!!</h2>
            <h3>{error.status}😒 {error.statusText}🤔<br/>😑{error.data}</h3>
        </div> 
    )
}

export default Error;

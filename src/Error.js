import { useRouteError } from "react-router-dom";
const Error = () =>{
  const error = useRouteError();
  return(
    <div>
      <h1>404 Error</h1>
      //We are destructuring the useRouteError function
      <h3>{error.status + " : " + error.statusText}</h3>
      
    </div>

  )
}

export default Error;
import { Router, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log("Error-->", error);
  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {error.status} : {error.statusText}
      </p>
    </>
  );
};

export default Error;

import React from "react";

const Grocery = () => {
  return (
    <>
      <h1>This is for showing the code splitting / lazy loading</h1>
      <h2>
        Assuming this is complete different flow like instamart so this
        component will be lazy loaded to improve performance
      </h2>
    </>
  );
};

export default Grocery;

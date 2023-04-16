import React from "react";
import { Link } from "react-router-dom";

const OtherPage = () => {
  return (
    <div>
      <p></p>
      I'm the other page!
      <p></p>
      <Link to="/" className="App-link-2">Go back home</Link>
    </div>
  );
};

export default OtherPage;

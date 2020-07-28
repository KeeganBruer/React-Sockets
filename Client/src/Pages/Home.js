import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3>Products</h3>
      <Link to="/test" >Go to product</Link>
    </div>
  );
};
export default Home;
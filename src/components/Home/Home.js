import React from "react";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import FeatureServices from "./Feature Services/FeatureServices";

import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeatureServices></FeatureServices>
      <Services></Services>
      <Featured></Featured>
    </div>
  );
};

export default Home;

import { useEffect } from "react";
import Advantage from "components/views/homeViews/Advantage";
// import Background from "components/views/homeViews/Background/Background";
// import Background2 from "components/views/homeViews/Background2/Background2";
import Brief from "components/views/homeViews/Brief/Brief";
import Cases from "components/views/homeViews/Cases";
import Control from "components/views/homeViews/Control";
import Convenient from "components/views/homeViews/Convenient";
import Delivery from "components/views/homeViews/Delivery/Delivery";
import Hero from "components/views/homeViews/Hero/Hero";
import MapClose from "components/views/homeViews/MapClose/MapClose";
import TrafficTypes from "components/views/homeViews/TrafficTypes";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      {/* <Background /> */}
      <Advantage />
      {/* <Background2 /> */}
      <Convenient />
      <TrafficTypes />
      <MapClose />
      <Delivery />
      <Control />
      <Cases />
      <Brief />
    </>
  );
};

export default Homepage;

import Advantage from "components/views/homeViews/Advantage";
import Background from "components/views/homeViews/Background/Background";
import Brief from "components/views/homeViews/Brief/Brief";
import Cases from "components/views/homeViews/Cases";
import Control from "components/views/homeViews/Control";
import Convenient from "components/views/homeViews/Convenient";
import Delivery from "components/views/homeViews/Delivery/Delivery";
import Hero from "components/views/homeViews/Hero/Hero";
import MapFar from "components/views/homeViews/MapFar/MapFar";
import MapMiddle from "components/views/homeViews/MapMiddle/MapMiddle";
import MapClose from "components/views/homeViews/MapClose/MapClose";
import TrafficTypes from "components/views/homeViews/TrafficTypes";
import Team from "components/views/homeViews/Team/Team";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Background />
      <Advantage />
      <Background />
      <Convenient />
      <TrafficTypes />
      <MapFar />
      <MapMiddle />
      <MapClose />
      <Delivery />
      <Control />
      <Cases />
      <Team />
      <Brief />
    </>
  );
};

export default Homepage;

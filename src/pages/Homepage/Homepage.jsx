import Advantage from "components/views/Advantage";
import Background from "components/views/Background/Background";
import Brief from "components/views/Brief/Brief";
import Cases from "components/views/Cases";
import Control from "components/views/Control";
import Convenient from "components/views/Convenient";
import Delivery from "components/views/Delivery/Delivery";
import Hero from "components/views/Hero/Hero";
import MapFar from "components/views/MapFar/MapFar";
import MapMiddle from "components/views/MapMiddle/MapMiddle";
import MapClose from "components/views/MapClose/MapClose";
import TrafficTypes from "components/views/TrafficTypes";
import Team from "components/views/Team/Team";

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

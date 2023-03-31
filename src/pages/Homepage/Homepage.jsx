import Advantage from "components/views/Advantage";
import Brief from "components/views/Brief/Brief";
import Cases from "components/views/Cases";
import Control from "components/views/Control";
import Convenient from "components/views/Convenient";
import Delivery from "components/views/Delivery/Delivery";
import Hero from "components/views/Hero/Hero";
import TrafficTypes from "components/views/TrafficTypes";
import Team from "components/views/Team/Team";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Advantage />
      <Convenient />
      <TrafficTypes />
      <Delivery />
      <Control />
      <Cases />
      <Team />
      <Brief />
    </>
  );
};

export default Homepage;

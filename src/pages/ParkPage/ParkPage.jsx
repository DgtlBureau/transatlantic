import Brief from "components/views/homeViews/Brief/Brief";
import Advantage from "components/views/parkViews/Advantage/Advantage";
import Cargo from "components/views/parkViews/Cargo/Cargo";
import Containers from "components/views/parkViews/Containers/Containers";
import Hero from "components/views/parkViews/Hero/Hero";
import Info from "components/views/parkViews/Info/Info";
import React, { useEffect } from "react";

const ParkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Advantage />
      <Containers />
      <Info />
      <Cargo />
      <Brief />
    </>
  );
};

export default ParkPage;

import Brief from "components/views/homeViews/Brief/Brief";
import Advantage from "components/views/parkViews/Advantage/Advantage";
import Cargo from "components/views/parkViews/Cargo/Cargo";
import Containers from "components/views/parkViews/Containers/Containers";
import Hero from "components/views/parkViews/Hero/Hero";
import Info from "components/views/parkViews/Info/Info";
import React from "react";

const ParkPage = () => {
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

import Brief from "components/views/homeViews/Brief/Brief";
import Containers from "components/views/serviceViews/Containers/Containers";
import Hero from "components/views/serviceViews/Hero/Hero";
import Process from "components/views/serviceViews/Process/Process";
import Route from "components/views/serviceViews/Route/Route";
import React from "react";

const ServicePage = () => {
  return (
    <>
      <Hero />
      <Process />
      <Route />
      <Containers />
      <Brief />
    </>
  );
};

export default ServicePage;

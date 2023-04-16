import Hero from "components/views/aboutViews/Hero/Hero";
import Process from "components/views/aboutViews/Process/Process";
import Delivery from "components/views/aboutViews/Delivery/Delivery";
import React from "react";
import Info from "components/views/aboutViews/Info/Info";

const AboutPage = () => {
  return (
    <>
      <Hero />
      <Process />
      <Delivery />
      <Info />
    </>
  );
};

export default AboutPage;

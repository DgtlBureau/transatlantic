import { useEffect } from "react";
import Brief from "components/views/homeViews/Brief/Brief";
import Containers from "components/views/serviceViews/Containers/Containers";
import Hero from "components/views/serviceViews/Hero/Hero";
import Process from "components/views/serviceViews/Process/Process";
import Route from "components/views/serviceViews/Route/Route";

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

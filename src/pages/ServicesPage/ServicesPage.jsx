import { useEffect } from "react";
import Brief from "components/views/homeViews/Brief/Brief";
import Hero from "components/views/servicesViews/Hero/Hero";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Brief />
    </>
  );
};

export default ServicesPage;

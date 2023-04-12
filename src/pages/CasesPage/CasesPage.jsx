import { useEffect } from "react";
import Hero from "components/views/casesView/Hero/Hero";
import Brief from "components/views/homeViews/Brief/Brief";

const CasesPage = () => {
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

export default CasesPage;

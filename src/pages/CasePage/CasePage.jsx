import { useEffect } from "react";
import Hero from "components/views/caseViews/Hero/Hero";
import Process from "components/views/caseViews/Process/Process";
import Result from "components/views/caseViews/Result/Result";
import Route from "components/views/caseViews/Route/Route";
import Task from "components/views/caseViews/Task/Task";
import Brief from "components/views/homeViews/Brief/Brief";

const CasePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Task />
      <Process />
      <Route />
      <Result />
      <Brief />
    </>
  );
};

export default CasePage;

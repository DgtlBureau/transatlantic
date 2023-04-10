import Hero from "components/views/caseViews/Hero/Hero";
import Process from "components/views/caseViews/Process/Process";
import Result from "components/views/caseViews/Result/Result";
import Route from "components/views/caseViews/Route/Route";
import Task from "components/views/caseViews/Task/Task";

const CasePage = () => {
  return (
    <>
      <Hero />
      <Task />
      <Process />
      <Route />
      <Result />
    </>
  );
};

export default CasePage;

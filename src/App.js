import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import { useEffect } from "react";

const Layouts = lazy(() => import("./components/common/Layouts/Layouts"));
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const CasesPage = lazy(() => import("./pages/CasesPage/CasesPage"));
const CasePage = lazy(() => import("./pages/CasePage/CasePage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const ParkPage = lazy(() => import("./pages/ParkPage/ParkPage"));
// const ServicesPage = lazy(() =>
//   import('./pages/ServicesPage/ServicesPage')
// );

const ServicePage = lazy(() => import("./pages/ServicePage/ServicePage"));

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Suspense>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<Homepage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="cases" element={<CasesPage />} />
            <Route path="cases/:caseID" element={<CasePage />} />
            {/* <Route path="/services" element={<ServicesPage />} /> */}
            <Route path="cargo" element={<ServicePage />} />
            <Route path="park" element={<ParkPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Layouts from "components/common/Layouts";
import Homepage from "pages/Homepage";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import CasesPage from "pages/CasesPage/CasesPage";
import CasePage from "pages/CasePage/CasePage";
import AboutPage from "pages/AboutPage/AboutPage";
import ParkPage from "pages/ParkPage/ParkPage";
// import ServicesPage from "pages/ServicesPage/ServicesPage";
import ServicePage from "pages/ServicePage/ServicePage";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/cases/:caseID" element={<CasePage />} />
          {/* <Route path="/services" element={<ServicesPage />} /> */}
          <Route path="/cargo" element={<ServicePage />} />
          <Route path="/park" element={<ParkPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

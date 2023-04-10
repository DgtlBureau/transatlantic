import { Routes, Route } from "react-router-dom";
import Layouts from "components/common/Layouts";
import Homepage from "pages/Homepage";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import CasesPage from "pages/CasesPage/CasesPage";
import CasePage from "pages/CasePage/CasePage";
import ServicesPage from "pages/ServicesPage/ServicesPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/cases/:id" element={<CasePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

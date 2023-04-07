import Layouts from "components/common/Layouts";
import Homepage from "pages/Homepage";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom/client";
import App from "./App";
import Homepage from "pages/Homepage/Homepage";
import ServicePage from "pages/ServicePage/ServicePage";
// import ServicesPage from "pages/ServicesPage/ServicesPage";
import Layouts from "components/common/Layouts/Layouts";
import CasePage from "pages/CasePage/CasePage";
import CasesPage from "pages/CasesPage/CasesPage";
import AboutPage from "pages/AboutPage/AboutPage";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import ParkPage from "pages/ParkPage/ParkPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        lazy: () => import("./pages/Homepage/Homepage"),
      },
      {
        path: "/about",
        element: <AboutPage />,
        lazy: () => import("./pages/AboutPage/AboutPage"),
      },
      {
        path: "/cases",
        element: <CasesPage />,
        lazy: () => import("./pages/CasesPage/CasesPage"),
      },
      {
        path: "/cases/caseID",
        element: <CasePage />,
        lazy: () => import("./pages/CasePage/CasePage"),
      },
      {
        path: "/cargo",
        element: <ServicePage />,
        lazy: () => import("./pages/ServicePage/ServicePage"),
      },
      // {
      //   path: "/services",
      //   element: <ServicesPage />,
      //   lazy: () => import(""),
      // },

      {
        path: "/contacts",
        element: <ContactsPage />,
        lazy: () => import("./pages/ContactsPage/ContactsPage"),
      },
      {
        path: "/park",
        element: <ParkPage />,
        lazy: () => import("./pages/ParkPage/ParkPage"),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </HelmetProvider>
  </React.StrictMode>
);

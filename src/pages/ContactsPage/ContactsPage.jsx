import { useEffect } from "react";
import Hero from "components/views/contactsView/Hero/Hero";
import Brief from "components/views/homeViews/Brief/Brief";

const ContactsPage = () => {
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

export default ContactsPage;

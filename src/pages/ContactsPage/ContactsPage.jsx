import { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "components/views/contactsView/Hero/Hero";
import Brief from "components/views/homeViews/Brief/Brief";
import omgImg from "assets/favicon-32x32.png";

const ContactsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Fragment>
        <Helmet>
          <title>Контакты компании Трансатлантик</title>
          <meta
            name="description"
            content="Контактные данные компании Трансатлантик"
          />
          <meta property="og:type" content="webapp" />
          <meta property="og:title" content="Контакты компании Трансатлантик" />
          <meta
            property="og:description"
            content="Контактные данные компании Трансатлантик"
          />
          <meta property="og:image" content={omgImg} />
        </Helmet>
      </Fragment>
      <Hero />
      <Brief />
    </>
  );
};

export default ContactsPage;

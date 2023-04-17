import { Helmet } from "react-helmet-async";
import { Fragment } from "react";
import Hero from "components/views/aboutViews/Hero/Hero";
import Process from "components/views/aboutViews/Process/Process";
import Delivery from "components/views/aboutViews/Delivery/Delivery";
import Info from "components/views/aboutViews/Info/Info";
import omgImg from "assets/favicon-32x32.png";

const AboutPage = () => {
  return (
    <>
      <Fragment>
        <Helmet>
          <title>О компании Трансатлантик</title>
          <meta
            name="description"
            content="Трансатлантик это 50 специалистов по международной логистике под ключ, сотрудничество с нами - это гарантия безопасной и эффективной транспортировки вашего груза."
          />
          <meta property="og:type" content="webapp" />
          <meta property="og:title" content="О компании Трансатлантик" />
          <meta
            property="og:description"
            content="Трансатлантик это 50 специалистов по международной логистике под ключ, сотрудничество с нами - это гарантия безопасной и эффективной транспортировки вашего груза."
          />
          <meta property="og:image" content={omgImg} />
        </Helmet>
      </Fragment>
      <Hero />
      <Process />
      <Delivery />
      <Info />
    </>
  );
};

export default AboutPage;

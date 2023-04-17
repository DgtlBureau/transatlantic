import { Fragment, useEffect } from "react";
import Brief from "components/views/homeViews/Brief/Brief";
import Containers from "components/views/serviceViews/Containers/Containers";
import Hero from "components/views/serviceViews/Hero/Hero";
import Process from "components/views/serviceViews/Process/Process";
import Route from "components/views/serviceViews/Route/Route";
import { Helmet } from "react-helmet-async";
import omgImg from "assets/favicon-32x32.png";

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Fragment>
        <Helmet>
          <title>
            Международные перевозки грузов в контейнерах 40 и 20 футов от
            компании Трансатлантик
          </title>
          <meta
            name="description"
            content="Перевозка грузов в контейнерах 40 и 20 футов по морю и железнодорожным путям в Россию и за ее границы с гибкой и удобной логистикой для клиентов. Лояльная система оплаты. Перевезем ваш груз под ключ – Трансатлантик"
          />
          <meta property="og:type" content="webapp" />
          <meta
            property="og:title"
            content="Международные перевозки грузов в контейнерах 40 и 20 футов от компании Трансатлантик"
          />
          <meta
            property="og:description"
            content="Перевозка грузов в контейнерах 40 и 20 футов по морю и железнодорожным путям в Россию и за ее границы с гибкой и удобной логистикой для клиентов. Лояльная система оплаты. Перевезем ваш груз под ключ – Трансатлантик"
          />
          <meta property="og:image" content={omgImg} />
        </Helmet>
      </Fragment>
      <Hero />
      <Process />
      <Route />
      <Containers />
      <Brief />
    </>
  );
};

export default ServicePage;

import { servicesPage } from "constants";
import { useParams } from "react-router-dom";
import styles from "./containers.module.css";

const Containers = () => {
  const { id } = useParams();
  const serviceEl = servicesPage?.find((el) => el.id === Number(id)) || {};
  const containers = serviceEl?.containers?.list || [];
  const dimensions = serviceEl?.containers?.standart?.dimensions || [];

  return (
    <section className={styles.containers}>
      <div className={styles.containers__container}>
        <div className={styles.containers__left}>
          <h3 className={styles.containers__title}>
            {serviceEl?.containers?.title}
          </h3>
        </div>
        <div className={styles.containers__right}>
          <div className={styles.standart}>
            <h3 className={styles.standart__title}>
              {serviceEl?.containers?.standart?.heading}
            </h3>
            <div className={styles.standart__wrapper}>
              <img
                src={serviceEl?.containers?.standart?.img}
                alt="img"
                className={styles.standart__img}
              />
            </div>
            <p className={styles.standart__descr}>
              {serviceEl?.containers?.standart?.descr}
            </p>
          </div>
          <div className={styles.dimensions}>
            <h5 className={styles.dimensions__title}>
              {serviceEl?.containers?.standart?.dimensionsHeading}
            </h5>
            <ul className={styles.dimensions__list}>
              {dimensions.map(({ id, text, bold }) => {
                return (
                  <li key={id} className={styles.dimensions__item}>
                    <p className={styles.dimensions__text}>
                      <span className={styles.dimensions__bold}>{bold}</span>
                      {text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className={styles.containers__list}>
            {containers?.map(({ id, heading, img, descr, alt }) => {
              return (
                <li key={id} className={styles.containers__item}>
                  <h4 className={styles.containers__heading}>{heading}</h4>
                  <div className={styles.containers__wrapper}>
                    <img
                      src={img}
                      alt={alt}
                      className={styles.containers__img}
                    />
                  </div>
                  <p className={styles.containers__text}>{descr}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Containers;

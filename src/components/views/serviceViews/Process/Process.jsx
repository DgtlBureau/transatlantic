// import { useParams } from "react-router-dom";
import { servicesPage } from "constants";
import styles from "./process.module.css";

const Process = () => {
  // const { id } = useParams();
  // const serviceEl = servicesPage?.find((el) => el.id === Number(id)) || {};
  const serviceEl = servicesPage?.find((el) => el.path === "/cargo") || {};

  const services = serviceEl?.process?.services;

  return (
    <section className={styles.process}>
      <div className={styles.process__container}>
        <div className={styles.process__left}>
          <h3 className={styles.process__title}>{serviceEl?.process?.title}</h3>
        </div>
        <div className={styles.process__right}>
          <div className={styles.process__cards}>
            {services?.map(({ id, heading, list, subdescr }) => {
              return (
                <div key={id} className={styles.process__card}>
                  <h4 className={styles.process__heading}>{heading}</h4>
                  <ul className={styles.process__list}>
                    {list?.map(({ id, text }) => {
                      return (
                        <li key={id} className={styles.process__item}>
                          <span className={styles.process__dot}>•</span>
                          <p className={styles.process__text}>{text}</p>
                        </li>
                      );
                    })}
                  </ul>
                  <p className={styles.process__subdescr}>{subdescr}</p>
                </div>
              );
            })}
          </div>
          <p className={styles.process__descr}>{serviceEl?.process?.descr}</p>
        </div>
      </div>
    </section>
  );
};

export default Process;

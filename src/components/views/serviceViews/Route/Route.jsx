// import { useParams } from "react-router-dom";
import { servicesPage } from "constants";
import styles from "./route.module.css";

const Route = () => {
  // const { id } = useParams();
  // const serviceEl = servicesPage?.find((el) => el.id === Number(id)) || {};
  const serviceEl = servicesPage?.find((el) => el.path === "/cargo") || {};
  const routes = serviceEl?.route?.routes;

  return (
    <section className={styles.route}>
      <div className={styles.route__container}>
        <div className={styles.route__left}>
          <h3 className={styles.route__title}>{serviceEl?.route?.title}</h3>
        </div>
        <div className={styles.route__right}>
          <ul className={styles.route__list}>
            {routes?.map(({ id, to, from }) => {
              return (
                <li key={id} className={styles.route__item}>
                  <h4 className={styles.route__from}>{from}</h4>
                  <p className={styles.route__to}>{to}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Route;

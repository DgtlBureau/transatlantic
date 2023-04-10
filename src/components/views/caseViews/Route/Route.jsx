import { useParams } from "react-router-dom";
import { casesPage } from "constants";
import styles from "./route.module.css";

const Route = () => {
  const { id } = useParams();
  const caseEl = casesPage?.find((el) => el.id === Number(id)) || {};
  const descrs = caseEl?.route?.descr;

  return (
    <section className={styles.route}>
      <div className={styles.route__container}>
        <div className={styles.route__left}>
          <h3 className={styles.route__title}>{caseEl?.route?.title}</h3>
        </div>
        <div className={styles.route__right}>
          <ul className={styles.route__list}>
            {descrs?.map(({ id, text }) => {
              return (
                <li key={id} className={styles.route__item}>
                  <p className={styles.route__descr}>{text}</p>
                </li>
              );
            })}
          </ul>
          <div className={styles.route__bottom}>
            <h4 className={styles.route__heading}>{caseEl?.route?.from}</h4>
            <p className={styles.route__subheading}>{caseEl?.route?.to}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Route;

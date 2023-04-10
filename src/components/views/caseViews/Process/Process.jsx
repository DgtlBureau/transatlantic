import { useParams } from "react-router-dom";
import { casesPage } from "constants";
import styles from "./process.module.css";

const Process = () => {
  const { id } = useParams();
  const caseEl = casesPage?.find((el) => el.id === Number(id)) || {};
  const descrs = caseEl?.process?.descr;

  return (
    <section className={styles.process}>
      <div className={styles.process__container}>
        <div className={styles.process__left}>
          <h3 className={styles.process__title}>{caseEl?.process?.title}</h3>
        </div>
        <div className={styles.process__right}>
          <ul className={styles.process__list}>
            {descrs?.map(({ id, text }) => {
              return (
                <li key={id} className={styles.process__item}>
                  <p className={styles.process__descr}>{text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Process;

import { casesPage } from "constants";
import { useParams } from "react-router-dom";
import styles from "./task.module.css";

const Task = () => {
  const { id } = useParams();
  const caseEl = casesPage?.find((el) => el.id === Number(id)) || {};
  const conditions = caseEl?.tasks?.conditions || [];

  return (
    <section className={styles.task}>
      <div className={styles.task__container}>
        <div className={styles.task__left}>
          <h3 className={styles.task__title}>{caseEl?.tasks?.title}</h3>
        </div>
        <div className={styles.task__right}>
          <p className={styles.task__descr}>{caseEl?.tasks?.descr}</p>
          <ul className={styles.task__list}>
            {conditions?.map(({ id, heading, text }) => {
              return (
                <li key={id} className={styles.task__item}>
                  <h4 className={styles.task__heading}>{heading}</h4>
                  <p className={styles.task__text}>{text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Task;

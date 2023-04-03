import { Teams } from "../../../constants";
import styles from "./team.module.css";

const Team = () => {
  return (
    <section className={styles.team}>
      <div className={styles.team__container}>
        <div className={styles.team__top}>
          <h2 className={styles.team__title}>Наша команда</h2>
          <p className={styles.team__descr}>
            Сплоченный коллектив и четкие цели помогли нам вырасти во время
            пандемии Covid-19
          </p>
        </div>
        <div className={styles.team__wrapper}>
          <ul className={styles.team__list}>
            {Teams?.map(({ id, name, business, avatar }) => {
              return (
                <li key={id} className={styles.team__item}>
                  <img
                    src={avatar}
                    alt="avatar"
                    className={styles.team__avatar}
                  />
                  <div className={styles.team__info}>
                    <h5 className={styles.team__name}>{name}</h5>
                    <span className={styles.team__business}>{business}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;

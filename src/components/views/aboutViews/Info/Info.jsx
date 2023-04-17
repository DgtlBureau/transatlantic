import styles from "./info.module.css";
import cn from "classnames";

const Info = () => {
  return (
    <section className={styles.process}>
      <div className={styles.process__container}>
        <div className={styles.process__left}>
          <h3 className={styles.process__title}>Реквизиты</h3>
        </div>
        <div className={styles.process__right}>
          <div className={cn(styles.process__subdescr, styles.process__list)}>
            <p className={styles.process__text}>Наши данные:</p>
            <p className={styles.process__text}>ООО «ТрансАтлантик»</p>
            <p className={styles.process__text}>
              Юридический адрес: 620908, Свердловская область, г. Екатеринбург,
              п. Шувакиш, ул. Шитовская, д.14
            </p>
            <p className={styles.process__text}>
              Фактический адрес: 620014, Свердловская область, г. Екатеринбург,
              ул. Шейнкмана, 55, оф. 4.14
            </p>
            <p className={styles.process__text}>ОГРН: 1169658095419</p>
            <p className={styles.process__text}>ИНН: 6678074723</p>
            <p className={styles.process__text}>КПП: 667801001</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;

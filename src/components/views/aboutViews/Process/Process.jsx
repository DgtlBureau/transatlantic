import styles from "./process.module.css";

const Process = () => {
  return (
    <section className={styles.process}>
      <div className={styles.process__container}>
        <div className={styles.process__left}>
          <h3 className={styles.process__title}>Кто мы</h3>
        </div>
        <div className={styles.process__right}>
          <div className={styles.process__cards}>
            <div className={styles.process__card}>
              <h4 className={styles.process__heading}>
                Мы всегда рядом, даже если вы далеко
              </h4>
              <ul className={styles.process__list}>
                <li className={styles.process__item}>
                  <p className={styles.process__text}>За 7 лет с открытия:</p>
                </li>
                <li className={styles.process__item}>
                  <span className={styles.process__dot}>•</span>
                  <p className={styles.process__text}>
                    Штат наших сотрудников вырос от 2 до 60 человек, работаем из
                    3 городов России;
                  </p>
                </li>
                <li className={styles.process__item}>
                  <span className={styles.process__dot}>•</span>
                  <p className={styles.process__text}>
                    Мы перевезли 47 000 контейнеров или 1 029 600 кг грузов
                    наших клиентов;
                  </p>
                </li>
                <li className={styles.process__item}>
                  <span className={styles.process__dot}>•</span>
                  <p className={styles.process__text}>
                    Приобрели более 800 контейнеров для удобства перевозок наших
                    клиентов и партнеров;
                  </p>
                </li>
              </ul>
              <div className={styles.process__subdescr}>
                <p className={styles.process__text}>
                  Наша миссия – сделать перевозки ваших грузов удобными и
                  качественными. Точно в срок и с удовольствием для вас.
                </p>
              </div>
              <div className={styles.process__subdescr}>
                <p className={styles.process__text}>
                  Везете вы 1 контейнер в месяц или 10 – вы одинаково важны для
                  нас.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

import styles from "./delivery.module.css";

const Delivery = () => {
  return (
    <section className={styles.delivery}>
      <div className={styles.delivery__container}>
        <h2 className={styles.delivery__title}>Направления доставки</h2>
        <p className={styles.delivery__descr}>
          Наши ключевые направления: Китай, Вьетнам, Корея, Ближний восток
        </p>
        <div className={styles.delivery__wrapper}>
          <ul className={styles.delivery__list}>
            <li className={styles.delivery__item}>
              <h3 className={styles.delivery__heading}>
                Морской путь в Азиатско-Тихоокеанский регион
              </h3>
              <p className={styles.delivery__subheading}>
                Из Владивостока и Советской Гавани
              </p>
            </li>
            <li className={styles.delivery__item}>
              <h3 className={styles.delivery__heading}>
                Морской путь на север России
              </h3>
              <p className={styles.delivery__subheading}>
                Из Архангельска и Мурманска
              </p>
            </li>
            <li className={styles.delivery__item}>
              <h3 className={styles.delivery__heading}>
                Морской путь в Европу и Америку
              </h3>
              <p className={styles.delivery__subheading}>Из Санкт-Петербурга</p>
            </li>
            <li className={styles.delivery__item}>
              <h3 className={styles.delivery__heading}>
                Морской путь в Турцию
              </h3>
              <p className={styles.delivery__subheading}>Из Новороссийска</p>
            </li>
            <li className={styles.delivery__item}>
              <h3 className={styles.delivery__heading}>
                Морской путь в Африку и Иран
              </h3>
              <p className={styles.delivery__subheading}>Из Астрахани</p>
            </li>
            <li className={styles.delivery__item}>
              <h3 className={styles.delivery__heading}>
                Сухопутный путь в Китай
              </h3>
              <p className={styles.delivery__subheading}>Из Забайкальска</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Delivery;

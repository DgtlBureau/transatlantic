import styles from "./delivery.module.css";

const Delivery = () => {
  return (
    <section className={styles.delivery}>
      <div className={styles.delivery__container}>
        <h2 className={styles.delivery__title}>Направления доставки</h2>
        {/* <p className={styles.delivery__descr}>
          Наши ключевые направления: Китай, Вьетнам, Корея, Ближний восток
        </p> */}
        <div className={styles.delivery__wrapper}>
          <ul className={styles.delivery__list}>
            <li className={styles.delivery__item}>
              <h3 className={styles.delivery__heading}>
                Азиатско-тихоокеанский регион
              </h3>
              <p className={styles.delivery__subheading}>
                Из портов Дальнего Востока
              </p>
            </li>
            <li className={styles.delivery__item}>
              <h3 className={styles.delivery__heading}>Европа и Америка</h3>
              <p className={styles.delivery__subheading}>
                Из портов Санкт-Петербурга и стран Балтии
              </p>
            </li>
            <li className={styles.delivery__item}>
              <h3 className={styles.delivery__heading}>Африка, Иран, ОАЭ</h3>
              <p className={styles.delivery__subheading}>
                Из южных портов России
              </p>
            </li>
            <li className={styles.delivery__item}>
              <h3 className={styles.delivery__heading}>По России</h3>
              <p className={styles.delivery__subheading}>В любую точку</p>
            </li>
            <li className={styles.delivery__item}>
              <h3 className={styles.delivery__heading}>Турция</h3>
              <p className={styles.delivery__subheading}>
                Из порта Новороссийск
              </p>
            </li>
            <li className={styles.delivery__item}>
              <h3 className={styles.delivery__heading}>По суше в Китай</h3>
              <p className={styles.delivery__subheading}>
                Через Россию, Казахстан и Монголию
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Delivery;

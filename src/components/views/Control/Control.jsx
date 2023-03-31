import styles from "./control.module.css";

const Control = () => {
  return (
    <section className={styles.control}>
      <div className={styles.control__container}>
        <h2 className={styles.control__title}>Под нашим контролем</h2>
        <ul className={styles.control__list}>
          <li className={styles.control__item}>
            <p className={styles.control__descr}>
              Мы, как оператор мультимодальной перевозки, берем на себя заботу
              за доставку товара
            </p>
          </li>
          <li className={styles.control__item}>
            <p className={styles.control__descr}>
              Фиксируем этапы прохождения груза, сообщаем о необходимости
              таможенной очистки
            </p>
            <span className={styles.control__blueDescr}>
              Таможня не наш профиль, но мы свяжем вас с проверенными партнерами
            </span>
          </li>
          <li className={styles.control__item}>
            <p className={styles.control__descr}>
              Самостоятельно распределяем бюджет между субподрядчиками и
              занимаемся документооборотом
            </p>
            <span className={styles.control__blueDescr}>
              От вас потребуется груз, договор и единоразовый платеж
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Control;

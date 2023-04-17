import cn from "classnames";
import styles from "./trafficTypes.module.css";

const TrafficTypes = () => {
  return (
    <section className={styles.traffic}>
      <div className={styles.traffic__container}>
        <div className={styles.traffic__info}>
          <h2 className={styles.traffic__title}>
            Полный цикл без участия владельца груза
          </h2>
          <p className={styles.traffic__descr}>
            Сокращаем время в пути за счет оптимальных маршрутов
          </p>
        </div>
        <ul className={styles.traffic__list}>
          <li className={styles.traffic__item}>
            <p className={styles.traffic__subheading}>
              Первая и последняя миля перевозки
            </p>
            <h2 className={styles.traffic__heading}>Авто перевозки</h2>
            <div
              className={cn(styles.traffic__img, styles["traffic__img--auto"])}
            ></div>
          </li>
          <li className={styles.traffic__item}>
            <p className={styles.traffic__subheading}>
              Лучший способ для доставки грузов по суше
            </p>
            <h2 className={styles.traffic__heading}>ЖД перевозки</h2>
            <div
              className={cn(styles.traffic__img, styles["traffic__img--rail"])}
            ></div>
          </li>
          <li className={styles.traffic__item}>
            <p className={styles.traffic__subheading}>
              Универсальное решение для перемещения грузов
            </p>
            <h2 className={styles.traffic__heading}>Морские перевозки</h2>
            <div
              className={cn(
                styles.traffic__img,
                styles["traffic__img--shipping"]
              )}
            ></div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TrafficTypes;

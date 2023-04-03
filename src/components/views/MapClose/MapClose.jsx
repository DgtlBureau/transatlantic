import mapBg from "../../../assets/images/desktop/map/map-close.png";
import cn from "classnames";
import styles from "./mapClose.module.css";

const MapClose = () => {
  return (
    <section className={styles.mapClose}>
      <div className={styles.mapClose__container}>
        <div className={styles.mapClose__info}>
          <h2 className={styles.mapClose__title}>Под нашим контролем</h2>
          <div className={styles.mapClose__wrapper}>
            <p
              className={cn(
                styles.mapClose__descr,
                styles["mapClose__descr--first"]
              )}
            >
              Мы, как оператор мультимодальной перевозки, берем на себя заботу
              за доставку товара
            </p>
            <p
              className={cn(
                styles.mapClose__descr,
                styles["mapClose__descr--second"]
              )}
            >
              Фиксируем этапы прохождения груза, сообщаем о необходимости
              таможенной очистки
            </p>
            <p
              className={cn(
                styles.mapClose__descr,
                styles["mapClose__descr--third"]
              )}
            >
              Таможня не наш профиль, но мы свяжем вас с проверенными партнерами
            </p>
            <p
              className={cn(
                styles.mapClose__descr,
                styles["mapClose__descr--forth"]
              )}
            >
              Самостоятельно распределяем бюджет между субподрядчиками и
              занимаемся документооборотом
            </p>
            <p
              className={cn(
                styles.mapClose__descr,
                styles["mapClose__descr--fifth"]
              )}
            >
              От вас потребуется груз, договор и единоразовый платеж
            </p>
          </div>
        </div>
        <img src={mapBg} alt="map" className={styles.mapClose__img} />
      </div>
    </section>
  );
};

export default MapClose;

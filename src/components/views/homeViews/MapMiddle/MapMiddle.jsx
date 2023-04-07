import mapBg from "../../../../assets/images/desktop/map/map-middle.png";
import styles from "./mapMiddle.module.css";

const MapMiddle = () => {
  return (
    <section className={styles.mapMiddle}>
      <div className={styles.mapMiddle__container}>
        <div className={styles.mapMiddle__info}>
          <h2 className={styles.mapMiddle__title}>Направления доставки</h2>
          <p className={styles.mapMiddle__descr}>
            Наши ключевые направления: Китай, Вьетнам, Корея, Ближний восток
          </p>
        </div>
        <img src={mapBg} alt="map" className={styles.mapMiddle__img} />
      </div>
    </section>
  );
};

export default MapMiddle;

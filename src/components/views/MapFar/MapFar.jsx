import mapBg from "../../../assets/images/desktop/map/map-far.png";
import styles from "./mapfar.module.css";

const MapFar = () => {
  return (
    <section className={styles.mapFar}>
      <div className={styles.mapFar__container}>
        <div className={styles.mapFar__info}>
          <h2 className={styles.mapFar__title}>Направления доставки</h2>
          <p className={styles.mapFar__descr}>
            Наши ключевые направления: Китай, Вьетнам, Корея, Ближний восток
          </p>
        </div>
        <img src={mapBg} alt="map" className={styles.mapFar__img} />
      </div>
    </section>
  );
};

export default MapFar;

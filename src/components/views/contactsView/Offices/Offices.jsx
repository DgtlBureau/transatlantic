import Office from "../Office/Office";
import styles from "./offices.module.css";

const Offices = () => {
  return (
    <section className={styles.offices}>
      <div className={styles.offices__container}>
        <Office
          tel="+7 343 287-94-14"
          mail="office@transatlantic.pro"
          address="620014, г. Екатеринбург, ул. Бориса Ельцина 1А, оф. 11.3 (БЦ «Президент»)"
          name="Трыскова Лилия"
          type="ekb"
          title="Офис в г. Екатеринбург"
        />
        <Office
          tel="+7 495 445-45-92"
          mail="koledad@transatlantic.pro"
          address="129343, г. Москва, пр-д Серебрякова, 14, строение 10, офис 10204"
          name="Трыскова Лилия"
          type="msk"
          title="Офис в г. Москва "
        />
      </div>
    </section>
  );
};

export default Offices;

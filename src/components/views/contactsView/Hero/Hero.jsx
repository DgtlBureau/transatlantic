import Office from "../Office/Office";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>Контакты</h2>
        <div className={styles.hero__wrapper}>
          <div className={styles.hero__top}>
            <h3 className={styles.hero__heading}>Филиалы</h3>
            <div className={styles.hero__button__wrapper}>
              <button type="button" className={styles.hero__button}>
                Екатеринбург
              </button>
              <button type="button" className={styles.hero__button}>
                Москва
              </button>
              <button type="button" className={styles.hero__button}>
                Оставить заявку
              </button>
            </div>
          </div>

          <div className={styles.hero__bottom}>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;

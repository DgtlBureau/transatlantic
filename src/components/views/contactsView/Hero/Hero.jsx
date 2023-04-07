import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__top}>
          <h2 className={styles.hero__title}>Контакты</h2>
        </div>
        <div className={styles.hero__bottom}>
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
      </div>
    </section>
  );
};

export default Hero;

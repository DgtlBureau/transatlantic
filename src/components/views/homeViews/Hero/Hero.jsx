import cn from "classnames";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__info}>
          <h1 className={styles.hero__title}>Контейнерные перевозки</h1>
          <p className={styles.hero__descr}>
            Быстрый и экономичный способ доставить груз в любую точку мира.
            Возьмем на себя все заботы по перевозке вашего груза.
          </p>
        </div>
        <div className={styles.hero__background}>
          <div className={styles.hero__wrapper}>
            <div className={styles.hero__truck}></div>
            <div
              className={cn(styles.hero__letter, styles["hero__letter--left"])}
            ></div>
            <div
              className={cn(styles.hero__letter, styles["hero__letter--right"])}
            ></div>
            <div
              className={cn(
                styles.hero__letter,
                styles["hero__letter--bottom"]
              )}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

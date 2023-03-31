import cn from "classnames";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h1 className={styles.hero__title}>Контейнерные перевозки</h1>
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
        <p className={styles.hero__descr}>
          Быстрый и экономичный способ доставить груз в любую точку мира.
          Стандартизированные контейнеры легко грузятся на любое транспортное
          средство, сохраняют герметичность и имеют большое количество
          разновидностей под разные задачи.
        </p>
      </div>
    </section>
  );
};

export default Hero;

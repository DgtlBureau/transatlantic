import letterLeft from "../../../assets/images/mobile/letter/letter-left.png";
import letterRight from "../../../assets/images/mobile/letter/letter-right.png";
import letterBottom from "../../../assets/images/mobile/letter/letter-bottom.png";
import containerImage from "../../../assets/images/mobile/container-hero.png";
import cn from "classnames";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.hero__title}>Контейнерные перевозки</h1>
      <div className={styles.hero__background}>
        <div className={styles.hero__wrapper}>
          <img
            src={containerImage}
            alt="container"
            className={styles.hero__container}
          />
          <img
            src={letterLeft}
            alt="letter"
            className={cn(styles.hero__letter, styles["hero__letter--left"])}
          />
          <img
            src={letterRight}
            alt="letter"
            className={cn(styles.hero__letter, styles["hero__letter--right"])}
          />
          <img
            src={letterBottom}
            alt="letter"
            className={cn(styles.hero__letter, styles["hero__letter--bottom"])}
          />
        </div>
      </div>
      <p className={styles.hero__descr}>
        Быстрый и экономичный способ доставить груз в любую точку мира.
        Стандартизированные контейнеры легко грузятся на любое транспортное
        средство, сохраняют герметичность и имеют большое количество
        разновидностей под разные задачи.
      </p>
    </section>
  );
};

export default Hero;

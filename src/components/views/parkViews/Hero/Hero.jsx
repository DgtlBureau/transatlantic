import { Link } from "react-scroll";
import ButtonLink from "components/ui/ButtonLink/ButtonLink";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>Контейнерный парк</h2>
        <div className={styles.hero__wrapper}>
          <div className={styles.hero__left}>
            <div className={styles.hero__bg}>
              <h3 className={styles.hero__heading}>Перевезем что угодно</h3>
              <p className={styles.hero__descr}>
                Более 800 контейнеров стандарта 20 и 40 футов “сухих” обычных,
                под любые ваши задачи.
              </p>
              <Link
                to="brief"
                smooth={true}
                offset={-150}
                duration={500}
                className={styles.hero__btn}
              >
                Арендовать контейнер
              </Link>
            </div>
            <p className={styles.hero__text}>
              Наши контейнеры находятся обычно в крупных городах РФ (Москва,
              Екатеринбург, Новосибирск, Санкт-Петербург), реже Владивосток,
              часть находится на базах в Китае.
            </p>
          </div>
          {/* <div className={styles.hero__right}>
            <h4 className={styles.hero__heading}>Другие услуги:</h4>
            <ButtonLink
              text="Авто перевозки"
              to="/services/4"
              color="link"
              className={styles.hero__link}
            />
            <ButtonLink
              text="Морские перевозки"
              to="/services/5"
              color="link"
              className={styles.hero__link}
            />
            <ButtonLink
              text="Контейнерные перевозки"
              to="/services/1"
              color="link"
              className={styles.hero__link}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

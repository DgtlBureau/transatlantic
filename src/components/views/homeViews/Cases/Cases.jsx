import { Link } from "react-router-dom";
import ship from "../../../../assets/images/desktop/cases/ship-big.png";
import cn from "classnames";
import styles from "./cases.module.css";

const Cases = () => {
  return (
    <section className={styles.cases}>
      <h2 className={styles.cases__title}>Наши кейсы</h2>
      <div className={styles.cases__container}>
        <div className={styles.cases__wrapper}>
          <ul className={styles.cases__list}>
            <li className={styles.cases__item}>
              <Link className={styles.cases__link}>
                <div className={styles.cases__info}>
                  <h4 className={styles.cases__heading}>
                    Металл 2022 <span className={styles.cases__arrow}>→</span>
                  </h4>
                </div>
                <div
                  className={cn(
                    styles.cases__image,
                    styles["cases__image--shipSecond"]
                  )}
                ></div>
              </Link>
            </li>
            <li className={styles.cases__item}>
              <Link className={styles.cases__link}>
                <div className={styles.cases__info}>
                  <h4 className={styles.cases__heading}>
                    Мы везли груз из Австралии в России{" "}
                    <span className={styles.cases__arrow}>→</span>
                  </h4>
                </div>
                <div
                  className={cn(
                    styles.cases__image,
                    styles["cases__image--crane"]
                  )}
                ></div>
              </Link>
            </li>
            <li className={styles.cases__item}>
              <Link className={styles.cases__link}>
                <div className={styles.cases__info}>
                  <h4 className={styles.cases__heading}>
                    Самая быстрая грузоперевозка в 2022 году{" "}
                    <span className={styles.cases__arrow}>→</span>
                  </h4>
                </div>
                <div
                  className={cn(
                    styles.cases__image,
                    styles["cases__image--lighthouse"]
                  )}
                ></div>
              </Link>
            </li>
            <li className={styles.cases__item}>
              <Link className={styles.cases__link}>
                <div className={styles.cases__info}>
                  <h4 className={styles.cases__heading}>
                    Evergreen в Суэцком канале{" "}
                    <span className={styles.cases__arrow}>→</span>
                  </h4>
                </div>
                <div
                  className={cn(
                    styles.cases__image,
                    styles["cases__image--shipFirst"]
                  )}
                ></div>
              </Link>
            </li>
          </ul>
          <Link className={styles.cases__button} to="#">
            Посмотреть все
          </Link>
        </div>
        <img src={ship} alt="ship" className={styles.cases__imageBg} />
      </div>
    </section>
  );
};

export default Cases;

import { Link } from "react-router-dom";
import { casesPage } from "constants";
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
            {casesPage
              ?.slice(0, 4)
              .map(({ id, path, heading, imgBlue, imgGray, alt }) => {
                return (
                  <li className={styles.cases__item} key={id}>
                    <Link className={styles.cases__link} to={`/${path}`}>
                      <div className={styles.cases__info}>
                        <h4 className={styles.cases__heading}>
                          {heading}
                          <span className={styles.cases__arrow}>→</span>
                        </h4>
                      </div>
                      <img
                        src={imgBlue}
                        alt={alt}
                        className={cn(
                          styles.cases__image,
                          styles["cases__image--blue"]
                        )}
                      />
                      <img
                        src={imgGray}
                        alt={alt}
                        className={cn(
                          styles.cases__image,
                          styles["cases__image--gray"]
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
          </ul>
          <Link className={styles.cases__button} to="/cases">
            Посмотреть все
          </Link>
        </div>
        <img src={ship} alt="ship" className={styles.cases__imageBg} />
      </div>
    </section>
  );
};

export default Cases;

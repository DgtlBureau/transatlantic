import { Link } from "react-router-dom";
import { casesPage } from "../../../../constants";
import PropTypes from "prop-types";
import styles from "./hero.module.css";

const Hero = ({}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>Наши кейсы</h2>
        <div className={styles.hero__wrapper}>
          <ul className={styles.hero__list}>
            {casesPage?.map(({ id, path, heading, img, alt }) => {
              return (
                <li className={styles.hero__item} key={id}>
                  <Link className={styles.hero__link} to={path}>
                    <div className={styles.hero__info}>
                      <h4 className={styles.hero__heading}>{heading}</h4>
                      <span className={styles.hero__arrow}>→</span>
                    </div>
                    <img src={img} alt={alt} className={styles.hero__img} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <button type="button" className={styles.hero__btn}>
          Показать ещё
        </button>
      </div>
    </section>
  );
};

Hero.propTypes = {
  id: PropTypes.number.isRequired,
  path: PropTypes.string,
  heading: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
};

Hero.defaultProps = {
  path: "",
  heading: "",
  img: "",
  alt: "",
};

export default Hero;

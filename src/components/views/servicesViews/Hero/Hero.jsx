import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { servicesPage } from "../../../../constants";
import cn from "classnames";
import styles from "./hero.module.css";

const Hero = () => {
  const [services, setServices] = useState([]);
  const [amount, setAmount] = useState(0);
  const [servicesShow, setServicesShow] = useState([]);
  const [btnShow, setBtnShow] = useState(true);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    setServices([...servicesPage]);
  }, []);

  useEffect(() => {
    if (width < 1440) {
      setAmount(6);
    } else if (width >= 1440) {
      setAmount(9);
    }
  }, [width]);

  useEffect(() => {
    setServicesShow(services.slice(0, amount));
  }, [amount, services]);

  useEffect(() => {
    if (services.length === servicesShow.length) {
      setBtnShow(false);
    } else {
      setBtnShow(true);
    }
  }, [services.length, servicesShow.length]);

  const handleClick = () => {
    setAmount(amount + 3);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>Услуги</h2>
        <div className={styles.hero__wrapper}>
          <ul className={styles.hero__list}>
            {servicesShow?.map(({ id, path, heading, img, alt }) => {
              return (
                <li className={styles.hero__item} key={id}>
                  <Link className={styles.hero__link} to={`/services/${path}`}>
                    <div className={styles.hero__info}>
                      <h4 className={styles.hero__heading}>
                        {heading} <span className={styles.hero__arrow}>→</span>
                      </h4>
                    </div>
                    <img src={img} alt={alt} className={styles.hero__img} />
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className={cn(styles.hero__btn, {
              [styles["hidden"]]: btnShow === false,
            })}
            onClick={handleClick}
          >
            Показать ещё
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

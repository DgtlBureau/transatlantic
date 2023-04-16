// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import { Link } from "react-scroll";
// import container from "../../../../assets/images/desktop/track-container.png";
import containerMobile from "../../../../assets/images/mobile/truck.png";

import cn from "classnames";
import styles from "./convenient.module.css";

const Convenient = () => {
  // const [width, setWidth] = useState(0);

  // useEffect(() => {
  //   function handleResize() {
  //     setWidth(window.innerWidth);
  //   }

  //   window.addEventListener("resize", handleResize);

  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // });

  // const blockAnimation = {
  //   hidden: {
  //     x: -900,
  //   },
  //   vivsible: {
  //     x: 16,
  //   },
  // };

  return (
    <section className={styles.convenient}>
      <div className={styles.convenient__container}>
        <div className={styles["convenient__info--top"]}>
          <h2 className={styles.convenient__title}>Даже если вы далеко</h2>
          <div className={styles.wrapper__descr}>
            <p
              className={cn(
                styles.convenient__descr,
                styles["convenient__descr--first"]
              )}
            >
              Мы заберем контейнер с грузом и довезем его до железнодорожного
              пункта отправки
            </p>
            <p
              className={cn(
                styles.convenient__descr,
                styles["convenient__descr--second"]
              )}
            >
              Если с вашим населенным пунктом нет жд сообщения, мы организуем
              доставку до ближайщей грузовой станции
            </p>
          </div>
        </div>
        {/* {width >= 1440 ? (
          <motion.div
            className={styles.convenient__wrapper}
            variants={blockAnimation}
            transition={{ duration: 2.7 }}
          >
            <img
              src={container}
              alt="container"
              className={styles.convenient__image}
            />
          </motion.div>
        ) : ( */}
        <div className={styles.convenient__wrapper}>
          <img
            src={containerMobile}
            alt="container"
            className={styles.convenient__image}
          />
        </div>
        {/* )} */}

        <div className={styles["convenient__info--bottom"]}>
          <p
            className={cn(
              styles.convenient__descr,
              styles["convenient__descr--third"]
            )}
          >
            Если у вас нет контейнера, мы дадим вам в аренду наш контейнер по
            выгодной цене
          </p>
          <div className={styles.convenient__button}>
            <Link to="brief" smooth={true} offset={-150} duration={500}>
              Арендовать контейнер
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Convenient;

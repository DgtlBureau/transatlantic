// import { useParams } from "react-router-dom";
import { servicesPage } from "constants";
import styles from "./hero.module.css";

const Hero = () => {
  // const { id } = useParams();
  const serviceEl = servicesPage?.find((el) => el.path === "/cargo") || {};

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>{serviceEl?.heading}</h2>
        <img
          src={serviceEl.img}
          alt={serviceEl.alt}
          className={styles.hero__img}
        />
      </div>
    </section>
  );
};

export default Hero;

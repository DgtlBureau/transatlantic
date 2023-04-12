import { useParams } from "react-router-dom";
import { casesPage } from "../../../../constants";
import styles from "./hero.module.css";

const Hero = () => {
  const { caseID } = useParams();
  const caseEl = casesPage?.find((el) => el.path === caseID) || {};

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>{caseEl?.caseHeading}</h2>
        <img
          src={caseEl.imgBlue}
          alt={caseEl.alt}
          className={styles.hero__img}
        />
      </div>
    </section>
  );
};

export default Hero;

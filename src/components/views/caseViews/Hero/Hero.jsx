import { useParams } from "react-router-dom";
import { casesPage } from "../../../../constants";
import styles from "./hero.module.css";

const Hero = () => {
  const { id } = useParams();
  const caseEl = casesPage?.find((el) => el.id === Number(id)) || {};

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>{caseEl?.heading}</h2>
      </div>
    </section>
  );
};

export default Hero;

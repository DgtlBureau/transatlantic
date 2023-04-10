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
        <img src={caseEl.img} alt={caseEl.alt} className={styles.hero__img} />
      </div>
    </section>
  );
};

export default Hero;

import containerBg from "../../../../assets/images/desktop/container-front.png";
import styles from "./background.module.css";

const Background = () => {
  return (
    <section className={styles.background}>
      <img
        src={containerBg}
        alt="container"
        className={styles.background__image}
      />
    </section>
  );
};

export default Background;

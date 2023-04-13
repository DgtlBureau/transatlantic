import containerBg from "../../../../assets/images/desktop/container-front.png";
import styles from "./background.module.css";

// import Lottie from "lottie-react";
// import groovyWalkAnimation from "../../../../lottie.json";

const Background = () => {
  // const style = {
  //   height: 750,
  //   width: 1180,
  // };

  return (
    <section className={styles.background}>
      {/* <Lottie animationData={groovyWalkAnimation} style={style} /> */}
      <img
        src={containerBg}
        alt="container"
        className={styles.background__image}
      />
    </section>
  );
};

export default Background;

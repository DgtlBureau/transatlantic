import { motion } from "framer-motion";
import containerBg from "../../../../assets/images/desktop/container-front.png";
import styles from "./background2.module.css";

const Background2 = () => {
  const blockAnimation = {
    hidden: {
      y: -900,
      scale: 1,
      opacity: 0,
    },
    vivsible: {
      y: 773,
      scale: 0.435,
      opacity: 1,
    },
  };

  return (
    <motion.section
      className={styles.background}
      initial="hidden"
      whileInView="vivsible"
      viewport={{ amount: 0.3, once: true }}
    >
      <motion.img
        src={containerBg}
        alt="container"
        className={styles.background__image}
        variants={blockAnimation}
        transition={{ duration: 5 }}
      />
    </motion.section>
  );
};

export default Background2;

import { motion } from "framer-motion";
import containerBg from "../../../../assets/images/desktop/container-front.png";
import styles from "./background.module.css";

const Background = () => {
  const blockAnimation = {
    hidden: {
      y: -150,
      opacity: 1,
    },
    vivsible: {
      y: 750,
      opacity: 0,
    },
  };

  return (
    <motion.section
      className={styles.background}
      initial="hidden"
      whileInView="vivsible"
      viewport={{ amount: 0.1, once: true }}
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

export default Background;

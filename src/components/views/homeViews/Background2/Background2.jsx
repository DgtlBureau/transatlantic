// import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import containerBg from "../../../../assets/images/desktop/container-front.png";
import cn from "classnames";
import styles from "./background2.module.css";

const Background2 = () => {
  // const blockAnimation = {
  //   hidden: {
  //     y: -900,
  //     scale: 1,
  //     opacity: 0,
  //   },
  //   vivsible: {
  //     y: 773,
  //     scale: 0.435,
  //     opacity: 1,
  //   },
  // };

  const [start, setStart] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "350px 0px 0px 0px",
  });

  useEffect(() => {
    if (inView) {
      setStart(true);
    } else {
      setStart(false);
    }
  }, [inView]);

  return (
    // <motion.section
    //   className={styles.background}
    //   initial="hidden"
    //   whileInView="vivsible"
    //   viewport={{ amount: 0.3, once: true }}
    // >
    //   <motion.img
    //     src={containerBg}
    //     alt="container"
    //     className={styles.background__image}
    //     variants={blockAnimation}
    //     transition={{ duration: 5 }}
    //   />
    // </motion.section>

    <section className={styles.background}>
      <img
        ref={ref}
        src={containerBg}
        alt="container"
        className={cn(styles.background__image, {
          [styles["animation"]]: start,
        })}
      />
    </section>
  );
};

export default Background2;

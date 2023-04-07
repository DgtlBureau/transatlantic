import cn from "classnames";
import styles from "./advantage.module.css";

const Advantage = () => {
  return (
    <section className={styles.advantage}>
      <div className={styles.advantage__container}>
        <div className={styles.advantage__info}>
          <h2 className={styles.advantage__title}>250 000 тонн за год</h2>
          <p className={styles.advantage__subtitle}>Импорт и экспорт</p>
        </div>
        <div className={styles.figures}>
          <div
            className={cn(
              styles.figures__item,
              styles["figures__item--polygon"]
            )}
          >
            <span
              className={cn(
                styles.figures__text,
                styles["figures__text--polygon"]
              )}
            >
              Полимеры
            </span>
          </div>
          <div
            className={cn(
              styles.figures__item,
              styles["figures__item--ellipse"]
            )}
          >
            <span
              className={cn(
                styles.figures__text,
                styles["figures__text--ellipse"]
              )}
            >
              Технические углероды
            </span>
          </div>
          <div
            className={cn(
              styles.figures__item,
              styles["figures__item--rectangle"]
            )}
          >
            <span
              className={cn(
                styles.figures__text,
                styles["figures__text--rectangle"]
              )}
            >
              Пиломатериалы
            </span>
          </div>
          <div
            className={cn(styles.figures__item, styles["figures__item--union"])}
          >
            <span
              className={cn(
                styles.figures__text,
                styles["figures__text--union"]
              )}
            >
              Продукты питания
            </span>
          </div>
          <div
            className={cn(
              styles.figures__item,
              styles["figures__item--subtract"]
            )}
          >
            <span
              className={cn(
                styles.figures__text,
                styles["figures__text--subtract"]
              )}
            >
              Металлопрокат
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;

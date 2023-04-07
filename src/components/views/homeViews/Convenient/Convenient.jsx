import ButtonLink from "components/ui/ButtonLink/ButtonLink";
import cn from "classnames";
import styles from "./convenient.module.css";

const Convenient = () => {
  return (
    <section className={styles.convenient}>
      <div className={styles.convenient__container}>
        <div className={styles["convenient__info--top"]}>
          <h2 className={styles.convenient__title}>Даже если вы далеко</h2>
          <div className={styles.wrapper__descr}>
            <p
              className={cn(
                styles.convenient__descr,
                styles["convenient__descr--first"]
              )}
            >
              Мы заберем контейнер с грузом и довезем его до железнодорожного
              пункта отправки
            </p>
            <p
              className={cn(
                styles.convenient__descr,
                styles["convenient__descr--second"]
              )}
            >
              Если с вашим населенным пунктом нет жд сообщения, мы организуем
              доставку до ближайщей грузовой станции
            </p>
          </div>
        </div>
        <div className={styles.convenient__wrapper}>
          <div className={styles.convenient__image}></div>
        </div>
        <div className={styles["convenient__info--bottom"]}>
          <p
            className={cn(
              styles.convenient__descr,
              styles["convenient__descr--third"]
            )}
          >
            Если у вас нет контейнера, мы дадим вам в аренду наш контейнер по
            выгодной цене
          </p>
          <div className={styles.convenient__button}>
            <ButtonLink text="Арендовать контейнер" to="#" color="blue" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Convenient;

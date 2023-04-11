import { HandySvg } from "handy-svg";
import svgFirst from "../../../../assets/images/park/advantage/svg-1.svg";
import svgSecond from "../../../../assets/images/park/advantage/svg-2.svg";
import styles from "./info.module.css";
import ButtonLink from "components/ui/ButtonLink/ButtonLink";

const Info = () => {
  return (
    <section className={styles.info}>
      <div className={styles.info__container}>
        <div className={styles.info__top}>
          <h3 className={styles.info__title}>Кому предоставляем</h3>
          <ul className={styles.info__list}>
            <li className={styles.info__item}>
              <HandySvg
                src={svgFirst}
                width="64"
                height="64"
                className={styles.info__svg}
              />
              <h4 className={styles.info__heading}>Конечным клиентам</h4>
              <p className={styles.info__descr}>
                загрузка вашими товарами в РФ или за ее пределами
              </p>
            </li>
            <li className={styles.info__item}>
              <HandySvg
                src={svgSecond}
                width="64"
                height="64"
                className={styles.info__svg}
              />
              <h4 className={styles.info__heading}>Партнерам по перевозке</h4>
              <p className={styles.info__descr}>
                использование в ваших логистических задачах
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.info}>
          <h3 className={styles.info__title}>Ценообразование</h3>
          <p className={styles.info__price}>
            Зависит от места нахождения и маршрута перевозки, сможем посчитать
            за 30 минут после получения вашей задачи.  Обращайтесь!
          </p>
          <ButtonLink
            text="Арендовать контейнер"
            to="#"
            className={styles.info__btn}
            color="blue"
          />
        </div>
      </div>
    </section>
  );
};

export default Info;

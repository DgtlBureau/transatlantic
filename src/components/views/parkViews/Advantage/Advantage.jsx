import { HandySvg } from "handy-svg";
import svgFirst from "../../../../assets/images/park/advantage/svg-1.svg";
import svgSecond from "../../../../assets/images/park/advantage/svg-2.svg";
import svgThird from "../../../../assets/images/park/advantage/svg-3.svg";
import styles from "./advantage.module.css";

const Advantage = () => {
  return (
    <section className={styles.advantage}>
      <div className={styles.advantage__container}>
        <h3 className={styles.advantage__title}>
          Нам важно, как доедет ваш груз
        </h3>
        <ul className={styles.advantage__list}>
          <li className={styles.advantage__item}>
            <HandySvg
              src={svgFirst}
              width="64"
              height="64"
              className={styles.advantage__svg}
            />
            <h4 className={styles.advantage__heading}>
              Наличие и скорость подачи
            </h4>
            <p className={styles.advantage__descr}>
              быстро предоставим под загрузку вашего груза
            </p>
          </li>
          <li className={styles.advantage__item}>
            <HandySvg
              src={svgSecond}
              width="64"
              height="64"
              className={styles.advantage__svg}
            />
            <h4 className={styles.advantage__heading}>
              Надежность и хорошее состояние
            </h4>
            <p className={styles.advantage__descr}>
              контроль качества при каждой перевозке
            </p>
          </li>
          <li className={styles.advantage__item}>
            <HandySvg
              src={svgThird}
              width="64"
              height="64"
              className={styles.advantage__svg}
            />
            <h4 className={styles.advantage__heading}>Актуальность данных</h4>
            <p className={styles.advantage__descr}>
              всегда знаем, сколько и где наших контейнеров
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantage;

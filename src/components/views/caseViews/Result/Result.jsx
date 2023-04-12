import { useParams, useNavigate } from "react-router-dom";
import Button from "components/ui/Button/Button";
import { casesPage } from "constants";
import styles from "./result.module.css";

const Result = () => {
  const { caseID } = useParams();
  const caseEl = casesPage?.find((el) => el.path === caseID) || {};
  const results = caseEl?.result?.results;
  const images = caseEl?.result?.images;
  const navigate = useNavigate();
  const goBack = () => navigate("/cases", { replace: true });

  return (
    <section className={styles.result}>
      <div className={styles.result__container}>
        <div className={styles.result__top}>
          <div className={styles.result__left}>
            <h3 className={styles.result__title}>{caseEl?.result?.title}</h3>
          </div>
          <div className={styles.result__right}>
            <ul className={styles.result__list}>
              {results?.map(({ id, text }) => {
                return (
                  <li key={id} className={styles.result__item}>
                    <p className={styles.result__descr}>{text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.result__bottom}>
          <ul className={styles["result__list-images"]}>
            {images?.map(({ id, imgDescr, src, alt }) => {
              return (
                <li key={id} className={styles["result__item-images"]}>
                  <img src={src} alt={alt} className={styles.result__image} />
                  <p className={styles.result__imageDescr}>{imgDescr}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <Button text="Еще кейсы" onClick={goBack} color="case" type="button" />
      </div>
    </section>
  );
};

export default Result;

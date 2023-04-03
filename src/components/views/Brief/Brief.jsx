import Form from "components/common/Form/Form";
import styles from "./brief.module.css";

const Brief = () => {
  return (
    <section className={styles.brief}>
      <div className={styles.brief__container}>
        <div className={styles.brief__info}>
          <h2 className={styles.brief__title}>Доставим ваш груз</h2>
          <p className={styles.brief__descr}>
            Оставьте завяку, мы свяжемся с вами и обсудим детали отправки груза
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Brief;

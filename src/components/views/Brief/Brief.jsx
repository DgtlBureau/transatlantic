import Form from "components/common/Form/Form";
import styles from "./brief.module.css";

const Brief = () => {
  return (
    <section className={styles.brief}>
      <h2 className={styles.brief__title}>Доставим ваш груз</h2>
      <p className={styles.brief__descr}>
        Оставьте завяку, мы свяжемся с вами и обсудим детали отправки груза
      </p>
      <Form />
      <p className={styles.brief__policy}>
        Нажимая на кнопку, вы соглашаетесь с «Правилами пользования» и
        «Политикой конфиденциальности»
      </p>
    </section>
  );
};

export default Brief;
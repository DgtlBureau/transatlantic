import React, { useState } from "react";
import styles from "./form.module.css";
import Button from "components/ui/Button/Button";

const Form = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setTel("");
    setEmail("");
  };

  return (
    <div className={styles.form__wrapper}>
      <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
        <input
          placeholder="Ваше имя"
          name="name"
          value={name}
          className={styles.form__input}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Номер телефона*"
          name="tel"
          value={tel}
          className={styles.form__input}
          onChange={(e) => setTel(e.target.value)}
        />

        <input
          type="email"
          placeholder="Ваш email"
          name="email"
          value={email}
          className={styles.form__input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className={styles.form__button}>
          <Button text="отправить заявку" color="blue" type="submit" />
        </div>
      </form>
      <p className={styles.form__policy}>
        Нажимая на кнопку, вы соглашаетесь с «Правилами пользования» и
        «Политикой конфиденциальности»
      </p>
    </div>
  );
};

export default Form;

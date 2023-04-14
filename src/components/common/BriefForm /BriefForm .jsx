import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useLocation } from "react-router";
import { validate } from "./utils/validate";
import Button from "components/ui/Button/Button";
import Modal from "../Modal/Modal";
import cn from "classnames";
import styles from "./form.module.css";
import FormContent from "../FormContent/FormContent";

const BriefForm = () => {
  const [modalActive, setModalActive] = useState(false);

  // this is the logic of changing styles

  const { pathname } = useLocation();
  const variant =
    `${pathname}` === "/contacts" ||
    `${pathname}` === "/containers" ||
    `${pathname}` === "/park";

  // this is the logic of opening and closing the modal

  const closeModal = () => {
    setModalActive(false);
  };

  const handleClick = () => {
    setModalActive(true);

    const timer = setTimeout(() => {
      closeModal();
    }, 3000);

    return () => clearTimeout(timer);
  };

  // this is the logic of the form

  const formik = useFormik({
    initialValues: {
      name: "",
      tel: "",
      email: "",
    },
    validate,

    // ${process.env.NEXT_PUBLIC_SENDMAIL_HOST}
    // обращение к env файлу, который лежит на хосте

    onSubmit: (values) => {
      const data = JSON.stringify(values, null, 2);
      try {
        axios.post(`${process.env.NEXT_PUBLIC_SENDMAIL_HOST}`, {
          data,
        });
      } catch (error) {
        console.log(error);
      }
      console.log(data);
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <>
      <div className={styles.form__wrapper}>
        <form
          className={styles.form}
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <div className={styles.input__wrapper}>
            <input
              placeholder="Ваше имя"
              name="name"
              value={formik.values.name}
              className={cn(styles.form__input, {
                [styles["input__errors"]]:
                  formik.errors.name && formik.touched.name,
                [styles["form__input--light"]]: variant,
              })}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.name && formik.errors.name ? (
              <div className={styles.errors__text}>{formik.errors.name}</div>
            ) : null}
          </div>

          <div className={styles.input__wrapper}>
            <input
              placeholder="Номер телефона*"
              name="tel"
              value={formik.values.tel}
              className={cn(styles.form__input, {
                [styles["input__errors"]]:
                  formik.errors.tel && formik.touched.tel,
                [styles["form__input--light"]]: variant,
              })}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.tel && formik.errors.tel ? (
              <div className={styles.errors__text}>{formik.errors.tel}</div>
            ) : null}
          </div>

          <div className={styles.input__wrapper}>
            <input
              type="text"
              placeholder="Ваш email"
              name="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className={cn(styles.form__input, {
                [styles["input__errors"]]:
                  formik.errors.email && formik.touched.email,
                [styles["form__input--light"]]: variant,
              })}
              onChange={formik.handleChange}
            />

            {formik.touched.email && formik.errors.email ? (
              <div className={styles.errors__text}>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className={styles.form__button}>
            <Button
              text="Отправить заявку"
              color="blue"
              type="submit"
              onClick={handleClick}
              disabled={!(formik.isValid && formik.dirty)}
            />
          </div>
        </form>
        <p className={styles.form__policy}>
          Нажимая на кнопку, вы соглашаетесь с «Правилами пользования» и
          «Политикой конфиденциальности»
        </p>
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <FormContent />
      </Modal>
    </>
  );
};

export default BriefForm;

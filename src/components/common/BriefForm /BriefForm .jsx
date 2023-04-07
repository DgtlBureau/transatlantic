import { useFormik } from "formik";
import { useLocation } from "react-router";
import { validate } from "./utils/validate";
import Button from "components/ui/Button/Button";
import cn from "classnames";
import styles from "./form.module.css";

const BriefForm = () => {
  const { pathname } = useLocation();
  const variant =
    `${pathname}` === "/contacts" || `${pathname}` === "/containers";

  const formik = useFormik({
    initialValues: {
      name: "",
      tel: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
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
            <Button text="отправить заявку" color="blue" type="submit" />
          </div>
        </form>
        <p className={styles.form__policy}>
          Нажимая на кнопку, вы соглашаетесь с «Правилами пользования» и
          «Политикой конфиденциальности»
        </p>
      </div>
    </>
  );
};

export default BriefForm;

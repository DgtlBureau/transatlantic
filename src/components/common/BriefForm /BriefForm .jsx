import { useFormik } from "formik";
import Button from "components/ui/Button/Button";
import cn from "classnames";
import styles from "./form.module.css";

const BriefForm = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "заполните поле";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "некорректный email";
    }
    if (!values.name) {
      errors.name = "введите имя";
    }
    if (!values.tel) {
      errors.tel = "заполните поле";
    }
    return errors;
  };

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
          <input
            placeholder="Ваше имя"
            name="name"
            value={formik.values.name}
            className={cn(styles.form__input, {
              [styles["input__errors"]]:
                formik.errors.name && formik.touched.name,
            })}
            onChange={formik.handleChange}
          />

          <input
            placeholder="Номер телефона*"
            name="tel"
            value={formik.values.tel}
            className={cn(styles.form__input, {
              [styles["input__errors"]]:
                formik.errors.tel && formik.touched.tel,
            })}
            onChange={formik.handleChange}
            required
          />

          <input
            type="email"
            placeholder="Ваш email"
            name="email"
            value={formik.values.email}
            className={cn(styles.form__input, {
              [styles["input__errors"]]:
                formik.errors.email && formik.touched.email,
            })}
            onChange={formik.handleChange}
          />

          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}

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

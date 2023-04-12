export const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "заполните поле";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "некорректный email";
  }

  if (!values.name) {
    errors.name = "введите имя";
  } else if (!/^[А-Яа-я]+$/i.test(values.name)) {
    errors.name = "введите корректное имя";
  } else if (values.name.length < 3) {
    errors.name = "не менее трех символов";
  } else if (values.name.length >= 30) {
    errors.name = "не более тридцати символов";
  }

  if (!values.tel) {
    errors.tel = "заполните поле";
  } else if (
    !/^((8|\+7)[ - ]?)?(\(?\d{3,4}\)?[ - ]?)?[\d\- ]{6,11}$/i.test(values.tel)
  ) {
    errors.tel = "некорректный номер телефона";
  } else if (values.tel.length > 11) {
    errors.tel = "некорректный номер телефона";
  }

  return errors;
};

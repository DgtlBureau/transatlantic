export const validate = (values) => {
  const errors = {};

  const schemeName = /^[А-ЯЁ][а-яё]+$/i.test;
  const schemeTel = /^((8|\+7)[ - ]?)?(\(?\d{3,4}\)?[ - ]?)?[\d\- ]{5,10}$/i
    .test;
  const schemeMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test;

  if (!values.email) {
    errors.email = "заполните поле";
  } else if (!schemeMail(values.email)) {
    errors.email = "некорректный email";
  }

  if (!values.name) {
    errors.name = "введите имя";
  } else if (!schemeName(values.name)) {
    errors.name = "введите корректное имя";
  } else if (values.name.length <= 3) {
    errors.name = "не менее трех символов";
  } else if (values.name.length >= 30) {
    errors.name = "не более тридцати символов";
  }

  if (!values.tel) {
    errors.tel = "заполните поле";
  } else if (!schemeTel(values.tel)) {
    errors.tel = "некорректный номер телефона";
  } else if (values.tel.length > 11) {
    errors.tel = "некорректный номер телефона";
  }

  return errors;
};

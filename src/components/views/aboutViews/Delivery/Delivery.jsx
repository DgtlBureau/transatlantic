import styles from "./delivery.module.css";

const Delivery = () => {
  return (
    <section className={styles.process}>
      <div className={styles.process__container}>
        <div className={styles.process__left}>
          <h3 className={styles.process__title}>
            Доставляем грузы с комфортом
          </h3>
        </div>
        <div className={styles.process__right}>
          <div className={styles.process__cards}>
            <div className={styles.process__card}>
              <h4 className={styles.process__heading}>Почему с нами удобнее</h4>
              <ul className={styles.process__list}>
                <li className={styles.process__item}>
                  <span className={styles.process__dot}>•</span>
                  <p className={styles.process__text}>
                    У нас есть надежные агенты во всех портах ЮВА, контракты с
                    ведущими морскими перевозчиками, партнеры во всех городах
                    России;
                  </p>
                </li>
                <li className={styles.process__item}>
                  <span className={styles.process__dot}>•</span>
                  <p className={styles.process__text}>
                    Не обманываем и всегда называем честные условия;
                  </p>
                </li>
                <li className={styles.process__item}>
                  <span className={styles.process__dot}>•</span>
                  <p className={styles.process__text}>
                    Поможем с сертификатами, документами и посоветуем партнеров
                    по растаможке;
                  </p>
                </li>
                <li className={styles.process__item}>
                  <span className={styles.process__dot}>•</span>
                  <p className={styles.process__text}>
                    Найдем самые выгодные маршруты, минимизируем возможные доп.
                    расходы;
                  </p>
                </li>
              </ul>
              <div className={styles.process__subdescr}>
                <p className={styles.process__text}>
                  Умеем зарабатывать доверие клиентов и они это ценят. В 2016 мы
                  работали с 35 компаниями, в 2023 их более 1000. И при этом мы
                  не растеряли гибкость, и ценим каждого клиента вне зависимости
                  от объема его грузов.
                </p>
              </div>
              <div className={styles.process__subdescr}>
                <p className={styles.process__text}>
                  Разные формы оплаты, индивидуально подходим к каждому клиенту.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;

import { Link } from "react-scroll";
import { HandySvg } from "handy-svg";
import { parkPage } from "constants";
import weightSvg from "../../../../assets/images/park/containers/weight.svg";
import volumeSvg from "../../../../assets/images/park/containers/volume.svg";
import sizeSvg from "../../../../assets/images/park/containers/size.svg";
import propertySvg from "../../../../assets/images/park/containers/property.svg";
import tankFirst from "../../../../assets/images/park/tanks/tank-1.png";
import tankSecond from "../../../../assets/images/park/tanks/tank-2.png";
import tankThird from "../../../../assets/images/park/tanks/tank-3.png";
import tankForth from "../../../../assets/images/park/tanks/tank-4.png";
import styles from "./containers.module.css";

const Containers = () => {
  return (
    <section className={styles.containers}>
      <div className={styles.containers__container}>
        <h3 className={styles.containers__title}>Виды контейнеров</h3>
        <ul className={styles.common__list}>
          {parkPage.map(
            ({
              id,
              img,
              heading,
              descr,
              weight,
              volume,
              length,
              width,
              height,
              property,
            }) => {
              return (
                <li key={id} className={styles.common__item}>
                  <div className={styles.containers__common}>
                    <div className={styles.containers__wrapper}>
                      <img
                        className={styles.containers__img}
                        src={img}
                        alt="container"
                      />
                    </div>
                    <h4 className={styles.containers__heading}>{heading}</h4>
                    <p className={styles.containers__descr}>{descr}</p>
                    <ul className={styles.containers__list}>
                      <li className={styles.containers__item}>
                        <HandySvg
                          src={weightSvg}
                          width="22"
                          height="22"
                          className={styles.containers__svg}
                        />
                        <div className={styles.containers__info}>
                          <span className={styles.containers__subheading}>
                            Max загрузка (кг)
                          </span>
                          <span className={styles.containers__value}>
                            {weight}
                          </span>
                        </div>
                      </li>
                      <li className={styles.containers__item}>
                        <HandySvg
                          src={volumeSvg}
                          width="22"
                          height="22"
                          className={styles.containers__svg}
                        />
                        <div className={styles.containers__info}>
                          <span className={styles.containers__subheading}>
                            Объем (м3)
                          </span>
                          <span className={styles.containers__value}>
                            {volume}
                          </span>
                        </div>
                      </li>
                      <li className={styles.containers__item}>
                        <HandySvg
                          src={sizeSvg}
                          width="22"
                          height="22"
                          className={styles.containers__svg}
                        />
                        <div className={styles.containers__info}>
                          <span className={styles.containers__subheading}>
                            Размеры (ДхШхВ)
                          </span>
                          <div className={styles.parameter__wrapper}>
                            <span className={styles.containers__parameter}>
                              {length}
                              <span className={styles.parameter__bold}>X</span>
                            </span>
                            <span className={styles.containers__parameter}>
                              {width}
                              <span className={styles.parameter__bold}>X</span>
                            </span>
                            <span className={styles.containers__parameter}>
                              {height}
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className={styles.containers__item}>
                        <HandySvg
                          src={propertySvg}
                          width="22"
                          height="22"
                          className={styles.containers__svg}
                        />
                        <div className={styles.containers__info}>
                          <span className={styles.containers__subheading}>
                            Стенки и крыша
                          </span>
                          <span className={styles.containers__value}>
                            {property}
                          </span>
                        </div>
                      </li>
                    </ul>
                    <Link
                      to="brief"
                      smooth={true}
                      offset={-150}
                      duration={500}
                      className={styles.container__btn}
                    >
                      Арендовать
                    </Link>
                  </div>
                </li>
              );
            }
          )}
        </ul>

        <div className={styles.tanks}>
          <div className={styles.tanks__wrapper}>
            <ul className={styles.tanks__list}>
              <li className={styles.tanks__item}>
                <img
                  className={styles.containers__img}
                  src={tankFirst}
                  alt="tank"
                />
              </li>
              <li className={styles.tanks__item}>
                <img
                  className={styles.containers__img}
                  src={tankSecond}
                  alt="tank"
                />
              </li>
              <li className={styles.tanks__item}>
                <img
                  className={styles.containers__img}
                  src={tankThird}
                  alt="tank"
                />
              </li>
              <li className={styles.tanks__item}>
                <img
                  className={styles.containers__img}
                  src={tankForth}
                  alt="tank"
                />
              </li>
            </ul>
          </div>
          <h4 className={styles.containers__heading}>Нестандартный груз?</h4>
          <p className={styles.containers__descr}>
            Поможем подобрать подходящее оборудование для перевозки любого
            нестандартного груза и организуем его перевозку
          </p>
          <Link
            to="brief"
            smooth={true}
            offset={-150}
            duration={500}
            className={styles.container__btn}
          >
            Связаться
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Containers;

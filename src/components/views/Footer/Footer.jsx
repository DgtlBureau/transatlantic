import { Link, useLocation } from "react-router-dom";
import { HandySvg } from "handy-svg";
import Contacts from "components/common/Contacts";
import NavBar from "components/common/NavBar";
import ButtonLink from "components/ui/ButtonLink/ButtonLink";
import logo from "../../../assets/images/mobile/svg/logo-mobile-header.svg";
import cn from "classnames";
import styles from "./footer.module.css";

const Footer = () => {
  const { pathname } = useLocation();
  const variant =
    `${pathname}` === "/contacts" || `${pathname}` === "/containers";

  return (
    <footer
      className={cn(styles.footer, { [styles["footer--blue"]]: variant })}
    >
      <div className={styles.footer__container}>
        <h2
          className={cn(styles.footer__title, {
            [styles["footer__title--dark"]]: variant,
          })}
        >
          Контакты
        </h2>
        <Link
          to="/"
          className={cn(styles.footer__logo, {
            [styles["footer__logo--blue"]]: variant,
          })}
        >
          <HandySvg src={logo} width="115" height="27" />
        </Link>

        <div className={styles.address}>
          <Contacts
            address="Екатеринбург"
            tel="+7 (343) 287-94-14"
            mail="ekb.office@transatlantic.pro"
            type="footer"
          />
          <Contacts
            address="Москва"
            tel="+7 (495) 287-94-14"
            mail="msk.office@transatlantic.pro"
            type="footer"
          />
        </div>

        {variant ? (
          <div className={styles.footer__button}>
            <ButtonLink to={"#"} text="Войти в личный кабинет" color="blue" />
          </div>
        ) : (
          <div className={styles.footer__button}>
            <ButtonLink to={"#"} text="Войти в личный кабинет" color="gray" />
          </div>
        )}

        <div className={styles.footer__nav}>
          <NavBar type={"footer"} />
        </div>

        <div className={styles.privasy}>
          <div className={styles["privasy__wrapper--left"]}>
            <span
              className={cn(styles.privasy__policy, {
                [styles["privasy__policy--blue"]]: variant,
              })}
            >
              Политика конфиденциальности
            </span>
            <span
              className={cn(styles.privasy__company, {
                [styles["privasy__company--dark"]]: variant,
              })}
            >
              Транспортная компания ООО «Трансатлантик»
            </span>
          </div>
          <div className={styles["privasy__wrapper--right"]}>
            <span
              className={cn(styles.privasy__year, {
                [styles["privasy__year--dark"]]: variant,
              })}
            >
              2023
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

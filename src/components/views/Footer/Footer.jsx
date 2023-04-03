import { HandySvg } from "handy-svg";
import Contacts from "components/common/Contacts";
import NavBar from "components/common/NavBar";
import logo from "../../../assets/images/mobile/svg/logo-mobile-header.svg";
import styles from "./footer.module.css";
import ButtonLink from "components/ui/ButtonLink/ButtonLink";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <h2 className={styles.footer__title}>Контакты</h2>
        <HandySvg
          src={logo}
          className={styles.footer__logo}
          width="115"
          height="27"
        />

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

        <div className={styles.footer__button}>
          <ButtonLink to={"#"} text="Войти в личный кабинет" color="gray" />
        </div>
        <div className={styles.footer__nav}>
          <NavBar type={"footer"} />
        </div>

        <div className={styles.privasy}>
          <div className={styles["privasy__wrapper--left"]}>
            <span className={styles.privasy__policy}>
              Политика конфиденциальности
            </span>
            <span className={styles.privasy__company}>
              Транспортная компания ООО «Трансатлантик»
            </span>
          </div>
          <div className={styles["privasy__wrapper--right"]}>
            <span className={styles.privasy__year}>2023</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

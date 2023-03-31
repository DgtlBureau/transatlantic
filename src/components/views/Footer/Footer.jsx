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

        <div className={styles.footer__nav}>
          <div className={styles.footer__button}>
            <ButtonLink to={"#"} text="Войти в личный кабинет" color="gray" />
          </div>

          <NavBar type={"footer"} />
        </div>

        <div className={styles.privasy}>
          <span className={styles.privasy__policy}>
            Политика конфиденциальности
          </span>
          <span className={styles.privasy__company}>
            Транспортная компания ООО «Трансатлантик»
          </span>
        </div>
        <span className={styles.privasy__year}>2023</span>
      </div>
    </footer>
  );
};

export default Footer;

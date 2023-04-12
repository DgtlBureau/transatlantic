import { NavLink, useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./navbar.module.css";

const NavBar = ({ type, setOpenMenu }) => {
  const { pathname } = useLocation();
  const { caseID } = useParams();

  const variant =
    `${pathname}` === "/contacts" ||
    `${pathname}` === "/containers" ||
    `${pathname}` === "/park";

  return (
    <nav className={cn(styles.nav, styles[`nav--${type}`])}>
      <ul className={cn(styles.nav__list, styles[`nav__list--${type}`])}>
        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            onClick={() => setOpenMenu(false)}
            to={type === "footer" ? "#" : "/services"}
            className={cn(styles.nav__link, styles[`nav__link--${type}`], {
              [styles["nav__link--blue"]]: variant,
              [styles["nav__link--light"]]: pathname === `/cases/${caseID}`,
            })}
          >
            {type === "footer" ? "О компании" : "Услуги"}
          </NavLink>
        </li>
        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            onClick={() => setOpenMenu(false)}
            to={type === "footer" ? "/services" : "/cases"}
            className={cn(styles.nav__link, styles[`nav__link--${type}`], {
              [styles["nav__link--blue"]]: variant,
              [styles["nav__link--light"]]: pathname === `/cases/${caseID}`,
            })}
          >
            {type === "footer" ? "Услуги" : "Кейсы"}
          </NavLink>
        </li>
        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            onClick={() => setOpenMenu(false)}
            to={type === "footer" ? "/cases" : "/contacts"}
            className={cn(styles.nav__link, styles[`nav__link--${type}`], {
              [styles["nav__link--blue"]]: variant,
              [styles["nav__link--light"]]: pathname === `/cases/${caseID}`,
            })}
          >
            {type === "footer" ? "Кейсы" : "Контакты"}
          </NavLink>
        </li>
        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            onClick={() => setOpenMenu(false)}
            to="/park"
            className={cn(styles.nav__link, styles[`nav__link--${type}`], {
              [styles["nav__link--blue"]]: variant,
              [styles["nav__link--light"]]: pathname === `/cases/${caseID}`,
            })}
          >
            Контейнерный парк
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  type: PropTypes.string,
  setOpenMenu: PropTypes.func,
};

NavBar.defaultProps = {
  type: "",
  setOpenMenu: () => {},
};

export default NavBar;

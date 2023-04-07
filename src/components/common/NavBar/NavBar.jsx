import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./navbar.module.css";

const NavBar = ({ type }) => {
  const { pathname } = useLocation();
  const variant =
    `${pathname}` === "/contacts" || `${pathname}` === "/containers";

  return (
    <nav className={cn(styles.nav, styles[`nav--${type}`])}>
      <ul className={cn(styles.nav__list, styles[`nav__list--${type}`])}>
        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            to="#"
            className={cn(styles.nav__link, styles[`nav__link--${type}`], {
              [styles["nav__link--blue"]]: variant,
            })}
          >
            Услуги
          </NavLink>
        </li>
        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            to="/cases"
            className={cn(styles.nav__link, styles[`nav__link--${type}`], {
              [styles["nav__link--blue"]]: variant,
            })}
          >
            Кейсы
          </NavLink>
        </li>
        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            to="/contacts"
            className={cn(styles.nav__link, styles[`nav__link--${type}`], {
              [styles["nav__link--blue"]]: variant,
            })}
          >
            Контакты
          </NavLink>
        </li>
        <li className={cn(styles.nav__item, styles[`nav__item--${type}`])}>
          <NavLink
            to="#"
            className={cn(styles.nav__link, styles[`nav__link--${type}`], {
              [styles["nav__link--blue"]]: variant,
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
};

NavBar.defaultProps = {
  type: "",
};

export default NavBar;

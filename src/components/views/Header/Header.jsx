import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { HandySvg } from "handy-svg";
import Menu from "components/common/Menu/Menu";
import IconButton from "components/ui/IconButton";
import logo from "../../../assets/images/mobile/svg/logo-mobile-header.svg";
import stick from "../../../assets/images/mobile/svg/open-stick.svg";
import cn from "classnames";
import styles from "./header.module.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const { caseID } = useParams();
  const { pathname } = useLocation();

  const variant =
    `${pathname}` === "/contacts" ||
    `${pathname}` === "/containers" ||
    `${pathname}` === "/cases" ||
    `${pathname}` === "/services" ||
    `${pathname}` === `/park`;

  return (
    <header
      className={cn(
        styles.header,
        {
          [styles["header--transparent"]]: pathname === `/cases/${caseID}`,
        },
        {
          [styles["header--light"]]: variant,
        }
      )}
    >
      <Link
        to="/"
        className={cn(styles.header__logo, {
          [styles["header__logo--white"]]: pathname === `/cases/${caseID}`,
        })}
      >
        <HandySvg src={logo} width="141" height="32" />
      </Link>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className={styles.openBtn__wrapper}>
        <IconButton
          className={styles.openBtn}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <HandySvg
            src={stick}
            width={22}
            height={3}
            className={cn(styles.openBtn__top, {
              [styles["openBtn__top--open"]]: openMenu,
            })}
          />
          <HandySvg
            src={stick}
            width={22}
            height={3}
            className={cn(styles.openBtn__middle, {
              [styles["openBtn__middle--open"]]: openMenu,
            })}
          />
          <HandySvg
            src={stick}
            width={22}
            height={3}
            className={cn(styles.openBtn__bottom, {
              [styles["openBtn__bottom--open"]]: openMenu,
            })}
          />
        </IconButton>
      </div>
      <div
        className={cn(styles.header__tel, {
          [styles["header__tel--light"]]: pathname === `/cases/${caseID}`,
        })}
      >
        <a href="tel:+73432879414">+7 (343) 287-94-14</a>
        <a href="tel:+74954454592">+7 (495) 445-45-92</a>
      </div>
    </header>
  );
};

export default Header;

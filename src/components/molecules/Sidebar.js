import { NavLink } from "react-router-dom";
import Cookie from "js-cookie";

import {
  MainLogo,
  NavbarEye,
  NavbarUser,
  NavbarContract,
  LogoutButton,
} from "../../helpers/svg";
import { menu } from "../../helpers/menu";

export const Sidebar = () => {
  console.log(document.cookie);

  return (
    <nav className="sidebar">
      <section className="sidebar-logo">
        <MainLogo className="sidebar-logo__svg" />
      </section>
      <span className="sidebar__divider"></span>

      <section className="sidebar-navigation">
        <ul className="sidebar-navigation__list">
          {menu?.map((menuItem) => {
            return (
              <li key={menuItem}>
                <NavLink
                  exact="true"
                  to={menuItem}
                  className={({ isActive }) =>
                    isActive
                      ? "sidebar-navigation__listitem sidebar-navigation__listitem--active"
                      : "sidebar-navigation__listitem"
                  }
                >
                  {menuItem === "/" ? (
                    <NavbarEye className="sidebar-navigation__listitem__svg" />
                  ) : menuItem === "/audience" ? (
                    <NavbarUser className="sidebar-navigation__listitem__svg" />
                  ) : (
                    <NavbarContract className="sidebar-navigation__listitem__svg" />
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="sidebar-logout">
        <LogoutButton className="sidebar-logout__button" />
      </section>
    </nav>
  );
};

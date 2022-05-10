import { NavLink } from "react-router-dom";

import {
  MainLogo,
  NavbarEye,
  NavbarUser,
  NavbarSocial,
} from "../../helpers/svg";
import { menu } from "../../helpers/menu";

export const Sidebar = () => {
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
                    <NavbarEye />
                  ) : menuItem === "audience" ? (
                    <NavbarUser />
                  ) : (
                    <NavbarSocial />
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </section>
    </nav>
  );
};

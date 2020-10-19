import Link from "next/link";
import { createRef } from "react";

const menu = createRef();

const MainMenu = () => {
  const toggleMenu = () => {
    menu.current.classList.toggle("show");
  };
  return (
    <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
      <nav className="main-menu" ref={menu}>
        <ul>
          <li>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Acerca de</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Conatcto</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main-menu-toggle to-l" onClick={toggleMenu}></div>
    </div>
  );
};

export default MainMenu;

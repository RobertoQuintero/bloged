import Link from "next/link";

const MainMenu = () => {
  return (
    <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
      <nav className="main-menu">
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
      <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
    </div>
  );
};

export default MainMenu;

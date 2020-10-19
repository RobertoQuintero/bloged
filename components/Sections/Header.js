const { default: MainMenu } = require("../Navigation/MainMenu");
import Link from "next/link";

const Header = () => {
  return (
    <header className="main-header">
      <div className="ed-grid s-grid-5 lg-grid-4">
        <div className="s-cols-4 lg-cols-1 s-cross-center">
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="EDlogo" className="main-logo" />
            </a>
          </Link>
        </div>
        <MainMenu />
      </div>
    </header>
  );
};

export default Header;

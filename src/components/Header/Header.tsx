import styles from "./Header.module.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../../config/ThemeConfig/ThemeConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

interface NavItem {
  name: string;
  path: string;
}

const navItemArray: NavItem[] = [
  { name: "Home", path: "/#" },
  // { name: "Dummy Page", path: "/#dummy" },
  { name: "About", path: "/#about" },
  { name: "Contact", path: "/#contact" },
];
import { useNavigate } from "react-router-dom";

const CloseButton: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ThreeSlashButton: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const MySun: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-5 h-5 text-white group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-300"
    role="img"
    aria-labelledby="ag7g3610m2j2vg5zwj4zvvh3zomoto9y"
  >
    <title id="ag7g3610m2j2vg5zwj4zvvh3zomoto9y">theme icon</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    />
  </svg>
);

interface ThemeSwitchButtonProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeSwitchButton: React.FC<ThemeSwitchButtonProps> = ({
  darkMode,
  toggleDarkMode,
}) => {
  const MoonIcon = (
    <div
      className="flex justify-center items-center w-full"
      style={{
        height: "100%",
      }}
    >
      <FontAwesomeIcon icon={faMoon} className="text-white" />
    </div>
  );
  const SunIcon = (
    <div
      className="flex justify-center items-center w-full"
      style={{
        height: "100%",
      }}
    >
      <MySun />
    </div>
  );
  return (
    <ReactSwitch
      checked={darkMode}
      onChange={toggleDarkMode}
      onColor="#334155"
      onHandleColor="#000"
      offColor="#52525B"
      offHandleColor="#fff"
      checkedIcon={MoonIcon}
      uncheckedIcon={SunIcon}
    />
  );
};

const NavList: React.FC = () => (
  <ul className={`hidden gap-4 lg:flex`}>
    {navItemArray.map((navItem) => (
      <li key={navItem.name} className="mx-2">
        <a href={navItem.path}>{navItem.name}</a>
      </li>
    ))}
  </ul>
);

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="sticky top-0">
      <nav className="w-full flex h-14 p-2 items-center justify-around border-blue-500 border-b bg-white dark:bg-slate-900	dark:border-cyan-200 dark:text-slate-200">
        <button
          className={styles.header_name}
          onClick={() => handleNavigation("/")}
        >
          Thái Nguyễn Gia Bảo
        </button>
        <NavList />
        <ThemeSwitchButton
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <button
          className="h-6 w-6 lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <CloseButton /> : <ThreeSlashButton />}
        </button>
      </nav>
      {openNav ? (
        <div className={`w-full absolute ${styles.myAnimation}`}>
          {navItemArray.map((navItem) => (
            <div
              key={navItem.name}
              className=" flex h-14 p-2 items-center justify-around bg-pink-200	opacity-90 hover:bg-green-200 hover:cursor-pointer dark:bg-slate-700 dark:text-slate-200"
            >
              <button onClick={() => handleNavigation(navItem.path)}>
                {navItem.name}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default Header;

NavList.propTypes = {
  hidden: PropTypes.bool,
};

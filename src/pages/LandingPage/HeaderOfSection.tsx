import styles from "./LandingPage.module.scss";
import { useNavigate } from "react-router-dom";

const HeaderOfSection: React.FC<HeaderOfSectionProps> = function ({
  icons,
  title,
  link,
  linkText,
  navLink,
}) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <div className="flex justify-between w-full border-blue-300 border-b pb-2 items-center">
      <div>
        <span className="text-2xl mr-2">{icons}</span>
        <span
          className={`${styles.myFont} font-bold sm:text-xl dark:text-cyan-400`}
        >
          {title}
        </span>
      </div>
      <div>
        {link ? (
          <a href={link} target="_blank" className="text-xs sm:text-sm">
            {linkText} →
          </a>
        ) : navLink ? (
          <button
            onClick={() => handleNavigation(navLink)}
            className="text-xs sm:text-sm"
          >
            {" "}
            {linkText}
            {" →"}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

type HeaderOfSectionProps = {
  icons: string;
  title: string;
  link?: string;
  linkText: string;
  navLink?: string;
};

export default HeaderOfSection;

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../config/ThemeConfig/ThemeConfig";
import styles from "./MainLayout.module.scss";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <div
        className={`dark:bg-slate-800 dark:text-slate-100 ${styles["transition-bg-text"]} min-h-screen`}
      >
        <Header />
        {children}
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;

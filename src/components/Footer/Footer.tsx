import styles from "./Footer.module.scss";
const Footer: React.FC = () => (
  <footer className="w-full text-center border-dotted border-t-2 py-4 border-blue-500 text-sm sm:text-base dark:bg-slate-800 dark:text-slate-200">
    <p className={styles.footer_font}>
      {" "}
      Thai Nguyen Gia Bao&#39;s personal website
    </p>
  </footer>
);

export default Footer;

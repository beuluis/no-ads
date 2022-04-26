import styles from "./Footer.module.css";

const Footer = () => (
  <div id={styles.footer}>
    <a
      target="_blank"
      rel="noreferrer"
      title="Legal Notice"
      href="https://luisbeu.de/legal-notice"
    >
      Legal Notice
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      title="Privacy"
      href="https://luisbeu.de/privacy"
    >
      Privacy
    </a>
  </div>
);

export default Footer;

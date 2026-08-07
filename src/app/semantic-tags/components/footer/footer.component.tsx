import { ReactElement } from "react";

import styles from "./footer.module.css";

export default function FooterComponent(): ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.footer}>
      Codective &copy; {year} All rights reserved
    </footer>
  );
}

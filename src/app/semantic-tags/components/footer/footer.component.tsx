import { ReactElement } from "react";

import styles from "./footer.module.css";

export default function FooterComponent(): ReactElement {
  return (
    <footer id="footer" className={styles.footer}>
      Codective &copy; 2025 All rights reserved
    </footer>
  );
}

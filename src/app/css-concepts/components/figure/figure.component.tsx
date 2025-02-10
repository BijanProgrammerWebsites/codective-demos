import { ReactElement } from "react";

import styles from "./figure.module.css";

export default function FigureComponent(): ReactElement {
  return (
    <section className={styles.figure}>
      <h3>Figure</h3>

      <div className={styles.model}>
        <div className={styles.margin}></div>
        <div className={styles.border}></div>
        <div className={styles.padding}></div>
        <div className={styles.content}></div>
      </div>
    </section>
  );
}

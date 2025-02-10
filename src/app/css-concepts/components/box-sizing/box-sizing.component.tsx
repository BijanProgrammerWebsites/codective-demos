import { ReactElement } from "react";

import clsx from "clsx";

import styles from "./box-sizing.module.css";

export default function BoxSizingComponent(): ReactElement {
  return (
    <section className={styles["box-sizing"]}>
      <h3>box-sizing</h3>

      <div className={styles.boxes}>
        <div>
          <h4>border-box</h4>
          <div className={clsx(styles["box"], styles["border-box"])}>4rem</div>
        </div>
        <div>
          <h4>content-box</h4>
          <div className={clsx(styles["box"], styles["content-box"])}>
            10rem
          </div>
        </div>
      </div>
    </section>
  );
}

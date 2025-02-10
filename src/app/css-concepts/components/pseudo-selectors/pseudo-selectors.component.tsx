import { ReactElement } from "react";

import styles from "./pseudo-selectors.module.css";

export default function PseudoSelectorsComponent(): ReactElement {
  return (
    <section className={styles["pseudo-selectors"]}>
      <h3>Pseudo Selectors</h3>

      <form>
        <div>When can you participate in non-technical sessions?</div>

        <div className={styles.choice}>
          <input id="time-1" type="checkbox" name="time-1" />
          <label htmlFor="time-1">from 06:00 to 08:00</label>
        </div>

        <div className={styles.choice}>
          <input id="time-2" type="checkbox" name="time-2" />
          <label htmlFor="time-2">from 08:00 to 10:00</label>
        </div>

        <div className={styles.choice}>
          <input id="time-3" type="checkbox" name="time-3" defaultChecked />
          <label htmlFor="time-3">from 10:00 to 12:00</label>
        </div>

        <div className={styles.choice}>
          <input id="time-4" type="checkbox" name="time-4" />
          <label htmlFor="time-4">from 12:00 to 14:00</label>
        </div>
      </form>
    </section>
  );
}

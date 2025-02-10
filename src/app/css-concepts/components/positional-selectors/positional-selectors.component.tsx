import { ReactElement } from "react";

import styles from "./positional-selectors.module.css";

export default function PositionalSelectorsComponent(): ReactElement {
  return (
    <section className={styles["positional-selectors"]}>
      <h3>Positional Selectors</h3>

      <ul>
        <li>
          <code>:nth-child(2n + 1)</code>
        </li>
        <li>
          <code>:nth-child(2n)</code>
        </li>
        <li>
          <code>:nth-child(2n + 1)</code>
        </li>
        <li>
          <code>:nth-child(2n)</code>
        </li>
        <li>
          <code>:nth-child(2n + 1)</code>
        </li>
      </ul>
    </section>
  );
}

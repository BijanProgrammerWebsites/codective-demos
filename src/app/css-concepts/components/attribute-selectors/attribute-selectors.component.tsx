import { ReactElement } from "react";

import styles from "./attribute-selectors.module.css";

export default function AttributeSelectorsComponent(): ReactElement {
  return (
    <section className={styles["attribute-selectors"]}>
      <h3>Attribute Selectors</h3>

      <form>
        <label>
          email
          <input type="email" placeholder="ex: bijaneisapour@gmail.com" />
        </label>

        <label>
          username
          <input type="text" placeholder="ex: BijanProgrammer" />
        </label>

        <label>
          password
          <input
            type="password"
            placeholder="ex: 1234"
            autoComplete="new-password"
          />
        </label>

        <label>
          age
          <input type="number" min="1" max="99" placeholder="ex: 23" />
        </label>
      </form>
    </section>
  );
}

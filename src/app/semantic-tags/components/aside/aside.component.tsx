import { ReactElement } from "react";

import styles from "./aside.module.css";

export default function AsideComponent(): ReactElement {
  return (
    <aside id="aside" className={styles.aside}>
      <section>
        <div className={styles.title}>Table of Contents</div>
        <nav>
          <ul>
            <li>
              <a href="#abstract">Abstract</a>
            </li>
            <li>
              <a href="#introduction">Introduction</a>
            </li>
            <li>
              <a href="#materials-and-methods">Materials & Methods</a>
            </li>
            <li>
              <a href="#results">Results</a>
            </li>
            <li>
              <a href="#discussion">Discussion</a>
            </li>
            <li>
              <a href="#acknowledgments">Acknowledgments</a>
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  );
}

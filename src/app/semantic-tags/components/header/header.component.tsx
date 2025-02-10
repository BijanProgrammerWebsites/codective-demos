import { ReactElement } from "react";

import { ButtonComponent } from "@/components/button/button.component";

import styles from "./header.module.css";

export default function HeaderComponent(): ReactElement {
  return (
    <header id="header" className={styles.header}>
      <h3 className={styles.logo}>Codective</h3>

      <nav id="nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>

      <ButtonComponent variant="primary">SIGNUP</ButtonComponent>
    </header>
  );
}

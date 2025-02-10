import Link from "next/link";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <header>
        <h1>
          <Link href="/ui-ux">UI/UX</Link>: Contrast
        </h1>
      </header>
      <main>
        <div className={styles.brand}>
          <h3>Large Header</h3>
          <address>Number, Name, Street, District, City, State</address>
        </div>
        <div className={styles["quick-access"]}>
          <nav>
            <div className={styles.column}>
              <h4>Products</h4>
              <ul>
                <li>Something</li>
                <li>Something Else</li>
                <li>A Thing</li>
                <li>Other Thing</li>
                <li>Last Thing</li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4>Locations</h4>
              <ul>
                <li>One City</li>
                <li>Some Other City</li>
                <li>Another City</li>
                <li>Yet Another City</li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4>Contact</h4>
              <ul>
                <li>Form</li>
                <li>Email</li>
                <li>Phone</li>
                <li>SMS</li>
              </ul>
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
}

import Link from "next/link";

import { ButtonComponent } from "@/components/button/button.component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <header>
        <h1>
          <Link href="/ui-ux">UI/UX</Link>: Color
        </h1>
      </header>
      <main>
        <h2>Signup Form!</h2>

        <form>
          <div className={styles.fields}>
            <label>
              email
              <input
                type="email"
                name="email"
                placeholder="ex: bijaneisapour@gmail.com"
              />
            </label>

            <label>
              username
              <input
                type="text"
                name="username"
                placeholder="ex: BijanProgrammer"
              />
            </label>

            <label>
              password
              <input
                type="password"
                name="password"
                placeholder="ex: 1234"
                autoComplete="new-password"
              />
            </label>

            <label>
              age
              <input
                type="number"
                name="age"
                min="1"
                max="99"
                placeholder="ex: 23"
              />
            </label>
          </div>

          <ButtonComponent
            className={styles.danger}
            type="button"
            variant="danger"
          >
            SIGNUP
          </ButtonComponent>

          <ButtonComponent
            className={styles.primary}
            type="button"
            variant="primary"
          >
            SIGNUP
          </ButtonComponent>
        </form>
      </main>
    </div>
  );
}

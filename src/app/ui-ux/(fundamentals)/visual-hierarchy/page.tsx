import Image from "next/image";
import Link from "next/link";

import avatarImage from "@/assets/images/avatar.svg";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <header>
        <h1>
          <Link href="/ui-ux">UI/UX</Link>: Visual Hierarchy
        </h1>
      </header>
      <main>
        <Image src={avatarImage} alt="user's avatar" loading="eager" />
        <div className={styles.info}>
          <h2>Someone Something</h2>
          <div className={styles.field}>
            <div className={styles.label}>email</div>
            <div className={styles.content}>someone@somewhere.something</div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>phone</div>
            <div className={styles.content}>+989123456789</div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>website</div>
            <div className={styles.content}>somewhere.something</div>
          </div>
        </div>
      </main>
    </div>
  );
}

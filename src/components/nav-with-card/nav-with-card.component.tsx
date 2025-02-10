import { ReactElement } from "react";

import Link from "next/link";

import styles from "./nav-with-card.module.css";

type NavItem = {
  href: string;
  title: string;
};

type Props = {
  items: NavItem[];
};

export default function NavWithCardComponent({ items }: Props): ReactElement {
  return (
    <nav className={styles["nav-with-card"]}>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

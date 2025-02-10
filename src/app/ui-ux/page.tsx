import type { Metadata } from "next";

import NavWithCardComponent from "@/components/nav-with-card/nav-with-card.component";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Codective Demos | UI/UX",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <header>
        <h1>UI/UX</h1>
      </header>
      <main>
        <NavWithCardComponent
          items={[
            { href: "/ui-ux/alignment", title: "Alignment" },
            { href: "/ui-ux/color", title: "Color" },
            { href: "/ui-ux/contrast", title: "Contrast" },
            { href: "/ui-ux/typography", title: "Typography" },
            { href: "/ui-ux/visual-hierarchy", title: "Visual Hierarchy" },
            { href: "/ui-ux/white-space", title: "White Space" },
          ]}
        />
      </main>
    </div>
  );
}

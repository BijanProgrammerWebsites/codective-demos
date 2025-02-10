import NavWithCardComponent from "@/components/nav-with-card/nav-with-card.component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <header>
        <h1>Codective Demos</h1>
      </header>
      <main>
        <NavWithCardComponent
          items={[
            { href: "/css-concepts", title: "CSS Concepts" },
            { href: "/semantic-tags", title: "Semantic Tags" },
            { href: "/ui-ux", title: "UI/UX" },
          ]}
        />
      </main>
    </div>
  );
}

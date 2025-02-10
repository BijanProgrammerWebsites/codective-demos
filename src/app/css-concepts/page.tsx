import type { Metadata } from "next";

import PositionalSelectorsComponent from "@/app/css-concepts/components/positional-selectors/positional-selectors.component";
import PseudoSelectorsComponent from "@/app/css-concepts/components/pseudo-selectors/pseudo-selectors.component";
import AttributeSelectorsComponent from "@/app/css-concepts/components/attribute-selectors/attribute-selectors.component";
import BoxSizingComponent from "@/app/css-concepts/components/box-sizing/box-sizing.component";
import FigureComponent from "@/app/css-concepts/components/figure/figure.component";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Codective Demos | CSS Concepts",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <header>
        <h1>CSS Concepts</h1>
      </header>
      <main>
        <article className={styles["box-model"]}>
          <h2>Box Model</h2>
          <FigureComponent />
          <BoxSizingComponent />
        </article>

        <article className={styles.selectors}>
          <h2>Selectors</h2>
          <AttributeSelectorsComponent />
          <PositionalSelectorsComponent />
          <PseudoSelectorsComponent />
        </article>
      </main>
    </div>
  );
}

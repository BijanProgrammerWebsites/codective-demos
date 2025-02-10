import type { Metadata } from "next";

import HeaderComponent from "@/app/semantic-tags/components/header/header.component";
import MainComponent from "@/app/semantic-tags/components/main/main.component";
import AsideComponent from "@/app/semantic-tags/components/aside/aside.component";
import FooterComponent from "@/app/semantic-tags/components/footer/footer.component";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Codective Demos | Semantic Tags",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <HeaderComponent />
      <div className={styles["main-and-aside"]}>
        <MainComponent />
        <AsideComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

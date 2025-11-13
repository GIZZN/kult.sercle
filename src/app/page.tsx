"use client";
import styles from "./page.module.css";
import KultSercle from "./components/kult_sercle";

export default function Home() {
  return (
    <div className={styles.page}>
      <KultSercle />
    </div>
  );
}

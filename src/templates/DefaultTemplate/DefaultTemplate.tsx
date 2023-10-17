import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./DefaultTemplate.module.scss";

export function DefaultTemplate() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.mainSection}>
        <Outlet />
      </section>
    </main>
  );
}

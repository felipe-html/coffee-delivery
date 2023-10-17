import { Banner } from "./components/Banner";
import { CoffeeCard } from "./components/CoffeeCard";
import { coffees } from "../../data";
import styles from "./styles.module.scss";

export function Home() {
  return (
    <section className={styles.section}>
      <Banner />
      <article className={styles.article}>
        <div className={styles.subtitle}>
          <h1>Nossos cafés</h1>
        </div>
        <div className={styles.coffeesContainer}>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </article>
    </section>
  );
}

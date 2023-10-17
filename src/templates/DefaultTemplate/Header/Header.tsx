import { useNavigate } from "react-router-dom";
import { MdLocationPin, MdShoppingCart } from "react-icons/md";
import { useShoppingCart } from "../../../hooks/useShoppingCart";
import styles from "./styles.module.scss";

export function Header() {
  const { totalProducts } = useShoppingCart();
  const navigate = useNavigate();

  function handleNavigateToPath(path: string) {
    navigate(path);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.headerContainer}>
        <img
          src="/Logo.svg"
          alt="Coffee Delivery"
          title="Coffee Delivery"
          onClick={() => handleNavigateToPath("/home")}
        />
        <div className={styles.buttonsFrame}>
          <div className={styles.location} title="Porto Alegre">
            <MdLocationPin />
            <p>Porto Alegre, RS</p>
          </div>
          <div
            className={styles.cart}
            title="Carrinho"
            onClick={() => handleNavigateToPath("/shoping-cart")}
          >
            {totalProducts > 0 && <span>{totalProducts}</span>}
            <MdShoppingCart />
          </div>
        </div>
      </nav>
    </header>
  );
}

import { useShoppingCart } from "../../../../hooks/useShoppingCart";
import { utils } from "../../../../utils/utils";
import { ProductItem } from "../ProductItem";
import styles from "./styles.module.scss";

interface CartProductsProps {
  onSubmit: () => void;
}

export function CartProducts({ onSubmit }: CartProductsProps) {
  const { productsInCart } = useShoppingCart();

  function calculateProductAmount(deliveryPrice?: number) {
    let totalAmount = 0;

    productsInCart.forEach((product) => {
      totalAmount += product.price * product.productAmount;
    });

    if (deliveryPrice) totalAmount += deliveryPrice;

    return utils.formatProductPriceToCurrency(totalAmount);
  }

  return (
    <section className={styles.productsContainer}>
      <h1>Cafés selecionados</h1>

      <article className={styles.frame}>
        <div>
          <div className={styles.coffeesContainer}>
            {productsInCart.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>

          <div className={styles.cartPriceContainer}>
            <div className={styles.totalOfItensAndDeliveryPrice}>
              <p>Total dos itens</p>
              <span>R${calculateProductAmount()}</span>
            </div>
            <div className={styles.totalOfItensAndDeliveryPrice}>
              <p>Entrega</p>
              <span>R$ 5,00</span>
            </div>
            <div className={styles.totalCartPrice}>
              <p>Total</p>
              <span>R${calculateProductAmount(5)}</span>
            </div>
          </div>

          <div className={styles.submitButton}>
            <button type="button" onClick={onSubmit}>
              CONFIRMAR PEDIDO
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

import { useEffect, useState } from "react";
import { useShoppingCart } from "../../../../hooks/useShoppingCart";
import { CartProductsProps } from "../../../../types/cart";
import { utils } from "../../../../utils/utils";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";

interface ProductInCartProps {
  product: CartProductsProps;
}

export function ProductItem({ product }: ProductInCartProps) {
  const {
    incrementProductQuantity,
    decrementProductQuantity,
    removeProductToCart,
  } = useShoppingCart();

  const [productAmount, setProductAmount] = useState<number>(
    product.productAmount
  );

  function handleDecrementProductQuantity() {
    if (productAmount == 1) return;
    decrementProductQuantity(product, 1);
  }

  function handleIncrementProductAmount() {
    incrementProductQuantity(product, 1);
  }

  function handleRemoveProductToCart() {
    removeProductToCart(product);
    toast.success("Produto removido com sucesso!");
  }

  useEffect(() => {
    setProductAmount(product.productAmount);
  }, [product]);

  return (
    <div key={product.id} className={styles.coffeeCard}>
      <div className={styles.coffeeImage}>
        <img src={product.image} alt="" />
      </div>

      <div className={styles.coffeeDescriptionAndQuantity}>
        <p>{product.name}</p>
        <div className={styles.buttonsContainer}>
          <div className={styles.changeQuantity}>
            <span onClick={handleDecrementProductQuantity}>-</span>
            <p>{productAmount}</p>
            <span onClick={handleIncrementProductAmount}>+</span>
          </div>
          <div
            className={styles.deleteButton}
            onClick={handleRemoveProductToCart}
          >
            <img src="/assets/trash-icon.svg" />
            <p>Remover</p>
          </div>
        </div>
      </div>

      <div className={styles.totalProductPrice}>
        <span>R$</span>
        <p>
          {utils.formatProductPriceToCurrency(
            product.productAmount * product.price
          )}
        </p>
      </div>
    </div>
  );
}

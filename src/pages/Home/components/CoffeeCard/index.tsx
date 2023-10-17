import { useState } from "react";
import { CoffeeProps } from "../../../../types/coffee";
import { MdShoppingCart } from "react-icons/md";
import { useShoppingCart } from "../../../../hooks/useShoppingCart";
import { toast } from "react-toastify";
import { utils } from "../../../../utils/utils";
import styles from "./styles.module.scss";

interface CoffeeCardProps {
  coffee: CoffeeProps;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addProductToCart, incrementProductQuantity, productsInCart } =
    useShoppingCart();
  const [productAmount, setProductAmount] = useState<number>(1);

  function handleAddProductToCart() {
    const productAlreadyAdded = productsInCart.find(
      (product) => product.id === coffee.id
    );

    setProductAmount(1);

    const toastMessage = `Produto${productAmount > 1 ? "s" : ""} adicionado${
      productAmount > 1 ? "s" : ""
    } ao seu carrinho`;

    toast.success(toastMessage);

    if (productAlreadyAdded) {
      return incrementProductQuantity(coffee, productAmount);
    }
    addProductToCart(coffee, productAmount);
  }

  return (
    <div key={coffee.id} className={styles.coffeeCard}>
      <img src={coffee.image} alt="" />
      <div className={styles.tagsContainer}>
        {coffee.tags.map((tag) => (
          <span key={tag.id}>{tag.name}</span>
        ))}
      </div>
      <h1>{coffee.name}</h1>
      <p>{coffee.description}</p>
      <div className={styles.priceContainer}>
        <div className={styles.price}>
          <span>R$</span>
          <p>{utils.formatProductPriceToCurrency(coffee.price)}</p>
        </div>
        <div className={styles.quantityAndAddToCartContainer}>
          <div className={styles.quantityContainer}>
            <span
              onClick={() => {
                if (productAmount > 1)
                  setProductAmount((oldValue) => {
                    return oldValue - 1;
                  });
              }}
            >
              -
            </span>
            <p>{productAmount}</p>
            <span
              onClick={() => {
                setProductAmount((oldValue) => {
                  return oldValue + 1;
                });
              }}
            >
              +
            </span>
          </div>
          <div
            className={styles.addtoCartButton}
            onClick={handleAddProductToCart}
          >
            <MdShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}

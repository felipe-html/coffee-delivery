import { useEffect } from "react";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import styles from "./styles.module.scss";

export function Resume() {
  const { orderInformations, setSelectedPaymentMethod } = useShoppingCart();

  const paymentMethodsLabels: { [key: string]: string } = {
    MONEY: "Dinheiro",
    CREDIT_CARD: "Cartão de Crédito",
    DEBIT_CARD: "Cartão de Débito",
  };

  useEffect(() => {
    setSelectedPaymentMethod(null);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <p>Uhu! Pedido confirmado</p>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </div>
      <article className={styles.container}>
        <div className={styles.box}>
          <div className={styles.tipBox}>
            <img src="/assets/purple-pointer-icon.svg" alt="" />
            <div>
              <p>{orderInformations.address}</p>
            </div>
          </div>

          <div className={styles.tipBox}>
            <img src="/assets/timer-icon.svg" alt="" />
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </div>

          <div className={styles.tipBox}>
            <img src="/assets/cash-icon.svg" alt="" />
            <div>
              <p>Pagamento na entrega</p>
              <strong>
                {paymentMethodsLabels[orderInformations.selectedPaymentMethod!]}
              </strong>
            </div>
          </div>
        </div>
        <div className={styles.hero}>
          <img src="/resume-banner.svg" alt="" />
        </div>
      </article>
    </section>
  );
}

import { useShoppingCart } from "../../../../hooks/useShoppingCart";
import { PaymentMethodEnum } from "../../../../types/cart";
import styles from "./styles.module.scss";

export function PaymetnMethod() {
  const { selectedPaymentMethod, setSelectedPaymentMethod } = useShoppingCart();

  return (
    <section className={styles.frame}>
      <div className={styles.content}>
        <div className={styles.frameTitle}>
          <div className={styles.frameIcon}>
            <img src="/assets/money-icon.svg" />
          </div>
          <div className={styles.frameTitleDescription}>
            <p>Pagamento</p>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </div>
        <div className={styles.paymentMethodContainer}>
          <div
            className={`${styles.paymentMethodCard} ${
              selectedPaymentMethod === PaymentMethodEnum.CREDIT_CARD &&
              styles.paymentSelected
            }`}
            onClick={() =>
              setSelectedPaymentMethod(PaymentMethodEnum.CREDIT_CARD)
            }
          >
            <img src="/assets/credit-card-icon.svg" alt="" />
            <p>CARTÃO DE CRÉDITO</p>
          </div>
          <div
            className={`${styles.paymentMethodCard} ${
              selectedPaymentMethod === PaymentMethodEnum.DEBIT_CARD &&
              styles.paymentSelected
            }`}
            onClick={() =>
              setSelectedPaymentMethod(PaymentMethodEnum.DEBIT_CARD)
            }
          >
            <img src="/assets/debit-card-icon.svg" alt="" />
            <p>CARTÃO DE DÉBITO</p>
          </div>
          <div
            className={`${styles.paymentMethodCard} ${
              selectedPaymentMethod === PaymentMethodEnum.MONEY &&
              styles.paymentSelected
            }`}
            onClick={() => setSelectedPaymentMethod(PaymentMethodEnum.MONEY)}
          >
            <img src="/assets/money-icon.svg" alt="" />
            <p>DINHEIRO</p>
          </div>
        </div>
      </div>
    </section>
  );
}

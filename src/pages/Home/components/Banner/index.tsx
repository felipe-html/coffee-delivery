import styles from "./styles.module.scss";

export function Banner() {
  return (
    <article className={styles.background}>
      <div className={styles.bannercontainer}>
        <div className={styles.bannerMessageContainer}>
          <div className={styles.bannerMessage}>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div className={styles.bannerTipsContainer}>
            <div className={styles.labelBox}>
              <img src="/assets/cart-icon.svg" alt="" />
              <span></span> Compra simples e segura
            </div>
            <div className={styles.labelBox}>
              <img src="/assets/box-icon.svg" alt="" />
              <span></span> Embalagem mantém o café intacto
            </div>
            <div className={styles.labelBox}>
              <img src="/assets/timer-icon.svg" alt="" />
              <span></span> Entrega rápida e rastreada
            </div>
            <div className={styles.labelBox}>
              <img src="/assets/coffee-icon.svg" alt="" />
              <span></span> O café chega fresquinho até você
            </div>
          </div>
        </div>
        <div className={styles.bannerImage}>
          <img src="/Banner.svg" alt="" />
        </div>
      </div>
    </article>
  );
}

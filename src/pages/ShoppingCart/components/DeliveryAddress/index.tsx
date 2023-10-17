import { Input } from "../../../../components/Input";
import { Control, FieldErrors } from "react-hook-form";
import { DeliveryProps } from "../../../../types/delivery";
import { SchemaProps } from "../..";
import styles from "./styles.module.scss";

interface DeliveryAddressProps {
  control: Control<SchemaProps, any>;
  errors: FieldErrors<DeliveryProps>;
}

export function DeliveryAddress({ control, errors }: DeliveryAddressProps) {
  return (
    <section className={styles.addressContainer}>
      <h1>Complete seu pedido</h1>

      <article className={styles.frame}>
        <div className={styles.content}>
          <div className={styles.frameTitle}>
            <div className={styles.frameIcon}>
              <img src="/assets/pointer-icon.svg" />
            </div>
            <div className={styles.frameTitleDescription}>
              <p>Endereço de entrega</p>
              <span>Informe o endereço onde deseja recebr seu pedido</span>
            </div>
          </div>
          <form className={styles.form}>
            <div className={styles.formLine}>
              <Input
                type="text"
                placeholder="CEP"
                scale="medium"
                mask="99999-999"
                registerField="cep"
                control={control}
                errors={errors}
              />
            </div>
            <div className={styles.formLine}>
              <Input
                type="text"
                placeholder="Rua"
                scale="large"
                registerField="street"
                control={control}
                errors={errors}
              />
            </div>
            <div className={styles.formLine}>
              <Input
                type="text"
                placeholder="Número"
                scale="medium"
                registerField="number"
                control={control}
                errors={errors}
              />
              <Input
                type="text"
                placeholder="Complemento"
                scale="large"
                optional
                registerField="complement"
                control={control}
                errors={errors}
              />
            </div>
            <div className={styles.formLine}>
              <Input
                type="text"
                placeholder="Bairro"
                scale="medium"
                registerField="neighborhood"
                control={control}
                errors={errors}
              />
              <Input
                type="text"
                placeholder="Cidade"
                scale="medium"
                registerField="city"
                control={control}
                errors={errors}
              />
              <Input
                type="text"
                placeholder="UF"
                scale="short"
                registerField="state"
                control={control}
                errors={errors}
              />
            </div>
          </form>
        </div>
      </article>
    </section>
  );
}

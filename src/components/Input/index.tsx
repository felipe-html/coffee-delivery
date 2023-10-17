import { InputHTMLAttributes } from "react";
import { Path, Controller, Control, FieldErrors } from "react-hook-form";
import { DeliveryProps } from "../../types/delivery";
import { SchemaProps } from "../../pages/ShoppingCart";
import InputMask from "react-input-mask";
import styles from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean;
  scale?: "short" | "medium" | "large";
  mask?: string;
  control: Control<SchemaProps, any>;
  errors: FieldErrors<DeliveryProps>;
  registerField: Path<DeliveryProps>;
}

export function Input({
  optional = false,
  scale = "large",
  mask,
  registerField,
  control,
  errors,
  ...rest
}: InputProps) {
  return (
    <div className={`${styles.container} ${styles[scale]}`}>
      <Controller
        name={registerField}
        control={control}
        render={({ field }) => (
          <InputMask
            mask={mask || ""}
            maskChar={null}
            className={`${styles.input} ${
              errors[registerField] ? styles.inputError : ""
            }`}
            {...field}
            {...rest}
          />
        )}
      />
      {errors[registerField] && (
        <div className={styles.errorMessage}>
          {errors[registerField]?.message}
        </div>
      )}
      {optional && <div className={styles.optional} />}
    </div>
  );
}

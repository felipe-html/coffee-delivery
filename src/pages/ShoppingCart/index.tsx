import { DeliveryAddress } from "./components/DeliveryAddress";
import { PaymetnMethod } from "./components/PaymentMethod";
import { CartProducts } from "./components/CartProducts";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DeliveryProps } from "../../types/delivery";
import { selectedAddressKey } from "../../constants";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import * as zod from "zod";

const validationSchema = zod
  .object({
    cep: zod.string().min(9, { message: "Informe um cep" }),
    street: zod.string().min(1, { message: "Informe a rua" }),
    number: zod.string().min(1, { message: "Informe o número" }),
    complement: zod.string(),
    neighborhood: zod.string().min(1, { message: "Informe o bairro" }),
    city: zod.string().min(1, { message: "Informe a cidade" }),
    state: zod.string().min(1, { message: "Informe a UF" }),
  })
  .required({
    cep: true,
    street: true,
    number: true,
    neighborhood: true,
    city: true,
    state: true,
  });

export type SchemaProps = zod.infer<typeof validationSchema>;

export function ShoppingCart() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SchemaProps>({
    resolver: zodResolver(validationSchema),
    shouldFocusError: false,
    defaultValues: {
      cep: "",
      city: "",
      complement: "",
      neighborhood: "",
      number: "",
      state: "",
      street: "",
    },
  });

  const {
    productsInCart,
    selectedPaymentMethod,
    setSelectedPaymentMethod,
    setOrderInformations,
    clearShoppingCart,
  } = useShoppingCart();
  const navigate = useNavigate();

  function onEventSubmit(data: DeliveryProps) {
    if (!selectedPaymentMethod) {
      toast.warning("Selecione a forma de pagamento.");
      return;
    }

    let address = "";

    address += data.street + ", ";
    address += data.number + " ";
    address += data.neighborhood + " - ";
    address += data.city + " ";
    address += data.state;

    let orderInformations = {
      address,
      selectedPaymentMethod,
    };

    localStorage.setItem(selectedAddressKey, JSON.stringify(orderInformations));

    setOrderInformations(orderInformations);
    navigate("/resume");

    clearShoppingCart();
  }

  useEffect(() => {
    setSelectedPaymentMethod(null);
  }, []);

  return (
    <main className={styles.main}>
      {productsInCart.length > 0 ? (
        <>
          <div className={styles.orderContainer}>
            <DeliveryAddress control={control} errors={errors} />
            <PaymetnMethod />
          </div>
          <CartProducts onSubmit={handleSubmit(onEventSubmit)} />
        </>
      ) : (
        <div className={styles.emptyCart}>
          <p>Você não possui produtos no seu carrinho.</p>
        </div>
      )}
    </main>
  );
}

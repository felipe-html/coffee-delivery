import { CoffeeProps } from "./coffee"

export enum ShoppingCartEnum {
    "ADD_PRODUCT_TO_CART" = "ADD_PRODUCT_TO_CART",
    "INCREMENT_PRODUCT_QUANTITY" = "INCREMENT_PRODUCT_QUANTITY",
    "DECREMENT_PRODUCT_QUANTITY" = "DECREMENT_PRODUCT_QUANTITY",
    "REMOVE_PRODUCT_TO_CART" = "REMOVE_PRODUCT_TO_CART",
    "CLEAR_SHOPPING_CART" = "CLEAR_SHOPPING_CART",
}

export type CartProductsProps = CoffeeProps &{
    productAmount: number
}

export enum PaymentMethodEnum {
    "CREDIT_CARD" = "CREDIT_CARD",
    "DEBIT_CARD" = "DEBIT_CARD",
    "MONEY" = "MONEY",
}

export type OrderInformationsProps = {
    address: string,
    selectedPaymentMethod: PaymentMethodEnum
}
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { shoppingCartReducer } from "../reducers/cart";
import {
  CartProductsProps,
  OrderInformationsProps,
  PaymentMethodEnum,
  ShoppingCartEnum,
} from "../types/cart";
import { productsInCartKey, selectedAddressKey } from "../constants";
import { CoffeeProps } from "../types/coffee";

interface useShoppingCartProps {
  children: ReactNode;
}

interface ShoppingCartContextData {
  selectedPaymentMethod: PaymentMethodEnum | null;
  setSelectedPaymentMethod: Dispatch<SetStateAction<PaymentMethodEnum | null>>;
  productsInCart: CartProductsProps[];
  totalProducts: number;
  orderInformations: OrderInformationsProps;
  setOrderInformations: Dispatch<SetStateAction<OrderInformationsProps>>;

  addProductToCart: (product: CoffeeProps, productAmount: number) => void;
  incrementProductQuantity: (
    product: CoffeeProps,
    productAmount: number
  ) => void;
  decrementProductQuantity: (
    product: CoffeeProps,
    productAmount: number
  ) => void;
  removeProductToCart: (product: CoffeeProps) => void;
  clearShoppingCart: () => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextData);

function ShoppingCartProvider({ children }: useShoppingCartProps) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethodEnum | null>(null);

  const [orderInformations, setOrderInformations] =
    useState<OrderInformationsProps>(() => {
      let data = localStorage.getItem(selectedAddressKey);

      if (data) {
        return JSON.parse(data);
      } else {
        return "";
      }
    });

  const [totalProducts, setTotalProducts] = useState<number>(0);

  const [productsInCart, dispatch] = useReducer(
    shoppingCartReducer,
    [],
    (initialState) => {
      let productsOnstorage = localStorage.getItem(productsInCartKey);

      if (productsOnstorage) {
        return JSON.parse(productsOnstorage);
      }
      return initialState;
    }
  );

  function addProductToCart(product: CoffeeProps, productAmount: number) {
    dispatch({
      type: ShoppingCartEnum.ADD_PRODUCT_TO_CART,
      payload: {
        product,
        productAmount,
      },
    });
  }

  function incrementProductQuantity(
    product: CoffeeProps,
    productAmount: number
  ) {
    dispatch({
      type: ShoppingCartEnum.INCREMENT_PRODUCT_QUANTITY,
      payload: {
        product,
        productAmount,
      },
    });
  }

  function decrementProductQuantity(
    product: CoffeeProps,
    productAmount: number
  ) {
    dispatch({
      type: ShoppingCartEnum.DECREMENT_PRODUCT_QUANTITY,
      payload: { product, productAmount },
    });
  }

  function removeProductToCart(product: CoffeeProps) {
    dispatch({
      type: ShoppingCartEnum.REMOVE_PRODUCT_TO_CART,
      payload: { product },
    });
  }

  function clearShoppingCart() {
    localStorage.removeItem(productsInCartKey);
    dispatch({
      type: ShoppingCartEnum.CLEAR_SHOPPING_CART,
      payload: null,
    });
  }

  useEffect(() => {
    let totalProductsQuantity = 0;

    productsInCart.forEach((product) => {
      totalProductsQuantity += product.productAmount;
    });

    localStorage.setItem(productsInCartKey, JSON.stringify(productsInCart));

    setTotalProducts(totalProductsQuantity);
  }, [productsInCart]);

  return (
    <ShoppingCartContext.Provider
      value={{
        selectedPaymentMethod,
        setSelectedPaymentMethod,
        totalProducts,
        productsInCart,
        addProductToCart,
        incrementProductQuantity,
        decrementProductQuantity,
        removeProductToCart,
        orderInformations,
        setOrderInformations,
        clearShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export { useShoppingCart, ShoppingCartProvider };

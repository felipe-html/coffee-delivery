import { CartProductsProps, ShoppingCartEnum } from "../types/cart";

export function shoppingCartReducer(state: CartProductsProps[], action: {type:ShoppingCartEnum, payload: any }){
    switch(action.type){
        
        case ShoppingCartEnum.ADD_PRODUCT_TO_CART:
            return [...state, {...action.payload.product, productAmount: action.payload.productAmount}]
            
        case ShoppingCartEnum.INCREMENT_PRODUCT_QUANTITY:
            return state.map(product => {
                if(product.id === action.payload.product.id){
                    return {
                        ...product,
                        productAmount: product.productAmount + action.payload.productAmount
                    }
                } else {
                    return product
                }
            })
        
        case ShoppingCartEnum.DECREMENT_PRODUCT_QUANTITY:
            return state.map(product => {
                if(product.id === action.payload.product.id){
                    return {
                        ...product,
                        productAmount: product.productAmount - action.payload.productAmount
                    }
                } else {
                    return product
                }
            })

        case ShoppingCartEnum.REMOVE_PRODUCT_TO_CART:
            return state.filter(product => product.id !== action.payload.product.id)

        case ShoppingCartEnum.CLEAR_SHOPPING_CART:
            return []

        default:
            return state
    }
}
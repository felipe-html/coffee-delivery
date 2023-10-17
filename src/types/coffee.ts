export type CoffeeProps = {
        id: number,
        tags: {id: number, name: CoffeeCategoryEnum}[],
        name: string,
        description: string,
        price: number,
        amount: number,
        image: string
}

export enum CoffeeCategoryEnum {
    "TRADITIONAL" = "TRADICIONAL",
    "WITH_MILK" = "COM LEITE",
    "ALCOHOLIC" = "ALCOÓLICO",
    "COLD" = "GELADO",
    "SPECIAL" = "ESPECIAL"
}
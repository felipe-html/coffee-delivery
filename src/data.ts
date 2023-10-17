import {CoffeeCategoryEnum, CoffeeProps} from "./types/coffee"

export const coffees = [
    {
        id: 1,
        tags: [{id: 1, name: CoffeeCategoryEnum.TRADITIONAL }],
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 9.90,
        amount: 20,
        image: "/products/coffee-traditional-express.png"
    },
    {
        id: 2,
        tags: [{id: 1, name: CoffeeCategoryEnum.TRADITIONAL}],
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 9.90,
        amount: 20,
        image: "/products/coffee-american-express.png"
    },
    {
        id: 3,
        tags: [{id: 1, name: CoffeeCategoryEnum.TRADITIONAL}],
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: 9.90,
        amount: 20,
        image: "/products/coffee-creamy-express.png"
    },
    {
        id: 4,
        tags: [{id: 1, name: CoffeeCategoryEnum.TRADITIONAL}, {id: 2, name: CoffeeCategoryEnum.COLD}],
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 9.90,
        amount: 20,
        image: "/products/coffee-cold-express.png"
    },
    {
        id: 5,
        tags: [{id: 1, name: CoffeeCategoryEnum.TRADITIONAL}, {id: 2, name: CoffeeCategoryEnum.WITH_MILK}],
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        price: 9.90,
        amount: 20,
        image: "/products/coffee-with-milk.png"
    },
    {
        id: 6,
        tags: [{id: 1, name: CoffeeCategoryEnum.TRADITIONAL}, {id: 2, name: CoffeeCategoryEnum.WITH_MILK}],
        name: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        price: 9.90,
        amount: 20,
        image: "/products/coffee-latte.png"
    },
    {
        id: 7,
        tags: [{id: 1, name: CoffeeCategoryEnum.TRADITIONAL}, {id: 2, name: CoffeeCategoryEnum.WITH_MILK}],
        name: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        price: 9.90,
        amount: 20,
        image: "/products/coffee-capuccino.png"
    },
    {
        id: 8,
        tags: [{id: 1, name: CoffeeCategoryEnum.TRADITIONAL}, {id: 2, name: CoffeeCategoryEnum.WITH_MILK}],
        name: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        price: 9.90,
        amount: 20,
        image: "/products/coffee-macchiato.png"
    },
    {
        id: 9,
        tags: [{id: 1, name: CoffeeCategoryEnum.TRADITIONAL}, {id: 2, name: CoffeeCategoryEnum.WITH_MILK}],
        name: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 9.90,
        amount: 20,
        image: "/products/coffee-mocaccino.png"
    },
    {
        id: 10,
        tags: [{id: 1, name: CoffeeCategoryEnum.SPECIAL}, {id: 2, name: CoffeeCategoryEnum.WITH_MILK}],
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 9.90,
        amount: 20,
        image: "/products/coffee-hot-chocolate.png"
    },
    {
        id: 11,
        tags: [
            {id: 1, name: CoffeeCategoryEnum.SPECIAL},
            {id: 2, name: CoffeeCategoryEnum.ALCOHOLIC},
            {id: 3, name: CoffeeCategoryEnum.COLD}
        ],
        name: "Cubano",
        description: "Drink COLD de café expresso com rum, creme de leite e hortelã",
        price: 9.90,
        amount: 20,
        image: "/products/coffee-cuban.png"
    },
    {
        id: 12,
        tags: [{id: 1, name: CoffeeCategoryEnum.SPECIAL}],
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        price: 9.90,
        amount: 20,
        image: "/products/coffee-hawaiian.png"
    },
    {
        id: 13,
        tags: [{id: 1, name: CoffeeCategoryEnum.SPECIAL}], 
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: 9.90,
        amount: 20,
        image: "/products/coffee-arabian.png"
    },
    {
        id: 14,
        tags: [{id: 1, name: CoffeeCategoryEnum.SPECIAL}, {id: 2, name: CoffeeCategoryEnum.ALCOHOLIC}],
        name: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: 23.70,
        amount: 20,
        image: "/products/coffee-irish.png"
    }
] as CoffeeProps[]
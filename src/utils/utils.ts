export module utils {
    export function formatProductPriceToCurrency(productAmount: number) {
        return productAmount
          .toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
          .replace("R$", "");
      }
}
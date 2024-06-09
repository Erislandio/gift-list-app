export function formatarParaBRL(valor = 0): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}
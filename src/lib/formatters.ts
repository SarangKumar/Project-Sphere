const CURRENCY_FORMATTERS = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 0,
});

export function formatCurrency(amount: number) {
  return CURRENCY_FORMATTERS.format(amount / 100);
}

const NUMBER_FORMATTERS = new Intl.NumberFormat("en-US");

export function formatNumber(number: number) {
  return NUMBER_FORMATTERS.format(number);
}

export function formatCompactNumber(number: number | string) {
  number = Number(number);
  if (Math.abs(number) < 1000) {
    return number.toString();
  }
  const formatter = new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 2,
  });
  return formatter.format(number);
}

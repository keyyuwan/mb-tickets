function unmaskBRNumber(value?: string) {
  if (!value) return 0;
  return +value.replace(/[^\d-]/g, "");
}

function maskToBRNumber(value?: number | string) {
  if (!value) return "0,00";
  if (typeof value === "string") {
    value = unmaskBRNumber(value);
  }
  if (typeof value === "number") {
    const [integers, decimals] = (+value / 100).toFixed(2).split(".");
    return `${integers.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${decimals}`;
  }
  return "0,00";
}

export function unmaskBRL(value?: string) {
  if (!value) return 0;
  return unmaskBRNumber(value.replace(/R\$ /g, ""));
}

export function maskToBRL(value?: number | string) {
  if (!value) return "R$ 0,00";
  if (typeof value === "string") {
    value = unmaskBRL(value);
  }
  if (typeof value === "number") {
    if (value < 0) return `-R$ ${maskToBRNumber(-value)}`;
    else return `R$ ${maskToBRNumber(value)}`;
  }
  return "R$ 0,00";
}

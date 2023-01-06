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

function maskCNPJ(cnpj: string) {
  if (!cnpj) return "";
  cnpj = cnpj.toString().replace(/\D/g, "");

  if (cnpj.length < 1) return "";
  else if (cnpj.length < 3) return cnpj;
  else if (cnpj.length < 6) return cnpj.replace(/(\d{2})(\d{0,3})/, "$1.$2");
  else if (cnpj.length < 9)
    return cnpj.replace(/(\d{2})(\d{3})(\d{0,3})/, "$1.$2.$3");
  else if (cnpj.length < 13)
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{0,4})/, "$1.$2.$3/$4");
  else
    return cnpj
      .substr(0, 14)
      .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, "$1.$2.$3/$4-$5");
}

function maskCPF(cpf: string) {
  if (!cpf) return "";
  cpf = cpf.toString().replace(/\D/g, "");

  if (cpf.length < 1) return "";
  else if (cpf.length < 4) return cpf;
  else if (cpf.length < 7) return cpf.replace(/(\d{3})(\d{0,3})/, "$1.$2");
  else if (cpf.length < 10)
    return cpf.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
  else
    return cpf
      .substr(0, 11)
      .replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
}

export function maskCPFCNPJ(cpfcnpj: string) {
  if (!cpfcnpj) return "";
  cpfcnpj = cpfcnpj.toString().replace(/\D/g, "");

  if (cpfcnpj.length <= 11) return maskCPF(cpfcnpj);
  return maskCNPJ(cpfcnpj);
}

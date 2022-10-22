export function isValidCpf(formattedCpf: string): boolean {
  if (typeof formattedCpf !== 'string') {
    return false;
  }

  const cpf = formattedCpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) {
    return false;
  }

  const cpfArr = cpf.split('');
  const validator = cpfArr
    .filter((digit, index, array) => index >= array.length - 2 && digit)
    .map(el => +el);

  const toValidate = (pop: number): number[] =>
    cpfArr
      .filter((digit, index, array) => index < array.length - pop && digit)
      .map(el => +el);

  const rest = (count: number, pop: number): number =>
    ((toValidate(pop).reduce((soma, el, i) => soma + el * (count - i), 0) *
      10) %
      11) %
    10;

  return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1]);
}

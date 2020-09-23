const formatValue = (value: number): string => {
  const formatedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return formatedValue;
};

export default formatValue;

interface PixFlaglabelProps {
  cashbackPercentage: number;
  cashValue: number;
}

export default function PixFlagLabel({ cashbackPercentage, cashValue }: PixFlaglabelProps) {
  const cashback = (cashValue * (cashbackPercentage / 100)) / 3;

  const localizedCashback = cashback.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  return (
    <>
      <strong>{localizedCashback}</strong> de volta no seu Pix na hora
    </>
  );
}

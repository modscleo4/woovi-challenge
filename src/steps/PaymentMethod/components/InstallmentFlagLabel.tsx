interface InstallmentFlagLabelProps {
  interestDiscount: number;
}

export default function InstallmentFlagLabel({ interestDiscount }: InstallmentFlagLabelProps) {
  return (
    <>
      <strong>-{interestDiscount}% de juros:</strong> melhor opção de parcelamento
    </>
  );
}

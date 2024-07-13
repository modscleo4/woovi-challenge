import './style.css';

import InstallmentInfo from '../../components/InstallmentInfo';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { calculateTotalWithInterest, Step } from '../../utils';

interface CreditCardProps {
  user: {
    firstName: string;
  };
  cashValue: number;
  installments: number;
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

export default function CreditCard({ user, cashValue, installments, setStep }: CreditCardProps) {
  const { installment, total } = calculateTotalWithInterest(cashValue, installments);

  return (
    <form id="credit-card" onSubmit={() => setStep('done')}>
      <h1>{user.firstName}, pague o restante em {installments - 1}x no cartão</h1>

      <Input label="Nome impresso no cartão" type="text" required />
      <Input label="CPF" type="text" required />
      <Input label="Número do cartão" type="text" required />
      <div className="split">
        <Input label="Vencimento" type="text" required />
        <Input label="CVV" type="number" min={0} max={999} required />
      </div>
      <Select label="Parcelas" required>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <option key={i} value={i} selected={i === installments - 1}>
            {i}x de {((total - installment) / i).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </option>
        ))}
      </Select>

      <button type="submit">Pagar</button>

      <InstallmentInfo cashValue={cashValue} installments={installments} step="credit-card" />
    </form>
  );
}

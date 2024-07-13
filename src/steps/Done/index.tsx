import { CheckCircle } from '@mui/icons-material';
import './style.css';
import { calculateTotalWithInterest } from '../../utils';

interface DoneProps {
  cashValue: number;
  installments: number;
}

export default function Done({ cashValue, installments }: DoneProps) {
  const { total } = calculateTotalWithInterest(cashValue, installments);

  const localizedTotal = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <form id="done">
      <CheckCircle />
      <h1>Pagamento Confirmado</h1>
      <section>
        <strong>Valor pago</strong>
        <span>{localizedTotal}</span>
      </section>
    </form>
  );
}

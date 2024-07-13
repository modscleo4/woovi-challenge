import { ReactNode } from 'react';
import './style.css';
import { calculateTotalWithInterest } from '../../../utils';

interface ListItemProps {
  installments: number;
  cashValue: number;
  interest: number;
  interestDiscount?: number;
  defaultChecked?: boolean;
  extra?: string;
  flagLabel?: ReactNode;
}

export default function ListItem({ installments, cashValue, interest, interestDiscount, defaultChecked, extra, flagLabel }: ListItemProps) {
  const { installment, total } = calculateTotalWithInterest(cashValue, installments, interest, interestDiscount ?? 0);

  const localizedInstallment = installment.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  const localizedTotal = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  return (
    <li>
      <label>
        <section>
          <span className="primary"><strong>{installments}x</strong> de {localizedInstallment}</span>
          {installments > 1 && <span className="secondary sm">Total: {localizedTotal}</span>}
          {extra && <span className="success sm">{extra}</span>}
        </section>

        <input type="radio" name="installment" defaultChecked={defaultChecked} value={installments} />
      </label>

      {flagLabel && <aside>{flagLabel}</aside>}
    </li>
  );
}

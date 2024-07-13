import './style.css';

import List from "../../components/List";
import ListItem from "../../components/List/Item";
import InstallmentFlagLabel from "./components/InstallmentFlagLabel";
import PixFlagLabel from "./components/PixFlagLabel";
import { calculateInterest, calculateInterestDiscount, Step } from "../../utils";

interface PaymentMethodProps {
  user: {
    firstName: string;
  };
  cashValue: number;
  installments: number;
  setInstallments: React.Dispatch<React.SetStateAction<number>>;
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

export default function PaymentMethod({ user, cashValue, installments, setInstallments, setStep }: PaymentMethodProps) {
  const cashbackPercentage = 3;

  return (
    <form id="payment-method" onChange={e => { setInstallments(parseInt('value' in e.target ? e.target.value as string : '0')); setStep('pix') }}>
      <h1>{user.firstName}, como você quer pagar?</h1>

      <fieldset>
        <legend>Pix</legend>

        <List>
          <ListItem installments={1}
            cashValue={cashValue}
            interest={0}
            defaultChecked={installments === 1}
            extra={`Ganhe ${cashbackPercentage}% de Cashback`}
            flagLabel={<PixFlagLabel cashbackPercentage={cashbackPercentage} cashValue={cashValue} />} />
        </List>
      </fieldset>

      <fieldset>
        <legend>Pix parcelado</legend>

        <List>
          {[2, 3, 4, 5, 6, 7].map(i => (
            <ListItem key={i}
              installments={i}
              cashValue={cashValue}
              interest={calculateInterest(i)}
              interestDiscount={calculateInterestDiscount(i)}
              defaultChecked={installments === i}
              flagLabel={i === 4 ? <InstallmentFlagLabel interestDiscount={calculateInterestDiscount(i)} /> : null} />
          ))}
        </List>
      </fieldset>
    </form>
  );
}

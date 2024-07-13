import { useState } from "react";
import './App.css';

import Footer from "./Footer";
import Header from "./Header";
import StepPaymentMethod from "./steps/PaymentMethod";
import StepPix from "./steps/Pix";
import StepCreditCard from "./steps/CreditCard";
import StepDone from "./steps/Done";
import { Step, User } from "./utils";

export default function App() {
  const [step, setStep] = useState<Step>('payment-method');
  const cashValue = 30_500.00;
  const [installments, setInstallments] = useState(1);
  const user: User = {
    firstName: 'Marcos',
    lastName: 'Lira',
  };

  function CurrentStep() {
    if (step === 'payment-method') {
      return <StepPaymentMethod user={user} cashValue={cashValue} installments={installments} setInstallments={setInstallments} setStep={setStep} />;
    } else if (step === 'pix') {
      return <StepPix user={user} cashValue={cashValue} installments={installments} setStep={setStep} />;
    } else if (step === 'credit-card') {
      return <StepCreditCard user={user} cashValue={cashValue} installments={installments} setStep={setStep} />;
    } else if (step === 'done') {
      return <StepDone cashValue={cashValue} installments={installments} />;
    }

    return null;
  }

  return (
    <main>
      <Header />

      <CurrentStep />

      <Footer />
    </main>
  );
}

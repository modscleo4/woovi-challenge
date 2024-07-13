import './style.css';

import { calculateTotalWithInterest } from '../../utils.js';

interface InstallmentInfoProps {
  cashValue: number;
  installments: number;
  step: 'pix' | 'credit-card';
}

export default function InstallmentInfo({ cashValue, installments, step }: InstallmentInfoProps) {
  const { installment, total } = calculateTotalWithInterest(cashValue, installments);

  const localizedTotalValue = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  const localizedInstallment = installment.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  const localizedCardInstallments = (total - installment).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const id = '2c1b951f356c4680b13ba1c9fc889c47';
  const dueDate = new Date(Date.now() + 1000 * 60 * 60 * 24);

  return (
    <>
      <section className="vertical">
        <span className="secondary">Prazo de pagamento:</span>
        <strong>{dueDate.toLocaleDateString()} - {dueDate.toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit' })}</strong>
      </section>

      {installments > 1 && <aside className="installments">
        <ul className="steps">
          <li className={`split ${step === 'pix' ? 'active' : 'done'}`}>
            <span>1ª entrada no Pix</span>
            <strong>{localizedInstallment}</strong>
          </li>

          <li className={`split ${step === 'credit-card' ? 'active' : ''}`}>
            <span>2ª no cartão</span>
            <strong>{localizedCardInstallments}</strong>
          </li>
        </ul>

        <hr />

        <div className="split">
          <span className="sm">CET: 0,5%</span>
          <span>Total: {localizedTotalValue}</span>
        </div>

        <hr />

        <details>
          <summary>Como funciona?</summary>

          <p>The moment man devoured the fruit of knowledge, he sealed his fate...</p>
          <p>Entrusting his future to the cards, he clings to a dim hope.</p>
          <p>Yes,</p>

          <p>The Arcana is the means by which all is revealed... Attaining one's dream requires a stern will and unfailing determination.</p>
          <p>The Arcana is the means by which all is revealed... The silent voice within one's heart whispers the most profound wisdom...</p>
          <p>The Arcana is the means by which all is revealed... Celebrate life's grandeur... Its brilliance... its magnificence...</p>
          <p>The Arcana is the means by which all is revealed... Only Courage in the face of doubt can lead one to the answer...</p>
          <p>The Arcana is the means by which all is revealed... It is indeed a precious gift to understand the forces that guide oneself...</p>
          <p>The Arcana is the means by which all is revealed... There is both joy and wonder in coming to understand the hearts of others...</p>
          <p>The Arcana is the means by which all is revealed... One of life's greatest blessings attained from the gift of life is the freedom to pursue one's personal goals...</p>
          <p>The Arcana is the means by which all is revealed... To find the one true path, one must seek guidance amidst uncertainty...</p>
          <p>The Arcana is the means by which all is revealed... It requires great courage to look at oneself, and forge one's own path...</p>
          <p>The Arcana is the means by which all is revealed... Ever-present alongside time is Fortune, cruel and unflinching...</p>
          <p>The Arcana is the means by which all is revealed... One needs Strength to endure, and rise above suffering and torment...</p>
          <p>The Arcana is the means by which all is revealed... In the face of unavoidable disaster lies the opportunity to search for redemption.</p>

          <p>The moment man devoured the fruit of knowledge, he sealed his fate...</p>
          <p>Entrusting his future to the cards, man clings to a dim hope.</p>
          <p>Yet,</p>
          <p>The Arcana is the means by which all is revealed... Beyond the journey you have taken lies the absolute end.</p>
          <p>It matters not who you are...</p>
          <p>One thing is always certain: death awaits all.</p>
        </details>

        <hr />

        <section className="vertical sm">
          <span className="secondary">Identificador:</span>
          <strong>{id}</strong>
        </section>
      </aside>}
    </>
  );
}

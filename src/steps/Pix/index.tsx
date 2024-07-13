import { useEffect, useRef } from 'react';
import { ContentCopy } from '@mui/icons-material';
import './style.css';

import InstallmentInfo from '../../components/InstallmentInfo';
import { calculateTotalWithInterest, Step } from '../../utils';
import { drawQRCode, qrCode } from '../../qr';

interface PixProps {
  user: {
    firstName: string;
  };
  cashValue: number;
  installments: number;
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

export default function Pix({ user, cashValue, installments, setStep }: PixProps) {
  const { installment, total } = calculateTotalWithInterest(cashValue, installments);

  const localizedTotalValue = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  const localizedInstallment = installment.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const qrCodeData = '00020101021226880014br.gov.bcb.pix2566qrcodes-pix.gerencianet.com.br/v2/0849218f535f4b09937d5b4585c8326f52040000530398654040.015802BR5909Admin Pix6009Sao Paulo6229052577532fc489a14bac9440e99f86304E6BB';
  const qr = drawQRCode(qrCode(qrCodeData, 'M', { forceUTF8: true }));

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    canvasRef.current.width = qr.length;
    canvasRef.current.height = qr.length;

    const ctx = canvasRef.current.getContext('2d');

    if (!ctx) {
      return;
    }

    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, qr.length, qr.length);

    for (let x = 0; x < qr.length; x++) {
      for (let y = 0; y < qr[x].length; y++) {
        ctx.fillStyle = qr[x][y] ? '#000' : '#fff';
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }, [canvasRef, qr]);

  function submit() {
    navigator.clipboard.writeText(qrCodeData);
    setStep(installments === 1 ? 'done' : 'credit-card');
  }

  return (
    <form id="pix">
      {installments === 1 && <h1>{user.firstName}, pague o valor de {localizedTotalValue} pelo Pix</h1>}
      {installments > 1 && <h1>{user.firstName}, pague a entrada de {localizedInstallment} pelo Pix</h1>}

      <canvas ref={canvasRef}></canvas>

      <button type="button" onClick={submit}>Clique para copiar QR Code <ContentCopy /> </button>

      <InstallmentInfo cashValue={cashValue} installments={installments} step="pix" />
    </form>
  );
}

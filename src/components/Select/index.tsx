import { ReactNode, useState } from 'react';
import './style.css';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: ReactNode | undefined;
}

export default function Select({ label, ...props }: SelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <label className={`custom-select ${open ? 'open' : ''}`}>
      <select {...props} onClick={() => setOpen(!open)} onBlur={() => setOpen(false)} onSuspend={() => setOpen(false)} />
      <span>{label}</span>
    </label>
  );
}

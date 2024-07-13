import { ReactNode } from 'react';
import './style.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode | undefined;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <label className="custom-input">
      <input {...props} placeholder="" />
      <span>{label}</span>
    </label>
  );
}

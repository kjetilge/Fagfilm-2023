'use client'
 
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

type SubmitButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

export default function SubmitButton({ children, disabled = false }: SubmitButtonProps) {
  return (
    <button type="submit" disabled={disabled}>
      {children}
    </button>
  );
}
'use client'
 
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

type SubmitButtonProps = {
  title: string
  disabled?: boolean;
};

export default function SubmitButton({ title="OK", disabled = false }: SubmitButtonProps) {
  return (
    <button type="submit" disabled={disabled}>
      {title}
    </button>
  );
}
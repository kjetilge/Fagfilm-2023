'use client'
 
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

type SubmitButtonProps = {
  title: string
};
 
export function SubmitButton({ title="OK" }: SubmitButtonProps) {
  const { pending } = useFormStatus()
 
  return (
    <button type="submit" aria-disabled={ pending } className="bg-gray-200 aria-disabled:bg-sky-700">
      {title}
    </button>
  )
}
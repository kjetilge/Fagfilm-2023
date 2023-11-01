'use client'
 
// import { experimental_useFormStatus as useFormStatus } from 'react-dom'

type SubmitButtonProps = {
  title: string
};
 
export default function SubmitButton({ title="OK" }: SubmitButtonProps) {
  // const { pending } = useFormStatus()
 // aria-disabled={ pending }
  return (
    <button type="submit"  className="bg-gray-200 aria-disabled:bg-sky-700">
      {title}
    </button>
  )
}
'use client'
// @ts-ignore
import { experimental_useFormState as useFormState } from 'react-dom'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { createTodo } from './actions'
import { SubmitButton } from './submit-button'
import { useRef } from "react";

const initialState = {
  message: null,
}

export default function AddTodo() {
  const [state, formAction] = useFormState(createTodo, initialState)
  const { pending } = useFormStatus()
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
    ref={ref}
    action={async (formData) => {
      await formAction(formData);
      ref.current?.reset();
    }}
      >
      <label htmlFor="todo">Enter Task</label>
      <input type="text" name="title" required />
      <SubmitButton />
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
      <p>{state?.message}</p>
    </form>
  )
}
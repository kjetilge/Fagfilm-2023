'use client'
// @ts-ignore

// @ts-ignore
// import { experimental_useFormState as useFormState } from 'react-dom'
// import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { deleteTodo } from './actions'
import { SubmitButton } from './submit-button'
import { useTransition } from 'react'

const initialState = {
  message: null,
}

export default function DeleteTodo({ id }: any) {
  // const [state, formAction] = useFormState(deleteTodo, initialState)
  // const { pending } = useFormStatus()
  let [isPending, startTransition] = useTransition()

  return (
    <span>
      <button onClick={() => startTransition(() => deleteTodo(id))}>DELETE</button>
      <p></p>
    </span>
  )
}
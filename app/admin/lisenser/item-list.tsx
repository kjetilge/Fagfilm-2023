
import prisma from '@/lib/prisma'
import DeleteTodo from './delete-form'

export default async function ItemList() {
  const todos = await prisma.todo.findMany()
  return (
    <>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title} <DeleteTodo id={todo.id}/> </li>
      ))}
    </ul>
    </>
  )
}
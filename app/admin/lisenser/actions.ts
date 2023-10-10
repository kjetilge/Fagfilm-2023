'use server'
 
import { revalidatePath, revalidateTag } from 'next/cache'
import prisma from "@/lib/prisma";

export async function createTodo(prevState: any, formData: FormData) {
  try {
    const todo = await prisma.todo.create({
      data: {
        title: formData.get('title') as string
      }
    })
    console.log(todo)
    return revalidatePath('/')
  } catch (e) {
    return { message: `Lagring gikk galt: ${JSON.stringify(e)}` } 
  }
}

export async function deleteTodo(id: string) {
  try {
    const todo = await prisma.todo.delete({
      where: {
        id: id
      }
    })
    console.log(todo)
    return revalidatePath('/')
  } catch (e) {
    console.log(e)
    // return { message: `Sletting gikk galt: ${JSON.stringify(e)}` } 
  }
}
import AddTodo from './add-form'
import prisma from '@/lib/prisma'
import DeleteTodo from './delete-form'
import ItemList from './item-list'
import LicenceList from '@/components/licences/licence-list'
import Link from 'next/link'

export default async function Licences() {
  //  const todos = await prisma.todo.findMany()
  return (
    <>
    {/* <AddTodo /> */}
    <Link href="/admin/lisenser/legg-til">Opprett lisens</Link>
    <LicenceList />
    </>
  )
}
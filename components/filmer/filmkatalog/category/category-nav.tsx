import Link from 'next/link'

type CategoryNavProps = {
  categories: Category[]
}

const CategoryNav = ({categories}: CategoryNavProps) => {
  return (
    <nav>
      <ul className="flex space-x-6">
        {categories.map((category: Category, index: number) => (
          <li key={index} className="inline">
            <Link href={`/filmkatalog/${category.slug}`} className="font-thin text-white hover:text-gray-300">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default CategoryNav
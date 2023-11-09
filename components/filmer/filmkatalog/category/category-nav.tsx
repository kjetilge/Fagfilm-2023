import Link from 'next/link'

type CategoryNavProps = {
  categories: Category[]
}

const CategoryNav = ({categories}: CategoryNavProps) => {
  return (
    <nav>
      <ul className="flex space-x-2 lg:space-x-3 md:space-x-4 xl:space-x-11">
        {categories.map((category: Category, index: number) => (
          <li key={index} className="inline">
            <Link href={`/filmkatalog/${category.slug}`} className="text-sm lg:text-base xl:text-lg font-thin text-white hover:text-gray-400">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default CategoryNav
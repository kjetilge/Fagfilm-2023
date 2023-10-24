import { type } from 'os'
import React from 'react'

type CategoryNavProps = {
  categories: Category[]
}

const CategoryNav = ({categories}: CategoryNavProps) => {
  return (
    <nav>
      <ul>
        {categories.map((category: Category) => (
          <li>
            <a href={`/filmer/filmkatalog/${category.slug}`}>{category.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default CategoryNav
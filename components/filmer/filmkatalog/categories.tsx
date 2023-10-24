import { getCategories } from '@/lib/graphql-requests/get-categories'
import Link from 'next/link'


// import { Category } from '../../../lib/graphql/schema'


export default async function Categories () {
  const categories = await getCategories();

  return (
    <ul>
      {categories.map((category: Category) => {
        const videos = category.videos.items;
        
        return (
          <li key={category.id}>
            <Link href={`/filmkatalog/${category.slug}`}>
              <h2>----------------{category.name}, {category.slug}</h2>
            </Link>
            <div>
                {videos.map((video, key) => (
                  <div key={key}>
                    <Link href={`/filmkatalog/${category.slug}/${video.slug}`}>{video.title}</Link>
                    {/* {JSON.stringify(video)} */}
                  </div>
                ))}
            </div>
          </li>
        );
      })}
    </ul>
  )
}
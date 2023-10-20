import { getCategories } from '@/lib/graphql/requests'
import Link from 'next/link'

export default async function AllCategories () {
  const categories = await getCategories()
  return (
    // <ul>
    //   {categories.map((category) => {
    //     const videos = category.videos.items;

    //     return (
    //       <li key={category.id}>
    //         <Link href={`/filmkatalog/${category.slug}`}>
    //           <h2>{category.name}</h2>
    //         </Link>
    //         <div>
    //             {videos.map((video) => (
    //               <p>
    //                 {JSON.stringify(video)}
    //               </p>
    //             ))}
    //         </div>
    //       </li>
    //     );
    //   })}
    // </ul>
    <p>
      {JSON.stringify(categories[0], null, 2)} // .videos.items

    </p>
  )
}
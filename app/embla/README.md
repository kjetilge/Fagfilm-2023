https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns



 if you try to use it directly within a Server Component, you'll see an error:

  {/* Error: `useState` can not be used within Server Components */}

  
This is because Next.js doesn't know <Carousel /> is using client-only features.

To fix this, you can wrap third-party components that rely on client-only features in your own Client Components:

app/carousel.tsx

TypeScript

'use client'
 
import { Carousel } from 'acme-carousel'
 
export default Carousel
Now, you can use <Carousel /> directly within a Server Component:

app/page.tsx

TypeScript

import Carousel from './carousel'
 
export default function Page() {
  return (
    <div>
      <p>View pictures</p>
 
      {/*  Works, since Carousel is a Client Component */}
      <Carousel />
    </div>
  )
}
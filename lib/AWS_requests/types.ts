export type Video = {
  title: string
  categoryId: string
  slug: string
  posterTime: number
  fileName: string
  id: string
  chapters: {
    items: {
      title: string
      start: number
      posterTime: number
    }[]
  }
}

export type Category = {
  id: string
  name: string
  slug: string
  videos: {
    items: {
      title: string
      categoryId: string
      slug: string
      posterTime: number
      fileName: string
      id: string
      chapters: {
        items: {
          title: string
          start: number
          posterTime: number
        }[]
      }
    }[]
  }
}
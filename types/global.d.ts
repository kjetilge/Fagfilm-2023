export {}

declare global {
  type LicenceInfo = {
    canView: boolean | undefined
    isExpired: boolean | undefined
    skolekodeMissing: boolean | undefined
  }
  
  type Chapter = {  
    title: string
    start: number
    posterTime: number
  }
  
  type Video = {
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
  
  type Category = {
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
  type SubtitleTrack = {
    src: string | undefined
    label: string | undefined;
    language: string | undefined;
    kind: TextTrackKind;
    default: boolean | false;
  }| null;
}
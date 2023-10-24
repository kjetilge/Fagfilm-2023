import Catalog from '@/components/filmer/filmkatalog/catalog'

export default async function CatalogPage ({ params }: { params: { filmparams: string[] } }) {
  const {filmparams = []} = params
  // console.log('filmparams', filmparams)

  let categorySlug: string | undefined, videoSlug

  if (filmparams.length === 0) {
    categorySlug = undefined
    videoSlug = undefined
  }
  if (filmparams.length === 1) {
    categorySlug = decodeURI(params.filmparams[0])
    videoSlug  = undefined
  }
  if (filmparams.length === 2) {
    // console.log('filmparams[1]', filmparams[1]) 
    categorySlug = decodeURI(params.filmparams[0])
    videoSlug  = decodeURI(params.filmparams[1])
  }

  return (<Catalog categorySlug={categorySlug} videoSlug={videoSlug}/>)  
}




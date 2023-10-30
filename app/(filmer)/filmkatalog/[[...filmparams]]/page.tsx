import Catalog from '@/components/filmer/filmkatalog/catalog'

export default function CatalogPage({ params }: { params: { filmparams: string[] } }) {
  const { filmparams = [] } = params;

  let categorySlug: string | undefined;
  let videoSlug: string | undefined;

  switch (filmparams.length) {
    case 0:
      categorySlug = undefined;
      videoSlug = undefined;
      break;
    case 1:
      categorySlug = decodeURI(filmparams[0]);
      videoSlug = undefined;
      break;
    case 2:
      categorySlug = decodeURI(filmparams[0]);
      videoSlug = decodeURI(filmparams[1]);
      break;
    default:
      throw new Error("Invalid number of filmparams");
  }

  return <Catalog categorySlug={categorySlug} videoSlug={videoSlug} />;
}
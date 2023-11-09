
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-cover bg-center h-screen w-full absolute b-0" style={{ backgroundImage: 'url(/front-image.jpg)' }}>
      <div className="absolute bottom-0 w-full mt-auto bg-gradient-to-t from-black/80 from-50% pb-14 md:pb-24 pt-32">
        <h1 className="text-3xl md:text-3xl lg:text-3xl text-center pb-10">Utforsk dine utdanningsmuligheter ved hjelp av film!</h1>
        <h2 className="text-1xl md:text-3xl lg:text-4xl  xl:lg:text-5xl text-center px-8">Hva vil du bli? Hva vil du være?</h2>
        <div className="flex justify-center w-full">
          <div className="flex flex-col justify-between h-56 md:h-12 md:flex-row md:justify-around my-12 md:w-[800px]">
            <Link href="/bestill-fagfilm" className="bg-green-500 text-white py-3 px-4 w-44  rounded md:mb-0 text-center">BESTILL FAGFILM</Link>
            <Link href="/aktivere-feide" className="bg-blue-500 text-white py-3 px-4 w-44 rounded md:mb-0  text-center">AKTIVERE FEIDE</Link>
            <Link href="/filmkatalog" className="bg-red-500 text-white py-3 px-4 w-44 rounded  md:mb-0 text-center">SE FILM</Link>
            <Link href="/personvern" className="bg-gray-500 text-white py-3 px-4 w-44 rounded md:mb-0 text-center">PERSONVERN</Link>
          </div>
        </div>
        <p className="text-center text-sm md:text-base">Support: Send sms eller ring 915 68 963</p>
      </div>
    </div>
  );
}
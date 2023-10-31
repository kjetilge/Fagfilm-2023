// import Card from "@/components/hjemmesider/home/card";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
// import WebVitals from "@/components/hjemmesider/home/web-vitals";
// import ComponentGrid from "@/components/hjemmesider/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import getVideoBySlug from "@/lib/graphql-requests/get-video-by-slug";

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT as string
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY as string
const AWS_REGION = process.env.AWS_REGION as string

export default async function Home() {
  const video = await getVideoBySlug('naturbruk')
  // const session = await getServerSession(authOptions)
  
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Fagfilm</Balancer>
        </h1>
        <p>
        GRAPHQL_ENDPOINT: {GRAPHQL_ENDPOINT}, GRAPHQL_API_KEY: {GRAPHQL_API_KEY}, AWS_REGION: {AWS_REGION}
        </p>

        <p>
          VIDEO funnet: {video.title}
        </p>
        
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
            
          <Balancer>
            Her er utvikles fagfilm sin neste generasjon nettsted
          </Balancer>
        </p>

      </div>

    </>
  );
}
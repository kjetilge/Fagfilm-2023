import Card from "_components/home/card";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "_lib/constants";
import { Github, Twitter } from "_components/shared/icons";
import WebVitals from "_components/home/web-vitals";
import ComponentGrid from "_components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "_lib/utils";

export default async function Home() {

  return (
    <>


        <h1 className="font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]">
          Building blocks for your Next project
        </h1>



    </>
  );
}

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
<<<<<<< HEAD
    <>


        {/* <h1 className="font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]">
          Building blocks for your Next project
        </h1> */}

<h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
<h1>Hello world! 2</h1>
    </>
=======
    <article className="prose lg:prose-xl prose-slate">
        <h1 className="font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]">
          Building blocks for your Next project
        </h1>
    </article>
>>>>>>> preview
  );
}
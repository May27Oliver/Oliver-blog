import type { NextPage } from "next";
import Image from "next/image";
import Layout from "src/components/Layout";
import Dog from "public/image/dog.jpg";
import Food from "public/image/food.jpg";
import Forbid from "public/image/forbid.jpg";
import Neko from "public/image/neko.jpg";
import Neko1 from "public/image/neko1.jpg";
import Street1 from "public/image/street-1.jpg";
import Street2 from "public/image/street-2.jpg";
import Street3 from "public/image/street-3.jpg";
import Street5 from "public/image/street-5.jpg";
import Street6 from "public/image/street-6.jpg";
import Town from "public/image/town.jpg";
import Tree from "public/image/tree.jpg";
import Whale1 from "public/image/whale1.jpg";
import Whale2 from "public/image/whale2.jpg";

const Photography: NextPage = () => (
  <Layout title="攝影 | Oliver雜貨鋪">
    <div className="photo-component mt-32 flex flex-wrap flex-row px-1">
      <div className="grow-[50%] max-w-[50%] sm:grow-[25%] sm:max-w-[25%] px-1">
        <Image src={Street1} width={500} height={350} objectFit="contain" />
        <Image src={Neko1} width={500} height={350} objectFit="contain" />
        <Image src={Street2} width={500} height={350} objectFit="contain" />
        <Image src={Dog} width={500} height={350} objectFit="contain" />
      </div>
      <div className="grow-[50%] max-w-[50%] sm:grow-[25%] sm:max-w-[25%] px-1">
        <Image src={Whale2} width={500} height={350} objectFit="contain" />
        <Image src={Street3} width={500} height={350} objectFit="contain" />
        <Image src={Forbid} width={500} height={350} objectFit="contain" />
      </div>
      <div className="grow-[50%] max-w-[50%] sm:grow-[25%] sm:max-w-[25%] px-1">
        <Image src={Neko} width={500} height={350} objectFit="contain" />
        <Image src={Street5} width={500} height={350} objectFit="contain" />
        <Image src={Tree} width={500} height={350} objectFit="contain" />
        <Image src={Food} width={500} height={350} objectFit="contain" />
      </div>
      <div className="grow-[50%] max-w-[50%] sm:grow-[25%] sm:max-w-[25%] px-1">
        <Image src={Street6} width={500} height={350} objectFit="contain" />
        <Image src={Town} width={500} height={350} objectFit="contain" />
        <Image src={Whale1} width={500} height={350} objectFit="contain" />
      </div>
    </div>
  </Layout>
);

export default Photography;

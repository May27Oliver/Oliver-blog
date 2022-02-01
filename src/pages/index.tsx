import type { NextPage } from "next";
import Link from "next/link";
import Layout from "src/components/Layout";
import Wrap from "src/components/Wrap";

const IndexPage: NextPage = () => (
  <Layout title="Home | Oliver雜貨鋪">
    <div className="my-32">
      {/* 部落格欄位 */}
      {/* 攝影作品欄位 */}
      {/* 自介欄位 */}
      <div className="intro-col">
        <Wrap>
          <h1 className="text-2xl">您好，我是Oliver</h1>
          <div className="my-4"> 記於2022.1.25 </div>
          <div className="about-me leading-[1.5] my-3">
            一個寫程式鑽研程式的人。2018年開始接觸程式，並一頭栽進，目前是個Web
            Developer，這兩年常用React、Typescript和Golang。
            <br />
            <br />
            是個想到什麼新奇好玩事物就就想馬上執行的牡羊座，相信累積與紀錄的力量，雖然腦容量不太夠，但用心過的事物只要記錄下來，就可以成為明日遇到挑戰時的紅buff，因此誕生了這個部落格。
            <br />
            <br />
            在成為寫程式的人前我是個拍片仔，曾參與過台灣電影大大小小的場景。有台相機，至今仍難忘透過觀景窗觀察世界的美好時刻，因此部落格裡還會有一些攝影作品。
          </div>
        </Wrap>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

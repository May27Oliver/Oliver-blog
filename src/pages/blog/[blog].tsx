import React from "react";
import Image from "next/image";
import BlogLeftSideColumn from "src/components/BlogLeftSide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Layout from "src/components/Layout";
import { GetStaticProps, GetStaticPaths } from "next";
import BlogContent from "src/components/BlogContent";
import fs from "fs";
import path from "path";
import goTop from "public/image/goTop.png";
import { useBlogInfoStateContext } from "src/context/BlogInfo";
interface BlogProps {
  blog: string;
}

const BlogPages: React.FC<BlogProps> = ({ blog }) => {
  const { title } = useBlogInfoStateContext();
  const [openList, setOpenList] = React.useState<Boolean>(true);
  return (
    <Layout title={`${title} | Oliver雜貨鋪`}>
      <div className="h-[100vh] overflow-hidden">
        <div className="desktop h-nav-height mt-[60px] flex flex-row overflow-hidden">
          <BlogLeftSideColumn
            openList={openList}
            triggerOpenList={(bool: boolean) => {
              setOpenList(bool);
            }}
          />
          <BlogContent bgcontent={blog || "無資料"} openList={openList} />
          {/* <div className="hidden flex-blog-right-side border border-solid border-slate-300 lg:block"></div> */}
        </div>
      </div>
      <div className="show-nav-area fixed top-[60px] left-0 h-nav-height w-5 overflow-scroll flex flex-col justify-center lg:hidden">
        <div className="show-nav-icon h-32 w-5 border border-solid border-slate-30 flex flex-col justify-center">
          <FontAwesomeIcon
            className="font-awesome-icon close-blog-list"
            icon={fas.faArrowRight}
            size="lg"
          />
        </div>
        {/* left-nav */}
        <BlogLeftSideColumn
          openList={openList}
          triggerOpenList={(bool: boolean) => {
            setOpenList(bool);
          }}
        />
      </div>
      {/* back to top */}
      <div
        className="fixed bottom-10 right-10 bg-goTop w-20 h-20 z-50"
        onClick={() => {
          document.getElementById("blog-center-content").scrollTop = 0;
        }}
      >
        <Image src={goTop} width={50} height={100} objectFit="contain" />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  //告訴dynamic route這裡要產生多少頁面。
  const files = await fs.readdirSync(path.join("article"));
  const paths = files.map((filename) => ({
    params: {
      blog: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { blog } }) => {
  //如果讀不到這個檔案就會出錯
  try {
    const markdown = await fs.readFileSync(
      path.join("article", blog + ".md"),
      "utf-8"
    );
    return {
      props: { blog: markdown },
    };
  } catch (err) {
    console.log(err);
  }
  return { props: { blog: "筆記搬運施工中..." } };
};

export default BlogPages;

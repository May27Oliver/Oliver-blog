import React from "react";
import BlogLeftSideColumn from "src/components/BlogLeftSide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Layout from "src/components/Layout";
import { GetStaticProps, GetStaticPaths } from "next";
import BlogContent from "src/components/BlogContent";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface BlogProps {
  blog: string;
}

const BlogPages: React.FC<BlogProps> = ({ blog }) => {
  const {
    content,
    data: { title, date },
  } = matter(blog);
  return (
    <Layout title={`${title} | Oliver雜貨鋪`}>
      <div className="h-[100vh] overflow-hidden">
        <div className="desktop h-nav-height mt-[60px] flex flex-row overflow-hidden">
          <BlogLeftSideColumn />
          <BlogContent
            content={content || "無資料"}
            date={date.toString()}
            title={title}
          />
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
        <BlogLeftSideColumn />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("article"));
  const paths = files.map((filename) => ({
    params: {
      blog: filename.replace(".md", ""),
    },
  }));

  console.log("paths", paths);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { blog } }) => {
  //如果讀不到這個檔案就會出錯
  try {
    const markdown = fs.readFileSync(
      path.join("article", blog + ".md"),
      "utf-8"
    );
    return {
      props: { blog: markdown },
    };
  } catch (err) {
    console.log(err);
  }
  return { props: { blog: "無資料" } };
};

export default BlogPages;

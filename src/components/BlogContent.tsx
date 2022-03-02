import React from "react";
import Image from "next/image";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import goTop from "public/image/goTop.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type BlogContentType = {
  openList: Boolean;
  bgcontent: string;
  blogRef: HTMLDivElement;
};

const Content: React.FC<BlogContentType> = ({
  bgcontent,
  openList,
  blogRef,
}) => {
  const {
    content,
    data: { slug, title, date, description },
  } = matter(bgcontent);

  const columnRef = React.useRef<HTMLDivElement | null>(null);
  const anchor = React.useRef<HTMLDivElement | null>(null);
  const goTopRocket = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    let options = {
      root: blogRef,
      rootMargin: "0px",
      threshold: 0,
    };
    let observer = new IntersectionObserver((entry) => {
      if (!goTopRocket.current || !anchor.current || !columnRef.current) {
        return;
      }
      const { intersectionRatio } = entry[0];
      if (intersectionRatio <= 0) {
        goTopRocket.current.style.display = "block";
      } else {
        goTopRocket.current.style.display = "none";
      }
    }, options);
    observer.observe(anchor.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={columnRef}
      id="blog-center-content"
      className={`blog-center-content py-8 px-8 grow lg:basis-[70%] overflow-y-scroll ${
        openList ? "2xl:pr-[300px]" : "lg:px-[10%]"
      }`}
    >
      <h1 className="text-title-size font-bold">{title}</h1>
      <div
        ref={anchor}
        className="react-content-date-time my-3 text-sm text-neutral-500 box-border pl-2"
      >
        {date}
      </div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        children={content}
        className="react-markdown box-border py-1"
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      ></ReactMarkdown>
      {/* back to top */}
      <div
        ref={goTopRocket}
        className="fixed bottom-10 right-[-100px] md:right-10 bg-goTop w-20 h-20 z-50"
        onClick={() => {
          columnRef.current.scrollTop = 0;
        }}
      >
        <Image src={goTop} width={50} height={100} objectFit="contain" />
      </div>
    </div>
  );
};

export default Content;

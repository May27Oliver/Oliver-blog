import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type BlogContentType = {
  openList: Boolean;
  bgcontent: string;
};

const Content: React.FC<BlogContentType> = ({ bgcontent, openList }) => {
  const {
    content,
    data: { slug, title, date, description },
  } = matter(bgcontent);
  return (
    <div
      className={`blog-center-content py-8 px-8 grow lg:basis-[70%] overflow-y-scroll ${
        openList ? "lg:pr-[300px]" : "lg:px-[10%]"
      }`}
    >
      <h1 className="text-title-size font-bold">{title}</h1>
      <div className="react-content-date-time my-3 text-sm text-neutral-500 box-border pl-2">
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
    </div>
  );
};

export default Content;

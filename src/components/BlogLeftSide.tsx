import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BlogTopics } from "utils/blog-topic";
import { ContentsType } from "interfaces";
import { useRouter } from "next/router";
import { useBlogInfoDispatchContext } from "src/context/BlogInfo";

const BlogLeftSideColumn: React.FC = () => {
  const [openList, setOpenList] = React.useState<Boolean>(true);
  return (
    <div
      className={`left-side-nav bg-white left-nav basis-[80%] sm:basis-[30%] border border-solid border-slate-300 relative overflow-y-scroll transition-blog-left-side ${
        openList ? "lg:basis-[300px]" : "lg:basis-[3%]"
      } lg:block`}
    >
      <div className="px-2 py-4">
        {openList
          ? BlogTopics.map((them) => {
              return <TopicFirstLayer them={them} key={them.topic} />;
            })
          : ""}
      </div>
      {openList ? (
        <div
          className="hidden lg:flex lg:justify-center sticky h-8 w-full bottom-0 left-0 bg-white border border-solid border-slate-300 text-center leading-8"
          onClick={() => setOpenList(false)}
        >
          <FontAwesomeIcon
            className="font-awesome-icon close-blog-list"
            icon={fas.faArrowLeft}
            style={{ fontSize: "10px" }}
            size="xs"
          />
        </div>
      ) : (
        ""
      )}
      {openList ? (
        ""
      ) : (
        <div
          className="absolute hidden lg:flex flex-col justify-center items-center h-full w-full top-0 border border-solid border-slate-300 text-center leading-8"
          onClick={() => setOpenList(true)}
        >
          <FontAwesomeIcon
            className="font-awesome-icon close-blog-list"
            icon={fas.faArrowRight}
            size="xs"
          />
        </div>
      )}
    </div>
  );
};

interface FirstLayerType {
  them: ContentsType;
}

const TopicFirstLayer: React.FC<FirstLayerType> = ({ them }) => {
  const { subTopic } = them;
  const [select, setSelect] = React.useState<boolean>(false);
  return (
    <>
      <div
        className={`rounded-[5px] hover:bg-slate-100 leading-10 w-full px-1 relative ${
          select ? "text-lime-hover" : "text-[#606770]"
        } cursor-pointer`}
        onClick={() => setSelect(!select)}
      >
        {them.topic}
        <div className="absolute right-0 top-0 flex flex-col justify-center items-center h-10 w-10 top-0 text-center leading-8">
          <FontAwesomeIcon
            className={`font-awesome-icon close-blog-list transition-blog-left-side ${
              select ? "rotate-90" : ""
            }`}
            icon={fas.faAngleRight}
            size="lg"
          />
        </div>
      </div>
      <SubTopicLayer key={them.topic} select={select} subTopic={subTopic} />
    </>
  );
};

type SubTopicType = {
  select: boolean;
  subTopic: { title: string; id: string }[];
};

const SubTopicLayer: React.FC<SubTopicType> = ({ select, subTopic }) => {
  const router = useRouter();
  const dispatch = useBlogInfoDispatchContext();
  return (
    <div>
      {subTopic.map((topic) => (
        <div
          key={topic.id}
          className={`${
            select ? "opacity-100 h-10" : "opacity-0 h-0"
          } rounded-[5px] ml-2 pl-2 hover:bg-slate-100 leading-10 transition-font-hover cursor-pointer`}
          onClick={() => {
            dispatch({
              type: "CHANGE_KEYNAME",
              payload: { title: topic.title, keyname: topic.id },
            });
            router.push(`/blog/${topic.id}`, undefined, { shallow: false });
          }}
        >
          {topic.title}
        </div>
      ))}
    </div>
  );
};

export default BlogLeftSideColumn;

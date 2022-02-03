import React, { Reducer } from "react";
import { createContext } from "./createContext";

interface BlogInfo {
  title: string;
  keyname: string;
}

const initialState: BlogInfo = {
  title: "如何開始一個新的React專案",
  keyname: "start-new-react-project",
};

type Action = {
  type: "CHANGE_KEYNAME";
  payload: {
    title: string;
    keyname: string;
  };
};

const reducer: Reducer<BlogInfo, Action> = (state, action) => {
  switch (action.type) {
    case "CHANGE_KEYNAME":
      return {
        title: action.payload.title,
        keyname: action.payload.keyname,
      };
  }
};

const {
  provider: BlogInfoProvider,
  useStateContext: useBlogInfoStateContext,
  useDispatchContext: useBlogInfoDispatchContext,
  useContext: useBlogInfoProductContext,
} = createContext("BlogPathInfo", reducer, initialState);

export {
  BlogInfoProvider,
  useBlogInfoStateContext,
  useBlogInfoDispatchContext,
  useBlogInfoProductContext,
};

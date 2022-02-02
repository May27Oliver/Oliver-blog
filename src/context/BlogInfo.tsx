import React, { Reducer } from "react";
import { createContext } from "./createContext";

interface BlogInfo {
  keyname: string;
}

const initialState: BlogInfo = {
  keyname: "start-new-react-project",
};

type Action = {
  type: "CHANGE_KEYNAME";
  payload: string;
};

const reducer: Reducer<BlogInfo, Action> = (state, action) => {
  switch (action.type) {
    case "CHANGE_KEYNAME":
      return {
        keyname: action.payload,
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

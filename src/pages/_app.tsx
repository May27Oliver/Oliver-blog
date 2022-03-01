import React from "react";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "styles/globals.css";
import { BlogInfoProvider } from "src/context/BlogInfo";
import Router from "next/router";
import NProgress from "nprogress";

function MyApp({ Component, pageProps }: AppProps) {
  NProgress.configure({ easing: "ease", speed: 500 });
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    let column = document.getElementById("blog-center-content");
    if (column) {
      column.scrollTop = 0;
    }
    NProgress.done();
  });
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

const ContextProvider: React.FC = ({ children }) => {
  return <BlogInfoProvider>{children}</BlogInfoProvider>;
};

export default MyApp;

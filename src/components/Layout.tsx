import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Wrap from "./Wrap";
import Hamburger from "./Hamburger";
import { useBlogInfoStateContext } from "src/context/BlogInfo";
import { useRouter } from "next/router";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({
  children,
  title = "This is the default title",
}: Props) => {
  const { keyname } = useBlogInfoStateContext();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="shadow-md shadow-[#e1dede] fixed w-full top-0 bg-slate-50 z-10">
        <Wrap>
          <header className="h-[60px] flex flex-row justify-between ">
            <div className="logo font-bold text-lg leading-[60px] hover:text-lime-hover">
              <Link href="/">Oliver雜貨鋪</Link>
            </div>
            <nav className="leading-[60px] hidden lg:block">
              {/* <Link href={`/blog/${keyname}`}> */}
              <a
                className="hover:text-lime-hover transition-font-hover cursor-pointer"
                onClick={() => {
                  alert(keyname);
                  router.push(`/blog/${keyname}`, undefined, {
                    shallow: false,
                  });
                }}
              >
                部落格
              </a>
              {/* </Link> */} |{" "}
              <Link href="/photo">
                <a className="hover:text-lime-hover transition-font-hover">
                  攝影
                </a>
              </Link>{" "}
              |{" "}
              <Link href="/about">
                <a className="hover:text-lime-hover transition-font-hover">
                  關於我
                </a>
              </Link>
            </nav>
            <Hamburger />
          </header>
        </Wrap>
      </div>
      {children}
      <footer className="w-full text-center text-sm opacity-75 bg-slate-50">
        <hr />
        <span>
          Copyright © 2022 Oliver Chen. Built with Next.js, Typescript, Tailwind
          css.
        </span>
      </footer>
    </>
  );
};

export default Layout;

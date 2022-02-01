import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "styles/globals.css";
import { BlogInfoProvider } from "src/context/BlogInfo";

function MyApp({ Component, pageProps }: AppProps) {
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

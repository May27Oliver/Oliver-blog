import React from "react";
import { useRouter } from "next/router";

const Hamburger: React.FC = () => {
  const [hamActive, setHamActive] = React.useState<boolean>(false);
  const router = useRouter();
  return (
    <>
      <div
        className={`hamburgur ${hamActive ? "isActive" : ""}`}
        onClick={() => setHamActive(!hamActive)}
      >
        <div className="meat"></div>
      </div>
      <div
        className={` ${
          hamActive ? "block" : "hidden"
        } fixed left-0 top-[60px] w-full bg-slate-50 shadow-md shadow-[#e1dede] z-10 lg:hidden `}
      >
        <div
          className="w-full leading-10 text-center cursor-pointer hover:text-lime-hover hover:bg-slate-100"
          onClick={() => {
            setHamActive(false);
            router.push("/blog");
          }}
        >
          部落格
        </div>
        <div
          className="w-full leading-10 text-center cursor-pointer hover:text-lime-hover hover:bg-slate-100"
          onClick={() => {
            setHamActive(false);
            router.push("/photo");
          }}
        >
          攝影
        </div>
        <div
          className="w-full leading-10 text-center cursor-pointer hover:text-lime-hover hover:bg-slate-100"
          onClick={() => {
            setHamActive(false);
            router.push("/about");
          }}
        >
          關於我
        </div>
      </div>
    </>
  );
};

export default Hamburger;

import * as React from "react";

const Wrap: React.FC = ({ children }) => (
  <div className="w-11/12 mx-auto lg:max-w-[1440px] lg:w-10/12 ">
    {children}
  </div>
);

export default Wrap;

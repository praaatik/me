import React from "react";

export interface Props {
  data: any;
}

const Callout = (props: any) => {
  return (
    <>
      <p
        className="bg-slate-300 p-4 text-black after:content-lightbulb after:block after:w-4 after:h-4"
        {...props}
      ></p>
    </>
  );
};

export default Callout;

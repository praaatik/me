import React from "react";

export interface Props {
  data: any;
}

const H1 = (props: any) => {
  return (
    <>
      <h1 className="text-4xl p-4 text-center text-[#EAE6E5]" {...props}></h1>
    </>
  );
};

export default H1;

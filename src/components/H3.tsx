import React from "react";

export interface Props {
  data: any;
}

const H3 = (props: any) => {
  return (
    <>
      <h2 className="text-2xl mb-2 mt-10 " {...props}></h2>
    </>
  );
};

export default H3;

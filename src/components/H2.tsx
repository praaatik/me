import { FiHash } from "react-icons/fi";
import React from "react";

export interface Props {
  data: any;
}

const H1 = (props: any) => {
  return (
    <>
      <h2 className="text-3xl mb-2 mt-10" {...props}></h2>
    </>
  );
};

export default H1;

import { ThemeContext } from "pages/_app";
import React, { useContext, useEffect } from "react";
import { HiOutlineLightBulb, HiLightBulb } from "react-icons/hi";
import IBlockQuoteStyles from "../interfaces/IBlockQuoteStyles";

export interface Props {
  data: any;
}

const BlockQuote = (props: any) => {
  const darkStyles: IBlockQuoteStyles = {
    containerStyles:
      "bg-dark-marshmellow rounded-lg relative p-10 border-4 border-dark-mid",
  };

  const lightStyles: IBlockQuoteStyles = {
    containerStyles:
      "bg-light-peach rounded-lg relative p-10 border-4 border-light-rose",
  };

  const context = useContext(ThemeContext);

  return (
    <>
      <div
        className={
          context?.isThemeDark
            ? darkStyles.containerStyles
            : lightStyles.containerStyles
        }
      >
        <div {...props}></div>
        {context?.isThemeDark ? (
          <HiLightBulb className="absolute m-auto left-0 top-0" size={40} />
        ) : (
          <HiOutlineLightBulb
            className="absolute m-auto left-0 top-0"
            size={40}
          />
        )}
      </div>
    </>
  );
};

export default BlockQuote;

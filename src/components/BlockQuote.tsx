import { ThemeContext } from "pages/_app";
import React, { useContext } from "react";
import { HiOutlineLightBulb, HiLightBulb } from "react-icons/hi";

export interface Props {
  data: any;
}

interface IBlockQuoteStyles {
  containerStyles: string;
}

const BlockQuote = (props: any) => {
  const darkStyles: IBlockQuoteStyles = {
    containerStyles:
      "bg-dark-marshmellow rounded-lg relative p-10 border-4 border-black",
  };

  const lightStyles: IBlockQuoteStyles = {
    containerStyles:
      "bg-light-peach rounded-lg relative p-10 border-4 border-black",
  };

  const isThemeDark = useContext(ThemeContext);

  return (
    <>
      <div
        className={
          isThemeDark ? darkStyles.containerStyles : lightStyles.containerStyles
        }
      >
        <div {...props}></div>
        {isThemeDark ? (
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

import { ThemeContext } from "pages/_app";
import { useContext, useEffect, useState } from "react";
import { useReadingProgress } from "../hooks/useReadingProgress";

const ReadingProgress = () => {
  const readingProgress = useReadingProgress();

  const context = useContext(ThemeContext);

  return (
    <div
      className={
        context?.isThemeDark
          ? "bg-dark-mid rounded-lg h-2 sticky top-0"
          : "bg-light-sea rounded-lg h-2 sticky top-0"
      }
      style={{ width: `${readingProgress}%` }}
    ></div>
  );
};

export default ReadingProgress;

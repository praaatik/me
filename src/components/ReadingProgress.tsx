import { useEffect, useState } from "react";
import { useReadingProgress } from "../hooks/useReadingProgress";

const ReadingProgress = () => {
  const readingProgress = useReadingProgress();
  return (
    <div
      className="bg-light-sea rounded-lg h-3 sticky top-0 "
      style={{ width: `${readingProgress}%` }}
    ></div>
  );
};

export default ReadingProgress;

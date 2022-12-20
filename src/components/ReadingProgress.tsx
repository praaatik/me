import { useEffect, useState } from "react";
import { useReadingProgress } from "../hooks/useReadingProgress";

const ReadingProgress = () => {
  const readingProgress = useReadingProgress();
  return (
    <div
      className="bg-slate-400 rounded-lg h-3 sticky top-0 "
      style={{ width: `${readingProgress}%` }}
    ></div>
  );
};

export default ReadingProgress;

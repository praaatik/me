import { useEffect, useState } from "react";

export function useReadingProgress() {
  const [readingProgress, readingProgressSet] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      let scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        readingProgressSet(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    };
    window.addEventListener("scroll", updateScrollCompletion);
  }, []);

  return readingProgress;
}

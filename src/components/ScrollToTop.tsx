import { ThemeContext } from "pages/_app";
import { useCallback, useContext, useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showButton, showButtonSet] = useState(false);

  const context = useContext(ThemeContext);

  // const scrollUp = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };
  const scrollUp = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        showButtonSet(true);
      } else {
        showButtonSet(false);
      }
    });
  }, []);

  return (
    <div
      className={
        context?.isThemeDark
          ? "flex justify-end sticky bottom-10 text-light-background-1 h-32 w-32"
          : "flex justify-end sticky bottom-10 text-dark-background-1 h-32 w-32"
      }
    >
      {showButton && (
        <FaAngleUp
          size={40}
          className="border-2 border-light-sea cursor-pointer"
          onClick={() => scrollUp()}
        />
      )}
    </div>
  );
};

export default ScrollToTop;

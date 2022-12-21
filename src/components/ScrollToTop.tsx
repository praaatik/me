import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showButton, showButtonSet] = useState(false);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    <div className="flex justify-end sticky bottom-5">
      {showButton && (
        <FaAngleUp
          size={40}
          className="border-2 border-black rounded-full cursor-pointer"
          onClick={() => scrollUp()}
        />
      )}
    </div>
  );
};

export default ScrollToTop;

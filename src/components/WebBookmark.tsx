import { ThemeContext } from "pages/_app";
import { useContext, useEffect, useState } from "react";
import IPreview from "../interfaces/IPreview";
import IPreviewResponseStatus from "../interfaces/IPreviewResponseStatus";
import IWebBookmarkStyles from "../interfaces/IWebBookmarkStyles";

interface Props {
  href: string;
  title: string;
}

const lightStyles: IWebBookmarkStyles = {
  containerStyles:
    "border-2 border-light-rose p-4 flex row justify-evenly lg:mr-24 lg:my-8 lg:ml-0 cursor-pointer hover:underline",
  descriptionStyles: "text-xs text-dark-background-3 mt-1 lg:text-sm",
  titleStyles: "text-base text-dark-background-1 lg:text-xl",
};

const darkStyles: IWebBookmarkStyles = {
  containerStyles:
    "border-2 border-dark-peach p-4 flex row justify-evenly lg:mr-24 lg:my-8 lg:ml-0 cursor-pointer hover:underline",
  descriptionStyles: "text-xs text-light-background-3 mt-1 lg:text-sm",
  titleStyles: "text-base text-light-background-1 lg:text-xl",
};

const WebBookmark = ({ href }: Props) => {
  const context = useContext(ThemeContext);
  const [preview, previewSet] = useState<IPreview>();
  const [response, responseSet] = useState<IPreviewResponseStatus>({
    isError: false,
    isLoading: false,
  });

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    var data = { key: API_KEY, q: href };
    fetch("https://api.linkpreview.net", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status != 200) {
          throw new Error("something went wrong");
        }
        return res.json();
      })
      .then((response) => {
        previewSet(response);
        responseSet({ isError: false, isLoading: false });
      })
      .catch((error) => {
        responseSet({ isError: true, isLoading: false });
      });
  }, []);

  return (
    <a href={href} target={"_blank"} rel="noreferrer">
      <div
        className={
          context?.isThemeDark
            ? darkStyles.containerStyles
            : lightStyles.containerStyles
        }
      >
        <div className="flex flex-col justify-evenly lg:justify-around">
          <div
            className={
              context?.isThemeDark
                ? darkStyles.titleStyles
                : lightStyles.titleStyles
            }
          >
            {preview?.title}
          </div>
          <div
            className={
              context?.isThemeDark
                ? darkStyles.descriptionStyles
                : lightStyles.descriptionStyles
            }
          >
            {preview?.description}
          </div>
        </div>
        {preview && preview?.image !== "" && (
          <img
            src={preview?.image}
            alt={`Image for ${preview?.title}`}
            className="h-2/3 w-2/3"
          />
        )}
      </div>
    </a>
  );
};

export default WebBookmark;

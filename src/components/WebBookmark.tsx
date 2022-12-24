import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Image, { ImageLoader } from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  title: string;
}

interface IPreview {
  title?: string;
  url?: string;
  image: string;
  description?: string;
}

interface ResponseStatus {
  isError?: boolean;
  isLoading?: boolean;
}

const WebBookmark = ({ href }: Props) => {
  const [preview, previewSet] = useState<IPreview>();
  const [response, responseSet] = useState<ResponseStatus>({
    isError: false,
    isLoading: false,
  });

  const API_KEY = "8e5f900346d359c08898ce6c8d9eb784";
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
        console.log(response);
        responseSet({ isError: false, isLoading: false });
      })
      .catch((error) => {
        console.log("error happened man!");
        console.log(error);
        responseSet({ isError: true, isLoading: false });
      });
  }, []);

  useEffect(() => {}, [preview]);

  useEffect(() => {
    console.log(response?.isError);
  }, [response?.isError]);

  return (
    <a href={href} target={"_blank"} rel="noreferrer">
      <div className="border-2 border-black p-4 flex row justify-evenly lg:mr-24 lg:my-8 lg:ml-0 cursor-pointer hover:underline">
        <div className="flex flex-col justify-evenly lg:justify-around">
          <div className="text-base lg:text-xl">{preview?.title}</div>
          <div className="text-xs text-slate-700 mt-1 lg:text-sm">
            {preview?.description}
          </div>
        </div>
        {preview && preview?.image !== "" && (
          <img
            src={preview?.image}
            alt={`Image for ${preview?.title}`}
            className="border-black border-2 h-2/3 w-2/3"
          />
        )}
      </div>
    </a>
  );
};

export default WebBookmark;

import Image from "next/image";
import React from "react";
import StaticImage from "../../public/assets/static-news-mage.png";
import Link from "next/link";

const NewsItem = (props: any) => {
  console.log({ props }, "news item");
  const date = new Date(props?.data?.publishedAt);

  return (
    <>
      {props?.data ? (
        <div className="w-full flex justify-start gap-2 sm:gap-4  items-center my-2">
          <div className="relative h-20 sm:w-36 sm:h-36 w-1/4 ">
            {/* cant use nextjs image because it doesnt allow domain images until added in next config */}
            <img
              src={props?.data?.urlToImage ?? StaticImage}
              alt="/"
              width={200}
              height={300}
              className=" rounded-md"
            />
          </div>

          <div className="flex flex-col w-3/4">
            <p className="font-semibold tex-3xl sm:text-4xl line-clamp-1">
              {props?.data?.title}
            </p>
            <div className="flex gap-2">
              <p className="">{props?.data?.author}</p>
              <p className="">{date.toDateString()}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NewsItem;

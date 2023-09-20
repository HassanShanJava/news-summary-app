import Image from "next/image";
import React, { useState } from "react";
import StaticImage from "../../public/assets/static-news-mage.png";
import Link from "next/link";
import { UserCircle2 } from "lucide-react";
import { FaUserAlt } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import { Button } from "./button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SummaryModal from "../modal/summarize";

const NewsItem = (props: any) => {
  console.log({ props }, "news item");
  const date = new Date(props?.data?.publishedAt);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {props?.data ? (
        <div className="w-full flex justify-start gap-2 sm:gap-4  items-start  max-h-fit p-2 hover:bg-gray-100 rounded-lg">
          <div className="w-fit">
            {/* cant use nextjs image because it doesnt allow domain images until added in next config */}
            <img
              src={
                props?.data?.urlToImage &&
                props?.data?.urlToImage !== null &&
                props?.data?.urlToImage !== ""
                  ? props?.data?.urlToImage
                  : StaticImage.src
              }
              alt="/"
              className="object-cover h-16 w-24 sm:h-24 sm:w-32 rounded-md inset-0"
            />
          </div>

          <div className="flex flex-col w-fit">
            <Link href={props?.data?.url} target="_blank">
              <p className="cursor-pointer font-semibold text-lg sm:text-xl line-clamp-1">
                {props?.data?.title}
              </p>
            </Link>
            <div className="flex justify-start gap-2 w-fit mt-2 sm:mt-4">
              {/* <UserCircle2 size={48} /> */}
              <div className=" bg-gray-200 rounded-full p-2 sm:p-3 text-black w-fit h-fit">
                <FaUserAlt className="text-sm sm:text-lg rouned-full" />
              </div>
              <div className=" flex flex-col w-full max-w-[20rem]">
                <p className="text-xs sm:text-sm w-full">
                  {props?.data?.author &&
                  props?.data?.author !== null &&
                  props?.data?.author !== ""
                    ? props?.data?.author
                    : "Anonymous"}
                </p>
                <p className="text-xs sm:text-sm">{date.toDateString()}</p>
              </div>

              <Button
                size={"sm"}
                className="bg-orange-600 font-semibold hover:bg-orange-500"
                onClick={() => setIsOpen(true)}
              >
                <RiNewspaperLine className="text-md" />
              </Button>
            </div>
          </div>
          <SummaryModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NewsItem;

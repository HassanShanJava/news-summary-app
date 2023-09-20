"use client";
import { fetchNewsApi } from "@/utils/helper";
import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { categoryList } from "@/utils/constants";
import NewsItem from "../ui/newsItem";

const Category = () => {
  const [category, setCategory] = useState<string>("general");
  const [pageParam, setPageParam] = useState<number>(1);
  const [news, setNews] = useState<Array<any>>([]);



  useEffect(() => {
    (async () => {
      const res = await fetchNewsApi(category, pageParam);
      // need to remove urls that are do not return data 
      const resFiltered = res.articles.filter((item: any) => item.url !== 'https://removed.com')

      // to change news array on different caetogey and append arraye for infinite scroll
      if (pageParam == 1) {
        setNews(resFiltered)
      } else {
        setNews([...news, ...resFiltered])
      }

    })();
  }, [category, pageParam]);




  function nextPage() {
    console.log('Next page emitted');

    setPageParam((prev) => prev + 1);
  }


  return (
    <div className="w-full px-8 sm:px-16 py-2 sm:py-4">
      <div className="w-full flex flex-wrap gap-2 sm:justify-between items-center">
        {categoryList.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              setCategory(item.type);
              setPageParam(1)
            }}
            className={`cursor-pointer rounded-full shadow-md px-2 py-1 sm:px-4 sm:py-2 font-semibold sm:font-bold text-sm sm:text-base ${item.type == category ? "bg-orange-400 text-orange-100" : "bg-orange-100 text-orange-400"} hover:bg-orange-400  hover:text-orange-100`}
          >
            {item.title}
          </div>
        ))}
      </div>
      {news && news.length > 0 ? (
        <ul className="w-full my-6 grid grid-cols-1 sm:grid-cols-2 ">

          {news.map((newsItem, i) => (
            <li key={i} className="py-4">
              <NewsItem
                data={newsItem}
                isLast={i === news.length - 1}
                nextPage={nextPage} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex justify-center items-center h-[70vh]">
          <p className="text-xl sm:text-3xl font-bold">No Articles Found</p>
        </div>
      )}
    </div>
  );
};

export default Category;

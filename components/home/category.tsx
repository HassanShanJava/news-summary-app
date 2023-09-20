"use client";
import { fetchNewsApi } from "@/utils/helper";
import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { categoryList } from "@/utils/constants";
import NewsItem from "../ui/newsItem";

const Category = () => {
  const [category, setCategory] = useState<string>("general");
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetchNewsApi(category);
      const resFiltered=res.articles.filter((item:any) => item.url !== 'https://removed.com')
      setNews(resFiltered);
    })();
  }, [category]);
  console.log({ news });


  return (
    <div className="w-full px-8 sm:px-16 py-2 sm:py-4">
      <div className="w-full flex flex-wrap gap-2 sm:justify-between items-center">
        {categoryList.map((item, i) => (
          <div
            onClick={() => {
              setCategory(item.type);
            }}
            className={`cursor-pointer rounded-full shadow-md px-2 py-1 sm:px-4 sm:py-2 font-semibold sm:font-bold text-sm sm:text-base ${item.type == category ? "bg-orange-400 text-orange-100" : "bg-orange-100 text-orange-400"} hover:bg-orange-400  hover:text-orange-100`}
          >
            {item.title}
          </div>
        ))}
      </div>
      {news && news.length > 0 ? (
        <ul className="w-full my-6 grid grid-cols-1 sm:grid-cols-2 ">
          {/* need to remove urls that are do not return data */}
          {news.map((newsItem, i) => (
            <li key={i} className="py-4">
              <NewsItem data={newsItem} length={news.length} i={i} />
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

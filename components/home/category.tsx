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
      setNews(res.articles);
    })();
  }, [category]);
  console.log({ news });

  // const { data, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery<any[]>({
  //   queryKey: ['newsList'],
  //   queryFn: fetchNewsApi,
  //   getNextPageParam: (_, pages) => pages.length + 1,
  // });

  return (
    <div className="w-full px-8 sm:px-16 py-2 sm:py-4">
      <div className="w-full flex flex-wrap gap-2 sm:justify-between items-center">
        {categoryList.map((item, i) => (
          <div
            onClick={() => {
              setCategory(item.type);
            }}
            className={`cursor-pointer rounded-full shadow-md px-2 py-1 sm:px-4 sm:py-2 font-semibold sm:font-bold text-sm sm:text-base bg-orange-100 hover:bg-orange-400 text-orange-400 hover:text-orange-100`}
          >
            {item.title}
          </div>
        ))}
      </div>
      {news && (
        <ul className="w-full my-6 grid grid-cols-1 sm:grid-cols-2 ">
          {/* need to remove urls that are do not return data */}
          {news.filter((item)=>item.url!=='https://removed.com').map((newsItem, i) => (
            <li key={i} className="py-4">
              <NewsItem data={newsItem} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Category;

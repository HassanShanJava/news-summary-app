"use client";
import { fetchNewsApi } from "@/utils/helper";
import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from '@tanstack/react-query';
import { categoryList } from "@/utils/constants";




const Category = () => {
  const [category, setCategory] = useState<string>("general");
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetchNewsApi(category);
      setNews(res.articles)
    })();
  }, [category]);
  console.log(news)

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
            className=" cursor-pointer rounded-full  px-2 py-1 sm:px-4 sm:py-2 font-semibold sm:font-bold text-sm sm:text-base bg-orange-200 hover:bg-orange-500 text-orange-500 hover:text-orange-200"
          >
            {item.title}
          </div>
        ))}
      </div>
      <div>

      </div>
    </div>
  );
};

export default Category;

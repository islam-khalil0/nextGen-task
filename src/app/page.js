"use client";

import Card from "@/components/Card";
import { useQuery } from "react-query";
import { fetchPostsData } from "@/api/api";
import RelatedPostsCard from "@/components/RelatedPostsCard";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const { isLoading, isError, data, error } = useQuery({
    queryFn: () => fetchPostsData(),
    queryKey: ["postsData"],
  });

  if (isLoading)
    return (
      <div className="w-full min-h-[100vh] flex items-center justify-center ">
        <h1 className="text-3xl">Loading...</h1>
      </div>
    );

  if (isError) return <div>Error: {error.message}</div>;
  const filteredData =
    search === "" ? data : data.filter((item) => item.title.includes(search));

  return (
    <main className="px-[1rem] py-[2rem] container mx-auto grid grid-cols-3 gap-8 auto-cols-max max-lg:grid-cols-1">
      <div className="col-span-2 flex flex-col items-center gap-[3rem]">
        {data.map((items) => (
          <Card key={items.id} items={items} />
        ))}
      </div>

      {/* search & related posts*/}
      <div className="w-full h-[max-content] border-gray-200 border-2 border-solid p-[1rem] rounded-xl flex flex-col gap-[1rem] max-lg:hidden">
        <input
          type="search"
          placeholder="search by title"
          className="py-1 px-2 rounded border-gray-100 border-solid border-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <h1 className="mt-[1rem] text-xl">Related Posts</h1>
        {filteredData.map((items) => (
          <RelatedPostsCard key={items.id} items={items} />
        ))}
      </div>
    </main>
  );
}

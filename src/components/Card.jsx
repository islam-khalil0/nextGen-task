import Image from "next/image";
import React from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import img from "../../public/perImg.jpg";
import { useQuery } from "react-query";
import { fetchCommentsData } from "@/api/api";
import CommentCard from "./commentCard";

const card = (items) => {
  const title = items.items.title;
  const body = items.items.body;
  const id = items.items.id;

  const { isLoading, isError, data, error } = useQuery({
    queryFn: () => fetchCommentsData(id),
    queryKey: ["commentsData"],
  });

  if (isLoading)
    return (
      <div className="w-full min-h-[100vh] flex items-center justify-center ">
        <h1 className="text-3xl">Loading...</h1>
      </div>
    );
  if (isError)
    return (
      <div className="w-full min-h-[100vh] flex items-center justify-center ">
        <h1 className="text-3xl">Error: {error.message}</h1>
      </div>
    );

  return (
    <div className="w-full p-[1rem] rounded-xl flex flex-col gap-[1rem]">
      {/* image & name */}
      <div className="flex gap-[1rem]">
        <Image
          src={img}
          alt="user image"
          width={50}
          height={40}
          className="rounded-xl overflow-hidden bg-gray-400"
        />
        <span className="flex flex-col">
          <p>Islam Khalil</p>
          <small>@islamkhalil</small>
        </span>
      </div>

      {/* content post & icons for action */}
      <div className="flex flex-col gap-[1rem]">
        <span>
          <h3 className="text-xl">{title}</h3>
          <p>{body}</p>
        </span>
        <div className="w-full h-[2rem] flex items-center justify-between ">
          <span className="flex gap-[0.8rem]">
            <SlLike className="text-xl cursor-pointer" />
            <SlDislike className="text-xl cursor-pointer" />
          </span>

          <span className="flex gap-[0.8rem]">
            <FaRegComment className="text-xl cursor-pointer" />
            <IoMdShare className="text-xl cursor-pointer" />
          </span>
        </div>
      </div>

      <span className="w-full h-[1px] bg-gray-200"></span>

      {/* comments */}
      <div className="flex flex-col gap-[0.4rem] mt-[1rem] pl-[1rem]">
        {data?.map((items) => (
          <CommentCard key={items.id} items={items} />
        ))}
      </div>
    </div>
  );
};

export default card;

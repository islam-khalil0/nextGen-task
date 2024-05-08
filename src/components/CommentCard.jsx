import React from "react";
import Image from "next/image";
import img from "../../public/perImg.jpg";

const CommentCard = (items) => {
  const name = items.items.name;
  const email = items.items.email;
  const body = items.items.body;

  return (
    <div className="flex flex-col gap-[0.5rem]   p-[0.8rem] rounded-md border-gray-100 border-2 border-solid">
      <div className="flex gap-[0.5rem] items-center justify-start">
        <Image
          src={img}
          alt="user image"
          width={35}
          height={35}
          className="rounded-3xl overflow-hidden bg-gray-400"
        />
        <span className="flex flex-col">
          <p>{name}</p>
        </span>
      </div>
      <p className="text-sm">{body}</p>
    </div>
  );
};

export default CommentCard;

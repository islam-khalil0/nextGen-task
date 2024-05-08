import Image from "next/image";
import React from "react";
import img from "../../public/perImg.jpg";

const RelatedPostsCard = (items) => {
  const title = items.items.title;
  const body = items.items.body;
  const id = items.items.id;

  return (
    <div>
      {/* related posts */}
      <div className="mt-[0.2rem] flex flex-col gap-[0.5rem]">
        <div className="flex flex-col gap-[0.5rem] p-[0.8rem] border-gray-100 border-b-2 border-solid">
          <div className="flex gap-[0.5rem] items-center justify-start">
            <Image
              src={img}
              alt="user image"
              width={35}
              height={35}
              className="rounded-3xl overflow-hidden bg-gray-400"
            />
            <span className="flex flex-col">
              <p>Islam Khalil</p>
            </span>
          </div>
          <span>
            <h1 className="text-md">{title}</h1>
            <p className="text-sm">{body}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RelatedPostsCard;

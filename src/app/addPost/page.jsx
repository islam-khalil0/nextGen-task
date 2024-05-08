"use client";

import { addPost } from "@/api/api";
import React, { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      addPost(title, body, userId);
      console.log("Data sent successfully");
      setBody("");
      setTitle("");
      setEmail("");
      setUserId("");
      setShowMessage(true);
      // hide the message agin
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  return (
    <div className="px-[1rem] py-[2rem] container mx-auto w-full min-h-[90vh] flex flex-col items-center justify-center gap-[1rem]">
      <h1 className="text-3xl font-bold">Form</h1>
      <h2 className="text-gray-600">Create a post</h2>
      <form className="w-[50%] p-[1rem] max-xl:w-full" onSubmit={handleSubmit}>
        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            className="block w-full rounded-md border-2 p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
            placeholder="you@example.com"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="userId"
            className="mt-4 block text-sm font-medium leading-6 text-gray-900"
          >
            user id
          </label>

          <input
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            id="userId"
            type="number"
            className="block w-full rounded-md border-2 p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
            placeholder="1025"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="title"
            className="mt-4 block text-sm font-medium leading-6 text-gray-900"
          >
            title
          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            className="block w-full rounded-md border-2 p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
            placeholder="1025"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="postContent"
            className="mt-4 block text-sm font-medium leading-6 text-gray-900"
          >
            post content
          </label>

          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            id="postContent"
            className="block max-h-[7rem] min-h-[3rem] w-full rounded-md border-2 p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
            placeholder="Write your post content here..."
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mt-4"
        >
          share post
        </button>
        {showMessage && (
          <p className="text-green-600 mt-4">
            Your post has already been uploaded to the server, but it will not
            appear now because it is a test server , thank you for your time ❤️
          </p>
        )}
      </form>
    </div>
  );
};

export default page;

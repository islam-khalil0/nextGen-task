"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link className="-m-1.5 p-1.5" href="/">
            <h1 className="text-xl font-bold">Logo</h1>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-6">
          <a
            href="#"
            className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
          >
            logo
          </a>

          <Link
            href="/addPost"
            key="addPost"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Post
          </Link>
        </div>
      </nav>
    </header>
  );
}

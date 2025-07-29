"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");

  return (
    <main className="flex flex-col items-center justify-center p-4 pt-28">
      <div className="w-full max-w-md shadow-lg bg-white p-4 rounded-xl border-2">
        <div className="text-center">
          <h2 className="text-3xl font-bold p-2">Movie Searcher</h2>
          <p className="text-neutral-500">
            Enter a movie title to see matching movies
          </p>
        </div>

        <form action={`/search/${encodeURIComponent(title)}`}>
          <div className="space-y-2">
            <label htmlFor="title" className="font-semibold">
              Movie Title
            </label>
            <input
              id="title"
              placeholder="e.g. Batman, Inception, etc"
              value={title}
              className="border-2 w-full p-2 rounded-lg"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <Link
            href={`/search/${encodeURIComponent(title)}`}
            className="inline-block w-full text-white bg-blue-600 hover:bg-blue-500 transition-colors font-medium rounded-lg text-sm px-5 py-2.5 text-center my-2"
          >
            Search
          </Link>
        </form>
      </div>
    </main>
  );
}

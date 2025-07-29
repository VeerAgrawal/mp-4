/*omdb api - Open movie data base (ombd): search for info abt movies */
"use server";

import type { MovieSearchItem, MovieDetail } from "@/types";

const BASE = "https://www.omdbapi.com/";

/* search by movie title */
export async function searchMovies(title: string): Promise<MovieSearchItem[]> {
  const url = `${BASE}?apikey=${process.env.OMDB_KEY}&s=${encodeURIComponent(
    title
  )}&type=movie`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("OMDb request failed");
  const data = await res.json();
  return data.Search ?? [];
}

/* detailed by IMDb ID */
export async function getMovie(id: string): Promise<MovieDetail> {
  const url = `${BASE}?apikey=${process.env.OMDB_KEY}&i=${id}&plot=full`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("OMDb request failed");
  return res.json();
}

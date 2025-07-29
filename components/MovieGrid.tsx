"use client";

import styled from "styled-components";
import type { MovieSearchItem } from "@/types";
import MovieCard from "./MovieCard";

const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2vh;
`;

export default function MovieGrid({ movies }: { movies: MovieSearchItem[] }) {
  return (
    <Grid>
      {movies.map((m) => (
        <MovieCard key={m.imdbID} movie={m} />
      ))}
    </Grid>
  );
}

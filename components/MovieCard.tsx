"use client";

import styled from "styled-components";
import Link from "next/link";
import type { MovieSearchItem } from "@/types";

/* poster plus caption */
const CardWrap = styled.article`
  flex: 1 1 45%;
  max-width: 45%;
  margin: 2vh;
  text-align: center;
`;

const Poster = styled.img`
  width: 100%;
  border-radius: 1vh;
`;

const Title = styled.p`
  font-size: calc(0.8vw + 0.8vh);
  margin-top: 1vh;
`;

export default function MovieCard({ movie }: { movie: MovieSearchItem }) {
  return (
    <CardWrap>
      <Link href={`/movie/${movie.imdbID}`}>
        <Poster
          id={`poster-${movie.imdbID}`}
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.jpg"}
          alt={movie.Title}
        />
        <Title>
          {movie.Title} ({movie.Year})
        </Title>
      </Link>
    </CardWrap>
  );
}

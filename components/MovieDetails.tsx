"use client";

import styled from "styled-components";
import type { MovieDetail } from "@/types";  


/* styles*/
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
  padding: 2vh;
`;

const Poster = styled.img`
  width: 40%;
  max-width: 60vw;
  border-radius: 1vh;
`;

const Info = styled.div`
  width: 100%;
  max-width: 70vw;
  text-align: left;
`;

const Title = styled.h2`
  font-size: calc(1.6vw + 1.6vh);
  margin-bottom: 1vh;
`;

const Label = styled.span`
  font-weight: 600;
`;


export default function MovieDetails({ movie }: { movie: MovieDetail }) {
  return (
    <Wrapper>
      <Poster id="poster" src={movie.Poster} alt={movie.Title} />

      <Info>
        <Title>{movie.Title} ({movie.Year})</Title>

        <p><Label>Rated:</Label> {movie.Rated}</p>
        <p><Label>Runtime:</Label> {movie.Runtime}</p>
        <p><Label>Genre:</Label> {movie.Genre}</p>
        <p><Label>Actors:</Label> {movie.Actors}</p>

        <h3 style={{ fontSize: "calc(1.2vw + 1.2vh)", margin: "2vh 0 1vh" }}>
          Plot
        </h3>
        <p>{movie.Plot}</p>
      </Info>
    </Wrapper>
  );
}

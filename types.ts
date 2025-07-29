export type MovieSearchItem = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

export type MovieDetail = MovieSearchItem & {
  Plot: string;
  Genre: string;
  Actors: string;
  Runtime: string;
  Rated: string;
};

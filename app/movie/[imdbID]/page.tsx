import { getMovie } from "@/lib/omdb";
import MovieDetails from "@/components/MovieDetails";

interface Params {
  imdbID: string;
}

export default async function MoviePage({ params }: { params: Params }) {
  const movie = await getMovie(params.imdbID); 
  return <MovieDetails movie={movie} />;
}

import { getMovie } from "@/lib/omdb";
import MovieDetails from "@/components/MovieDetails";

export default async function MoviePage({
  params,
}: {
  params: { imdbID: string };
}) {
  const movie = await getMovie(params.imdbID); // server-side fetch
  return <MovieDetails movie={movie} />;
}

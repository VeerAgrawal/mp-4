import { searchMovies } from "@/lib/omdb";
import MovieGrid from "@/components/MovieGrid";

interface Params {
  query: string;
}

export default async function SearchPage({ params }: { params: Params }) {
  const movies = await searchMovies(params.query);
  return (
    <main>
      <h2 style={{ marginTop: "2vh" }}>
        Results for “{decodeURIComponent(params.query)}”
      </h2>
      <MovieGrid movies={movies} />
    </main>
  );
}

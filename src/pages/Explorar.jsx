import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";
import EmptyState from "../components/EmptyState";

function Explorar() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("Todos");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://api.themoviedb.org/3/trending/all/week?language=pt-BR",
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
              accept: "application/json",
            },
          },
        );

        if (!response.ok) {
          throw new Error("Não foi possível carregar os títulos.");
        }

        const data = await response.json();

        const formattedMovies = data.results
          .filter((movie) => movie.poster_path)
          .map((movie) => ({
            id: movie.id,
            title: movie.title || movie.name,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            rating: movie.vote_average
              ? movie.vote_average.toFixed(1)
              : "Sem avaliação",
            type: movie.media_type === "tv" ? "Série" : "Filme",
          }));

        setMovies(formattedMovies);
      } catch (error) {
        console.error(error);
        setError("Não foi possível carregar o catálogo.");
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  const filteredMovies =
    filter === "Todos"
      ? movies
      : movies.filter((movie) => movie.type === filter);

  return (
    <main className="min-h-screen bg-[#0b1020]">
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
            Catálogo
          </p>

          <h1 className="text-4xl font-bold text-white">
            Explorar
          </h1>

          <p className="mt-3 max-w-2xl text-gray-400">
            Encontre filmes e séries para adicionar à sua lista e acompanhar
            depois.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {["Todos", "Filme", "Série"].map((item) => (
            <button key={item} onClick={() => setFilter(item)} className={ filter === item  ? "rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#0b1020]"  : "rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 transition hover:border-white/20 hover:text-white" } >
              {item === "Filme" ? "Filmes" : item === "Série" ? "Séries" : item}
            </button> ))}
        </div>

        {loading && (
          <p className="text-sm text-gray-400">
            Carregando catálogo...
          </p>
        )}

        {error && (
          <p className="text-sm text-red-400">
            {error}
          </p>
        )}

        {!loading && !error && filteredMovies.length === 0 && (
          <EmptyState message="Nenhum título encontrado." />
        )}

        {!loading && !error && filteredMovies.length > 0 && (
          <MovieGrid movies={filteredMovies} />
        )}
      </section>
    </main>
  );
}

export default Explorar;
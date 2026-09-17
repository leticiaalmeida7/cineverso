import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import EmptyState from "../components/EmptyState";

function Buscar() {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!searched || !search.trim()) {
      return;
    }

    async function fetchMovies() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(search)}&language=pt-BR`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
              accept: "application/json",
            },
          },
        );

        if (!response.ok) {
          throw new Error("Não foi possível realizar a busca.");
        }

        const data = await response.json();

        const formattedMovies = data.results
          .filter(
            (movie) =>
              (movie.media_type === "movie" || movie.media_type === "tv") &&
              movie.poster_path,
          )
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
        setError("Não foi possível realizar a busca.");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [searched, search]);

  function handleSearch() {
    if (!search.trim()) {
      return;
    }

    setSearched(true);
  }

  return (
    <main className="min-h-screen bg-[#0b1020]">
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
            Descobrir
          </p>

          <h1 className="text-4xl font-bold text-white">
            Buscar
          </h1>

          <p className="mt-3 text-gray-400">
            Procure por um filme ou série.
          </p>
        </div>

        <SearchBar value={search} onChange={setSearch} onSearch={handleSearch} />

        <div className="mt-12">
          {!searched ? (
            <EmptyState message="Digite um título para começar sua busca." />
          ) : loading ? (
            <div className="border-t border-white/10 pt-8">
              <p className="text-sm text-gray-400">
                Buscando títulos...
              </p>
            </div>
          ) : error ? (
            <div className="border-t border-white/10 pt-8">
              <p className="text-sm text-red-400">
                {error}
              </p>
            </div>
          ) : movies.length === 0 ? (
            <EmptyState message="Nenhum resultado encontrado. Tente pesquisar usando outro nome." />
          ) : (
            <>
              <h2 className="mb-6 text-2xl font-bold text-white">
                Resultados
              </h2>

              <MovieGrid movies={movies} />
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default Buscar;
import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";

function Home() {
  const [movies, setMovies] = useState([]);
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
          .slice(0, 12)
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
        setError("Não foi possível carregar os títulos em destaque.");
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <main className="min-h-screen bg-[#0b1020]">
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
            Seu catálogo pessoal
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Descubra o que assistir.
            <br />
            Organize o que você ama.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-400">
            Encontre filmes e séries, monte sua lista e acompanhe exatamente
            onde você parou.
          </p>
        </div>

        <section className="mt-14">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Em destaque
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Títulos que merecem sua atenção
              </p>
            </div>
          </div>

          {loading && (
            <p className="text-sm text-gray-400">
              Carregando títulos...
            </p>
          )}

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          {!loading && !error && movies.length === 0 && (
            <p className="text-sm text-gray-500">
              Nenhum título encontrado.
            </p>
          )}

          {!loading && !error && movies.length > 0 && (
            <MovieGrid movies={movies} />
          )}
        </section>
      </section>
    </main>
  );
}

export default Home;
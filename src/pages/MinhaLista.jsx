import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import StatusButton from "../components/StatusButton";

function MinhaLista() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const savedMovies = localStorage.getItem("cineTrackMinhaLista");

    if (savedMovies) {
      try {
        setMovies(JSON.parse(savedMovies));
      } catch (error) {
        console.error("Erro ao carregar a lista:", error);
        setMovies([]);
      }
    }
  }, []);

  function updateMovies(updatedMovies) {
    setMovies(updatedMovies);
    localStorage.setItem("cineTrackMinhaLista", JSON.stringify(updatedMovies));
  }

  function handleStatusChange(movieId, newStatus) {
    const updatedMovies = movies.map((movie) =>
      movie.id === movieId ? { ...movie, status: newStatus } : movie,
    );

    updateMovies(updatedMovies);
  }

  function handleRemove(movieId) {
    const updatedMovies = movies.filter((movie) => movie.id !== movieId);
    updateMovies(updatedMovies);
  }

  function renderMovies(movieList) {
    return (
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {movieList.map((movie) => (
          <div key={movie.id} className="min-w-0">
            <Link to={`/titulo/${movie.id}`} className="group block">
              <div className="overflow-hidden rounded-xl bg-[#171d31]">
                {movie.poster ? (
                  <img src={movie.poster} alt={`Pôster de ${movie.title}`} className="aspect-2/3 w-full object-cover transition duration-300 group-hover:scale-105"/> ) : (
                  <div className="flex aspect-2/3 items-center justify-center text-sm text-gray-500">
                    Sem pôster
                  </div>
                )}
              </div>
            </Link>

            <h3 className="mt-3 truncate text-sm font-semibold text-white">
              {movie.title}
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              {movie.type}
            </p>

            <div className="mt-3 flex items-center justify-between gap-2">
              <StatusButton status={movie.status} onChange={(newStatus) => handleStatusChange(movie.id, newStatus)}/>

              <button onClick={() => handleRemove(movie.id)} title="Remover da lista" className="rounded-lg border border-white/10 p-2 text-gray-500 transition hover:border-red-400/30 hover:text-red-400" >
                <Trash2 size={17} />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const wantToWatch = movies.filter((movie) => movie.status === "Quero assistir");
  const watching = movies.filter((movie) => movie.status === "Assistindo");
  const completed = movies.filter((movie) => movie.status === "Concluído");

  return (
    <main className="min-h-screen bg-[#0b1020]">
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
            Seu catálogo
          </p>

          <h1 className="text-4xl font-bold text-white">
            Minha Lista
          </h1>

          <p className="mt-3 max-w-2xl text-gray-400">
            Organize os filmes e séries que você quer assistir,
            está assistindo ou já concluiu.
          </p>
        </div>

        {movies.length === 0 ? (
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-xl font-semibold text-white">
              Sua lista está vazia
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Adicione filmes e séries para encontrá-los aqui depois.
            </p>
          </div>
        ) : (
          <div className="space-y-14">
            {wantToWatch.length > 0 && (
              <section>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white"> Quero assistir </h2>

                  <p className="mt-1 text-sm text-gray-500"> Títulos que você pretende assistir. </p>
                </div>
                {renderMovies(wantToWatch)}
              </section>
            )}

            {watching.length > 0 && (
              <section>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white"> Assistindo </h2>

                  <p className="mt-1 text-sm text-gray-500"> Títulos que você começou a acompanhar. </p>
                </div>
                {renderMovies(watching)}
              </section>
            )}

            {completed.length > 0 && (
              <section>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white"> Concluído </h2>

                  <p className="mt-1 text-sm text-gray-500"> Títulos que você já terminou.</p>
                </div>

                {renderMovies(completed)}
              </section>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default MinhaLista;
import { useEffect, useState } from "react";
import { ArrowLeft, Star, Plus, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";

function Detalhes() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [added, setAdded] = useState(false);
  const [season, setSeason] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [watchedEpisodes, setWatchedEpisodes] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        setError("");

        let response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
              accept: "application/json",
            },
          },
        );

        let type = "Filme";

        if (!response.ok) {
          response = await fetch(
            `https://api.themoviedb.org/3/tv/${id}?language=pt-BR`,
            {
              headers: {
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
                accept: "application/json",
              },
            },
          );

          type = "Série";
        }

        if (!response.ok) {
          throw new Error("Não foi possível carregar o título.");
        }

        const data = await response.json();

        setMovie({ ...data, type });

        const savedMovies = localStorage.getItem("cineTrackMinhaLista");

        if (savedMovies) {
          const movies = JSON.parse(savedMovies);
          const savedMovie = movies.find((item) => item.id === data.id);

          setAdded(Boolean(savedMovie));

          if (savedMovie?.watchedEpisodes) {
            setWatchedEpisodes(savedMovie.watchedEpisodes);
          }
        }

        if (type === "Série" && data.seasons?.length > 0) {
          const firstSeason = data.seasons.find((item) => item.season_number > 0) || data.seasons[0];
          setSeason(firstSeason);

          const seasonResponse = await fetch(
            `https://api.themoviedb.org/3/tv/${id}/season/${firstSeason.season_number}?language=pt-BR`,
            {
              headers: {
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
                accept: "application/json",
              },
            },
          );

          if (seasonResponse.ok) {
            const seasonData = await seasonResponse.json();
            setEpisodes(seasonData.episodes || []);
          }
        }
      } catch (error) {
        console.error(error);
        setError("Não foi possível carregar os detalhes do título.");
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [id]);

  async function handleSeasonChange(event) {
    const seasonNumber = Number(event.target.value);

    const selectedSeason = movie.seasons.find(
      (item) => item.season_number === seasonNumber,
    );

    setSeason(selectedSeason);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?language=pt-BR`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            accept: "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Não foi possível carregar os episódios.");
      }

      const data = await response.json();
      setEpisodes(data.episodes || []);
    } catch (error) {
      console.error(error);
      setEpisodes([]);
    }
  }

  function handleEpisodeToggle(episodeNumber) {
    const episodeId = `${movie.id}-${season.season_number}-${episodeNumber}`;

    const updatedEpisodes = watchedEpisodes.includes(episodeId)
      ? watchedEpisodes.filter((item) => item !== episodeId)
      : [...watchedEpisodes, episodeId];

    setWatchedEpisodes(updatedEpisodes);

    const savedMovies = localStorage.getItem("cineTrackMinhaLista");
    const movies = savedMovies ? JSON.parse(savedMovies) : [];

    const updatedMovies = movies.map((item) =>
      item.id === movie.id
        ? { ...item, watchedEpisodes: updatedEpisodes }
        : item,
    );

    localStorage.setItem("cineTrackMinhaLista", JSON.stringify(updatedMovies));
  }

  function handleAddToList() {
    if (!movie) {
      return;
    }

    const savedMovies = localStorage.getItem("cineTrackMinhaLista");
    const movies = savedMovies ? JSON.parse(savedMovies) : [];

    const alreadyExists = movies.some((item) => item.id === movie.id);

    if (alreadyExists) {
      setAdded(true);
      return;
    }

    const title = movie.title || movie.name;
    const originalTitle = movie.original_title || movie.original_name;
    const releaseDate = movie.release_date || movie.first_air_date;

    const movieToSave = {
      id: movie.id,
      title,
      originalTitle,
      poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null,
      rating: movie.vote_average?.toFixed(1),
      releaseDate,
      type: movie.type,
      genres: movie.genres.map((genre) => genre.name),
      synopsis: movie.overview,
      status: "Quero assistir",
      watchedEpisodes: [],
    };

    const updatedMovies = [...movies, movieToSave];

    localStorage.setItem("cineTrackMinhaLista", JSON.stringify(updatedMovies));
    setAdded(true);
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0b1020]">
        <section className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-gray-400">Carregando detalhes...</p>
        </section>
      </main>
    );
  }

  if (error || !movie) {
    return (
      <main className="min-h-screen bg-[#0b1020]">
        <section className="mx-auto max-w-7xl px-6 py-12">
          <Link to="/explorar" className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white">
            <ArrowLeft size={18} />
            Voltar para explorar
          </Link>

          <h1 className="text-2xl font-bold text-white">Não foi possível carregar o título</h1>

          <p className="mt-3 text-gray-500">{error}</p>
        </section>
      </main>
    );
  }

  const title = movie.title || movie.name;
  const originalTitle = movie.original_title || movie.original_name;
  const releaseDate = movie.release_date || movie.first_air_date;
  const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null;
  const releaseYear = releaseDate ? releaseDate.substring(0, 4) : "Ano não informado";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "Sem avaliação";

  const episodeProgress = episodes.length > 0
    ? Math.round(
        (episodes.filter((episode) =>
          watchedEpisodes.includes(`${movie.id}-${season?.season_number}-${episode.episode_number}`),
        ).length /
          episodes.length) *
          100,
      )
    : 0;

  return (
    <main className="min-h-screen bg-[#0b1020]">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <Link to="/explorar" className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white">
          <ArrowLeft size={18} />
          Voltar para explorar
        </Link>

        <div className="grid gap-10 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
          <div>
            {poster ? (
              <img src={poster} alt={`Pôster de ${title}`} className="w-full max-w-[320px] rounded-xl object-cover shadow-2xl" /> ) : (
              <div className="flex aspect-2/3 w-full max-w-[320px] items-center justify-center rounded-xl bg-[#171d31] text-gray-500">
                Sem pôster
              </div>)}
          </div>

          <div className="max-w-3xl">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-gray-400">
              <span>{movie.type}</span>
              <span>{releaseYear}</span>

              {movie.type === "Filme" && movie.runtime && (
                <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}min</span>)}
              {movie.type === "Série" && movie.number_of_seasons && (
                <span>{movie.number_of_seasons} temporadas</span> )}
            </div>

            <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>

            {originalTitle && originalTitle !== title && (
              <p className="mt-2 text-sm text-gray-500">{originalTitle}</p>)}

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-white">
                <Star size={20} fill="currentColor" />
                <span className="font-semibold">{rating}</span>
              </div>

              <div className="flex flex-wrap gap-2"> {movie.genres?.map((genre) => (
                  <span key={genre.id} className="rounded-md border border-white/10 px-3 py-1 text-xs text-gray-400"> {genre.name} </span> ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-white">Sinopse</h2>

              <p className="mt-3 leading-7 text-gray-400">
                {movie.overview || "Sinopse não disponível."}
              </p>
            </div>

            <button
              onClick={handleAddToList}
              disabled={added}
              className={`mt-8 flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${
                added
                  ? "bg-white/10 text-gray-300"
                  : "bg-indigo-500 text-white hover:bg-indigo-400"
              }`}
            >
              {added ? <Check size={19} /> : <Plus size={19} />}
              {added ? "Adicionado à minha lista" : "Adicionar à minha lista"}
            </button>

            {movie.type === "Série" && movie.seasons?.length > 0 && (
              <div className="mt-12 border-t border-white/10 pt-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">Episódios</h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Acompanhe os episódios que você já assistiu.
                    </p>
                  </div>

                  <select value={season?.season_number ?? ""} onChange={handleSeasonChange} className="rounded-lg border border-white/10 bg-[#12182a] px-4 py-2 text-sm text-gray-300 outline-none" >
                    {movie.seasons .filter((item) => item.season_number > 0) .map((item) => (
                        <option key={item.id} value={item.season_number}>
                          Temporada {item.season_number}
                        </option> ))}
                  </select>
                </div>

                {episodes.length > 0 && (
                  <>
                    <div className="mt-6">
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-gray-400">
                          Progresso da temporada
                        </span>

                        <span className="text-white">
                          {episodeProgress}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full bg-indigo-500 transition-all"
                          style={{ width: `${episodeProgress}%` }} />
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      {episodes.map((episode) => {
                        const episodeId = `${movie.id}-${season?.season_number}-${episode.episode_number}`;
                        const watched = watchedEpisodes.includes(episodeId);

                        return (
                          <div key={episode.id} className="flex items-center justify-between gap-4 border-b border-white/10 py-4">
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-white"> Episódio {episode.episode_number} — {episode.name}  </p>

                              <p className="mt-1 line-clamp-2 text-xs text-gray-500">
                                {episode.overview || "Descrição não disponível."}
                              </p>
                            </div>

                            <button onClick={() => handleEpisodeToggle(episode.episode_number)} className={`shrink-0 rounded-lg border px-3 py-2 text-xs font-semibold transition ${ watched ? "border-indigo-400/30 bg-indigo-500/10 text-indigo-300" : "border-white/10 text-gray-400 hover:border-white/20 hover:text-white" }`} >
                              {watched ? "Assistido" : "Marcar como assistido"}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Detalhes;
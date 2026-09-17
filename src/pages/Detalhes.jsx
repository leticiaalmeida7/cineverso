import { useState } from "react";
import { ArrowLeft, Star, Plus, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const titles = {
    1: {
        id: 1,
        title: "Interestelar",
        originalTitle: "Interstellar",
        poster:
            "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        rating: "8.4",
        releaseDate: "2014",
        type: "Filme",
        genres: ["Ficção científica", "Drama", "Aventura"],
        duration: "2h 49min",
        synopsis:
            "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço em uma tentativa de garantir a sobrevivência da humanidade.",
    },

    5: {
        id: 5,
        title: "The Last of Us",
        originalTitle: "The Last of Us",
        poster:
            "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
        rating: "8.6",
        releaseDate: "2023",
        type: "Série",
        genres: ["Drama", "Aventura", "Ficção científica"],
        duration: "2 temporadas",
        synopsis:
            "Após uma pandemia devastar a sociedade, Joel recebe a missão de transportar Ellie, uma jovem que pode representar uma esperança para a humanidade.",
        seasons: [
            {
                number: 1,
                episodes: [
                    "Quando Estávamos Perdidos",
                    "Infectados",
                    "Muito, Muito Longe",
                    "Por Favor, Segure Minha Mão",
                    "Resistir e Sobreviver",
                    "Parentesco",
                    "Deixados para Trás",
                    "Quando Precisamos",
                    "Procure a Luz",
                ],
            },
        ],
    },
};

function Detalhes() {
    const { id } = useParams();

    const selectedMovie = titles[id] || titles[1];

    const [added, setAdded] = useState(() => {
        const savedMovies = localStorage.getItem("cineTrackMinhaLista");

        if (!savedMovies) {
            return false;
        }

        const movies = JSON.parse(savedMovies);

        return movies.some((item) => item.id === selectedMovie.id);
    });

    const [watchedEpisodes, setWatchedEpisodes] = useState([]);

    function handleAddToList() {
        const savedMovies = localStorage.getItem("cineTrackMinhaLista");

        const movies = savedMovies ? JSON.parse(savedMovies) : [];

        const alreadyExists = movies.some(
            (item) => item.id === selectedMovie.id,
        );

        if (alreadyExists) {
            setAdded(true);
            return;
        }

        const movieToSave = {
            ...selectedMovie,
            status: "Quero assistir",
        };

        const updatedMovies = [...movies, movieToSave];

        localStorage.setItem(
            "cineTrackMinhaLista",
            JSON.stringify(updatedMovies),
        );

        setAdded(true);
    }

    function toggleEpisode(episodeIndex) {
        setWatchedEpisodes((currentEpisodes) => {
            if (currentEpisodes.includes(episodeIndex)) {
                return currentEpisodes.filter(
                    (episode) => episode !== episodeIndex,
                );
            }

            return [...currentEpisodes, episodeIndex];
        });
    }

    const totalEpisodes =
        selectedMovie.seasons?.reduce(
            (total, season) => total + season.episodes.length,
            0,
        ) || 0;

    const progress =
        totalEpisodes > 0
            ? Math.round((watchedEpisodes.length / totalEpisodes) * 100)
            : 0;

    return (
        <main className="min-h-screen bg-[#0b1020]">
            <section className="mx-auto max-w-7xl px-6 py-10">
                <Link to="/explorar" className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"> <ArrowLeft size={18} /> Voltar para explorar </Link>

                <div className="grid gap-10 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
                    <div>
                        <img src={selectedMovie.poster} alt={`Pôster de ${selectedMovie.title}`} className="w-full max-w-[320px] rounded-xl object-cover shadow-2xl"/>
                    </div>

                    <div className="max-w-3xl">
                        <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-gray-400">
                            <span>{selectedMovie.type}</span>
                            <span>{selectedMovie.releaseDate}</span>
                            <span>{selectedMovie.duration}</span>
                        </div>

                        <h1 className="text-4xl font-bold text-white md:text-5xl">
                            {selectedMovie.title}
                        </h1>

                        <p className="mt-2 text-sm text-gray-500">
                            {selectedMovie.originalTitle}
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2 text-white">
                                <Star size={20} fill="currentColor" />
                                <span className="font-semibold">
                                    {selectedMovie.rating}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {selectedMovie.genres.map((genre) => (
                                    <span key={genre} className="rounded-md border border-white/10 px-3 py-1 text-xs text-gray-400" >
                                        {genre}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-xl font-semibold text-white">
                                Sinopse
                            </h2>

                            <p className="mt-3 leading-7 text-gray-400">
                                {selectedMovie.synopsis}
                            </p>
                        </div>

                        <button onClick={handleAddToList} disabled={added} className={`mt-8 flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${adde  ? "bg-white/10 text-gray-300" : "bg-indigo-500 text-white hover:bg-indigo-400" }`} >
                            {added ? <Check size={19} /> : <Plus size={19} />}
                            {added ? "Adicionado à minha lista" : "Adicionar à minha lista"}
                        </button>
                    </div>
                </div>

                {selectedMovie.type === "Série" && (
                    <section className="mt-16 border-t border-white/10 pt-10">
                        <div className="max-w-3xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
                                Acompanhamento
                            </p>

                            <h2 className="mt-2 text-2xl font-bold text-white">
                                Episódios
                            </h2>

                            <div className="mt-5">
                                <div className="mb-2 flex items-center justify-between text-sm">
                                    <span className="text-gray-400">
                                        {watchedEpisodes.length} de {totalEpisodes} episódios
                                    </span>

                                    <span className="font-semibold text-white">
                                        {progress}%
                                    </span>
                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                                    <div className="h-full rounded-full bg-indigo-500 transition-all" style={{ width: `${progress}%` }} />
                                </div>
                            </div>

                            <div className="mt-8 space-y-3">
                                {selectedMovie.seasons.map((season) => (
                                    <div key={season.number}>
                                        <h3 className="mb-4 text-lg font-semibold text-white">
                                            Temporada {season.number}
                                        </h3>

                                        <div className="space-y-2">
                                            {season.episodes.map((episode, index) => {
                                                const episodeId = `${season.number}-${index}`;

                                                const watched =
                                                    watchedEpisodes.includes(episodeId);

                                                return (
                                                    <button key={episodeId} onClick={() => toggleEpisode(episodeId)} className={`flex w-full items-center justify-between rounded-lg border px-4 py-4 text-left transition ${watched ? "border-indigo-400/30 bg-indigo-500/10" : "border-white/10 bg-[#12182a] hover:border-white/20" }`} >
                                                        <div>
                                                            <p className="text-xs text-gray-500">
                                                                Episódio {index + 1}
                                                            </p>

                                                            <p className="mt-1 text-sm font-medium text-white">
                                                                {episode}
                                                            </p>
                                                        </div>

                                                        {watched && (
                                                            <Check size={19} className="shrink-0 text-indigo-400"/>  )}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </section>
        </main>
    );
}

export default Detalhes;
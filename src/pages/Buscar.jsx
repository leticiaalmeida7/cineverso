import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";

const movies = [
    {
        id: 1,
        title: "Interestelar",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        rating: "8.4",
        type: "Filme",
    },
    {
        id: 2,
        title: "Duna: Parte Dois",
        poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        rating: "8.2",
        type: "Filme",
    },
];

function Buscar() {
    const [search, setSearch] = useState("");
    const [searched, setSearched] = useState(false);

    function handleSearch() {
        setSearched(true);
    }

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase()),
    );

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

                <SearchBar
                    value={search}
                    onChange={setSearch}
                    onSearch={handleSearch}
                />

                <div className="mt-12">
                    {!searched ? (
                        <div className="border-t border-white/10 pt-8">
                            <p className="text-sm text-gray-500">
                                Digite um título para começar sua busca.
                            </p>
                        </div>
                    ) : filteredMovies.length === 0 ? (
                        <div className="border-t border-white/10 pt-8">
                            <h2 className="text-xl font-semibold text-white">
                                Nenhum resultado encontrado
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">
                                Tente pesquisar usando outro nome.
                            </p>
                        </div>
                    ) : (
                        <>
                            <h2 className="mb-6 text-2xl font-bold text-white">
                                Resultados
                            </h2>

                            <MovieGrid movies={filteredMovies} />
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Buscar;
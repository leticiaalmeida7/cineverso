import MovieGrid from "../components/MovieGrid";

const movies = [
    {
        id: 7,
        title: "Interestelar",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        rating: "8.4",
        type: "Filme",
    },
    {
        id: 8,
        title: "Duna: Parte Dois",
        poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        rating: "8.2",
        type: "Filme",
    },
    {
        id: 9,
        title: "Oppenheimer",
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        rating: "8.1",
        type: "Filme",
    },
    {
        id: 10,
        title: "A Origem",
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        rating: "8.4",
        type: "Filme",
    },
    {
        id: 11,
        title: "The Last of Us",
        poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
        rating: "8.6",
        type: "Série",
    },
    {
        id: 12,
        title: "Stranger Things",
        poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        rating: "8.6",
        type: "Série",
    },
];

function Explorar() {
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
                    <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#0b1020]">
                        Todos
                    </button>

                    <button className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 transition hover:border-white/20 hover:text-white">
                        Filmes
                    </button>

                    <button className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 transition hover:border-white/20 hover:text-white">
                        Séries
                    </button>
                </div>

                <MovieGrid movies={movies} />
            </section>
        </main>
    );
}

export default Explorar;
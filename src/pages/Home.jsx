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
    {
        id: 3,
        title: "Oppenheimer",
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        rating: "8.1",
        type: "Filme",
    },
    {
        id: 4,
        title: "A Origem",
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        rating: "8.4",
        type: "Filme",
    },
    {
        id: 5,
        title: "The Last of Us",
        poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
        rating: "8.6",
        type: "Série",
    },
    {
        id: 6,
        title: "Stranger Things",
        poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        rating: "8.6",
        type: "Série",
    },
];

function Home() {
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

                    <MovieGrid movies={movies} />
                </section>
            </section>
        </main>
    );
}

export default Home;
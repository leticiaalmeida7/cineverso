import { Star } from "lucide-react";
import { Link } from "react-router-dom";

function MovieCard({ id, title, poster, rating, type }) {
    return (
        <Link to={`/titulo/${id}`} className="group block w-40 shrink-0 sm:w-45" >
            <div className="relative overflow-hidden rounded-xl bg-[#171d31]">
                <img src={poster} alt={`Pôster de ${title}`} className="aspect-2/3 w-full object-cover transition duration-300 group-hover:scale-105" />

                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
            </div>

            <div className="mt-3">
                <h3 className="truncate text-sm font-semibold text-white">
                    {title}
                </h3>

                <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                        <Star size={13} fill="currentColor" />
                        {rating}
                    </span>

                    <span>•</span>

                    <span>{type}</span>
                </div>
            </div>
        </Link>
    );
}

export default MovieCard;
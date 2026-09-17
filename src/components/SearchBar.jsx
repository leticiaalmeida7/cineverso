import { Search } from "lucide-react";

function SearchBar({ value, onChange, onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSearch();
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-2xl gap-3">
      <div className="flex flex-1 items-center gap-3 rounded-lg border border-white/10 bg-[#12182a] px-4">
        <Search size={20} className="shrink-0 text-gray-500" />
        <input type="text" value={value} onChange={(event) => onChange(event.target.value)} placeholder="Digite o nome de um filme ou série..." className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-600" />
      </div>
      <button type="submit" className="rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
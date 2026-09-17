import { NavLink } from "react-router-dom";
import { Film, Search } from "lucide-react";

function Header() {
  return (
    <header className="border-b border-white/10 bg-[#0b1020]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2">
          <Film size={26} strokeWidth={2} />
          <span className="font-['Space_Grotesk'] text-xl font-bold">CineVerso</span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={({ isActive }) => isActive ? "font-semibold text-white" : "text-gray-400 transition hover:text-white"}>
            Início
          </NavLink>

          <NavLink to="/explorar" className={({ isActive }) => isActive ? "font-semibold text-white" : "text-gray-400 transition hover:text-white"}>
            Explorar
          </NavLink>

          <NavLink to="/minha-lista" className={({ isActive }) => isActive ? "font-semibold text-white" : "text-gray-400 transition hover:text-white"}>
            Minha Lista
          </NavLink>
        </nav>

        <NavLink to="/buscar" className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-gray-300 transition hover:border-white/20 hover:text-white">
          <Search size={19} />
          <span className="hidden sm:inline">Buscar</span>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
import { useState } from "react";

function StatusButton({ status, onChange }) {
  const [open, setOpen] = useState(false);

  const statuses = ["Quero assistir", "Assistindo", "Concluído"];

  function handleSelect(newStatus) {
    onChange(newStatus);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="rounded-lg border border-white/10 bg-[#12182a] px-3 py-2 text-sm text-gray-300 transition hover:border-white/20 hover:text-white">
        {status}
      </button>

      {open && (
        <div className="absolute left-0 top-full z-10 mt-2 w-44 overflow-hidden rounded-lg border border-white/10 bg-[#12182a] shadow-xl">
          {statuses.map((item) => (
            <button key={item} type="button" onClick={() => handleSelect(item)} className={`block w-full px-4 py-3 text-left text-sm transition hover:bg-white/5 ${ item === status ? "text-white" : "text-gray-400"  }`} >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default StatusButton;
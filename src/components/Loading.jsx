function Loading({ message = "Carregando..." }) {
  return (
    <div className="border-t border-white/10 pt-8">
      <p className="text-sm text-gray-400">
        {message}
      </p>
    </div>
  );
}

export default Loading;
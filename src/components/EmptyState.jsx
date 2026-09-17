function EmptyState({ message }) {
  return (
    <div className="border-t border-white/10 pt-8">
      <p className="text-sm text-gray-500">
        {message}
      </p>
    </div>
  );
}

export default EmptyState;
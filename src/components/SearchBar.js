function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Books..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}

export default SearchBar;

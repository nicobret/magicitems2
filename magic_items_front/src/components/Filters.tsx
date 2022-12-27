interface FiltersProps {
  query: string;
  setQuery: (query: string) => void;
  rarityFilter: string;
  setRarityFilter: (rarityFilter: string) => void;
}

const FiltersComponent = ({
  query,
  setQuery,
  rarityFilter,
  setRarityFilter,
}) => {
  const rarityOptions = [
    "Rarity",
    "common",
    "uncommon",
    "rare",
    "very rare",
    "legendary",
  ];

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-xl bg-white bg-opacity-10 w-full px-4 py-2 text-emerald-50 mb-2"
        placeholder="Search"
      />
      <select
        value={rarityFilter}
        onChange={(e) => setRarityFilter(e.target.value)}
        className="rounded-xl bg-white bg-opacity-10 w-full px-4 py-2 text-emerald-50"
      >
        {rarityOptions.map((rarity) => (
          <option key={rarity} value={rarity}>
            {rarity}
          </option>
        ))}
      </select>
    </>
  );
};

export default FiltersComponent;

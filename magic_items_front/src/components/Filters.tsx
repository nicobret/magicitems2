import { rarityOptions } from "../utils";

interface FiltersProps {
  query: string;
  setQuery: (query: string) => void;
  rarityFilter: string;
  setRarityFilter: (rarityFilter: string) => void;
}

function FiltersComponent(props: FiltersProps): JSX.Element {
  return (
    <div className="flex gap-4">
      <input
        type="text"
        value={props.query}
        onChange={(e) => props.setQuery(e.target.value)}
        className="w-full rounded-xl bg-white bg-opacity-10 px-4 py-2 text-emerald-50 focus:animate-pulse focus:border-emerald-500"
        placeholder="Search"
      />
      <select
        value={props.rarityFilter}
        onChange={(e) => props.setRarityFilter(e.target.value)}
        className="w-full rounded-xl bg-white bg-opacity-10 px-4 py-2 text-emerald-50"
      >
        {rarityOptions.map((rarity) => (
          <option key={rarity} value={rarity}>
            {rarity}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FiltersComponent;

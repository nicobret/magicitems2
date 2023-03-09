import { useEffect, useState } from "react";
import FiltersComponent from "./components/Filters";
import Header from "./components/Header";
import ItemDetailComponent from "./components/ItemDetail";
import ItemListComponent from "./components/ItemList";
import { ItemDetailType, ItemListType } from "./types/itemTypes";
import { fetchItemList } from "./utils";

function App() {
  const [itemList, setItemList] = useState<ItemListType>([]);
  const [itemDetail, setItemDetail] = useState<ItemDetailType>();
  const [query, setQuery] = useState<string>("");
  const [rarityFilter, setRarityFilter] = useState<string>("");
  const filteredItemList = itemList.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (itemList.length) return;
    fetchItemList().then((data) => setItemList(data));
  }, []);

  return (
    <div className="mx-auto w-[1000px]">
      <Header />
      <main className="space-y-4 rounded-xl bg-opacity-30 bg-gradient-to-br from-emerald-900 p-4">
        <FiltersComponent
          query={query}
          setQuery={setQuery}
          rarityFilter={rarityFilter}
          setRarityFilter={setRarityFilter}
        />
        <div className="grid grid-cols-4 gap-4">
          {itemList.length ? (
            <ItemListComponent
              itemList={itemList}
              selectedItem={itemDetail?.name}
              setItemDetail={setItemDetail}
              query={query}
            />
          ) : (
            <p className="animate-pulse">Chargement</p>
          )}
          <div className="col-span-3">
            {itemDetail ? (
              <ItemDetailComponent itemDetail={itemDetail} />
            ) : (
              <p>Sélectionnez un objet dans la liste.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

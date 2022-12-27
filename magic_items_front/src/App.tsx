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

  useEffect(() => {
    if (itemList.length) return;
    fetchItemList().then((data) => setItemList(data));
  }, []);

  return (
    <div className="mx-32">
      <Header />
      <main className="bg-emerald-900 bg-opacity-30 p-3 rounded-xl flex gap-3">
          <div className="w-48">
            <FiltersComponent query={query} setQuery={setQuery} rarityFilter={rarityFilter} setRarityFilter={setRarityFilter} />
          </div>
          <div className="w-48">
          {itemList.length ? (
            <ItemListComponent
            itemList={itemList}
            selectedItem={itemDetail?.name}
            setItemDetail={setItemDetail}
            query={query}
            />
            ) : (
              <p>Chargement</p>
              )}
          </div>
          <div className="">
          {itemDetail ? (
            <ItemDetailComponent itemDetail={itemDetail} />
            ) : (
              <p>Sélectionnez un objet dans la liste.</p>
              )}
          </div>
      </main>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import ItemDetailComponent from "./components/ItemDetail";
import ItemListComponent from "./components/ItemList";
import { ItemDetailType, ItemListType } from "./types/itemTypes";
import { fetchItemList } from "./utils";

function App() {
  const [itemList, setItemList] = useState<ItemListType>([]);
  console.log("🚀 ~ file: App.tsx:9 ~ App ~ itemList", itemList);
  const [itemDetail, setItemDetail] = useState<ItemDetailType>();
  console.log("🚀 ~ file: App.tsx:11 ~ App ~ itemDetail", itemDetail);

  useEffect(() => {
    if (itemList.length) return;
    fetchItemList().then((data) => setItemList(data));
  }, []);

  return (
    <main className="my-4 mx-auto w-[1200px] rounded-xl bg-orange-100 p-4">
      <h1 className="">Magic items</h1>
      <div className="flex w-full">
        {itemList.length ? (
          <ItemListComponent
            itemList={itemList}
            selectedItem={itemDetail?.name}
            setItemDetail={setItemDetail}
          />
        ) : (
          <p>Chargement</p>
        )}
        {itemDetail ? (
          <ItemDetailComponent itemDetail={itemDetail} />
        ) : (
          <p>Sélectionnez un objet dans la liste.</p>
        )}
      </div>
    </main>
  );
}

export default App;

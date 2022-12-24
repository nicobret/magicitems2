import React, { FC, SetStateAction, useState } from "react";
import { ItemDetailType, ItemListType } from "../types/itemTypes";
import { fetchItemDetail } from "../utils";
import ItemButtonComponent from "./ItemButton";

interface ItemListProps {
  itemList: ItemListType;
  selectedItem: string | undefined;
  setItemDetail: React.Dispatch<SetStateAction<ItemDetailType | undefined>>;
}

const ItemListComponent: FC<ItemListProps> = ({
  itemList,
  selectedItem,
  setItemDetail,
}) => {
  const [query, setQuery] = useState<string>("");
  const filteredItemList = itemList.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleClick = async (item: {
    index: string;
    name: string;
    url: string;
  }) => {
    if (item.name === selectedItem) return setItemDetail(undefined);
    const res = await fetchItemDetail(item.url);
    return setItemDetail(res);
  };

  return (
    <div className="m-2 h-screen w-1/3">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="m-2 w-full rounded border-2 border-orange-200 p-2"
        placeholder="Rechercher un objet"
      />
      <ul className="h-full overflow-auto">
        {itemList.length ? (
          filteredItemList.map((item) => (
            <ItemButtonComponent
              key={item.index}
              selectedItem={selectedItem}
              item={item}
              handleClick={handleClick}
            />
          ))
        ) : (
          <p>Loading</p>
        )}
      </ul>
    </div>
  );
};

export default ItemListComponent;

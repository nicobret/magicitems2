import React, { FC, SetStateAction, useState } from "react";
import { ItemDetailType, ItemListType } from "../types/itemTypes";
import { fetchItemDetail } from "../utils";
import ItemButtonComponent from "./ItemButton";

interface ItemListProps {
  itemList: ItemListType;
  selectedItem: string | undefined;
  setItemDetail: React.Dispatch<SetStateAction<ItemDetailType | undefined>>;
  query: string;
}

const ItemListComponent: FC<ItemListProps> = ({
  itemList,
  selectedItem,
  setItemDetail,
  query,
}) => {
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
    console.log("🚀 ~ file: ItemList.tsx:30 ~ res:", res)
    return setItemDetail(res);
  };

  return (
    <ul className="h-full overflow-auto rounded-xl bg-gradient-to-br from-emerald-900 p-4">
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
  );
};

export default ItemListComponent;

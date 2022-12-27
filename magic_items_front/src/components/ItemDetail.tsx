import React, { FC } from "react";
import { ItemDetailType } from "../types/itemTypes";

interface ItemDetailProps {
  itemDetail: ItemDetailType;
}

const ItemDetailComponent: FC<ItemDetailProps> = ({ itemDetail }) => {
  return (
    <div className="overflow-auto rounded-xl bg-white opacity-70 w-full p-4 text-emerald-900">
      {itemDetail && (
        <div>
          <h3 className="text-2xl font-bold">{itemDetail.name}</h3>
          {itemDetail.desc.map((desc: string) => (
            <p key={desc} className="my-4 italic">
              {desc}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemDetailComponent;

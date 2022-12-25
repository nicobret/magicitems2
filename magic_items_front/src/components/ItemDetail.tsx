import React, { FC } from "react";
import { ItemDetailType } from "../types/itemTypes";

interface ItemDetailProps {
  itemDetail: ItemDetailType;
}

const ItemDetailComponent: FC<ItemDetailProps> = ({ itemDetail }) => {
  return (
    <div className="m-2 h-screen w-2/3 overflow-auto rounded-xl bg-orange-50 p-4">
      {itemDetail && (
        <div>
          <h3 className="font-serif text-2xl">{itemDetail.name}</h3>
          {itemDetail.desc.map((desc: string) => (
            <p key={desc} className="my-2 font-serif text-lg">
              {desc}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemDetailComponent;

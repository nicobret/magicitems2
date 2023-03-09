import React, { FC } from "react";
import { ItemDetailType } from "../types/itemTypes";

interface ItemDetailProps {
  itemDetail: ItemDetailType;
}

function ItemDetailComponent(props: ItemDetailProps): JSX.Element {
  return (
    <div className="overflow-auto rounded-xl bg-white p-4 text-emerald-900 opacity-60">
      {props.itemDetail && (
        <div>
          <h3 className="text-2xl font-bold">{props.itemDetail.name}</h3>
          {props.itemDetail.desc.map((desc: string) => (
            <p key={desc} className="my-4 italic">
              {desc}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemDetailComponent;

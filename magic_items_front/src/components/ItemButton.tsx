import React, { FC } from "react";

interface ItemButtonProps {
  selectedItem: string | undefined;
  item: { index: string; name: string; url: string };
  handleClick: (item: { index: string; name: string; url: string }) => void;
}

const ItemButtonComponent: FC<ItemButtonProps> = ({
  selectedItem,
  item,
  handleClick,
}) => {
  const selected = selectedItem === item.name;
  return (
    <li
      key={item.index}
      className={`${
        selected && "font-bold"
      } m-2 cursor-pointer truncate rounded border-2 ${
        selected ? "border-orange-500" : "border-orange-50"
      } bg-orange-50 p-2 text-orange-500 hover:border-orange-500 hover:bg-orange-500 hover:text-orange-50`}
      onClick={() => handleClick(item)}
    >
      {item.name}
    </li>
  );
};

export default ItemButtonComponent;

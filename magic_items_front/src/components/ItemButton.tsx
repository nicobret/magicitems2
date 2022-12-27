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
        selected && "font-bold ml-4"
      } m-2 cursor-pointer truncate text-emerald-50 italic hover:ml-4 transition-all duration-300 ease-in-out`}
      onClick={() => handleClick(item)}
    >
      {/* {selected && " ◊ "} */}
      {item.name}
    </li>
  );
};

export default ItemButtonComponent;

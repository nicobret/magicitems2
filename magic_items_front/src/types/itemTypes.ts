type ItemListType = {
  index: string;
  name: string;
  url: string;
}[];

type ItemDetailType = {
  index: string;
  name: string;
  equipment_category: {
    index: string;
    name: string;
    url: string;
  };
  rarity: {
    name: string;
  };
  variants: string[];
  variant: boolean;
  desc: string[];
  url: string;
};

export type { ItemListType, ItemDetailType };

import { ItemDetailType, ItemListType } from "./types/itemTypes";

export const baseURL = "https://www.dnd5eapi.co";

export async function fetchItemList(): Promise<ItemListType> {
  try {
    const res = await fetch(`${baseURL}/api/magic-items/`);
    const data = await res.json();
    return data.results;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function fetchItemDetail(url: string): Promise<ItemDetailType> {
  try {
    const res = await fetch(baseURL + url);
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
    return {
      index: "",
      name: "",
      equipment_category: {
        index: "",
        name: "",
        url: "",
      },
      rarity: {
        name: "",
      },
      variants: [],
      variant: false,
      desc: [],
      url: "",
    };
  }
}

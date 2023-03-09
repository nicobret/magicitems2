import { createClient } from "@supabase/supabase-js";
import { ItemDetailType, ItemListType } from "./types/itemTypes";

// export const baseURL = "https://www.dnd5eapi.co";

// export async function fetchItemList(): Promise<ItemListType> {
//   try {
//     const res = await fetch(`${baseURL}/api/magic-items/`);
//     if (!res.ok) {
//       return [] as ItemListType;
//     }
//     const data = await res.json();
//     return data.results;
//   } catch (e) {
//     console.error(e);
//     return [] as ItemListType;
//   }
// }

// export async function fetchItemDetail(url: string): Promise<ItemDetailType> {
//   try {
//     const res = await fetch(baseURL + url);
//     if (!res.ok) {
//       return {} as ItemDetailType;
//     }
//     const data = await res.json();
//     return data;
//   } catch (e) {
//     console.error(e);
//     return {} as ItemDetailType;
//   }
// }

export const rarityOptions = [
  "Rarity",
  "common",
  "uncommon",
  "rare",
  "very rare",
  "legendary",
];

const supabaseurl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseurl, supabaseKey);

export async function fetchItemList() {
  const res = await supabase.from("items").select("*");
  console.log("🚀 ~ file: utils.ts:50 ~ fetchItemList ~ res:", res)
  if (res.error) {
    console.error(res.error);
    return [];
  }
  return res.data;
}

export async function fetchItemDetail(id: string) {
  const res = await supabase.from("items").select("*").eq("id", id);
  if (res.error) {
    console.error(res.error);
    return {} as ItemDetailType;
  }
  return res.data[0];
}
import { atom, selector } from "recoil";
import KorbanJSON from "../template/Pengajuan/Data/FormKorban.json";
import { kekerasanListState } from "./api/apiKekerasan";
import { replaceItemAtIndex } from "../utils/arraySlice";

// export const useFormList = (formOri: any, data: any, id: string) => {
//   const formOris = formOri.slice()
//   const index = formOris.findIndex((item: any) => item.id == id)
//   console.log(index)
// }

export const formKorban = atom({
  key: "formKorban",
  default: KorbanJSON,
});

export const formKorbanSelector = selector({
  key: "formKorbanSelector",
  get: ({ get }) => {
    const korban = get(formKorban).slice();
    const kekerasan = get(kekerasanListState).slice();
    const index = korban.findIndex((item: any) => item.id == "id_kategori");
    if (index != -1) {
      const newData = kekerasan.map((items: any) =>
        Object.assign({}, { label: items.kategori, value: items.id })
      );
      const newArr = { ...korban[index], dataOption: newData };
      const newList = replaceItemAtIndex(korban, index, newArr);
      return newList;
    }
    return [];
  },
});

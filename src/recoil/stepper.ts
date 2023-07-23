import { selector } from "recoil";
import dataForm from "../template/Pengajuan/Data/FormLaporan.json";

// export const formLaporan = atom({
//   key: "formLaporan",
//   default: [] as any[],
// });

// export const formKorban = atom({
//   key: "formKorban",
//   default: [] as any[],
// });

// export const formPelaku = atom({
//   key: "formPelaku",
//   default: [] as any[],
// });

export const laporanForm = selector({
  key: "laporanForm",
  get: () => {
    const listFormLaporan = [...dataForm];
    let required: string[] = [];
    listFormLaporan.forEach((item) => {
      if (item.required) required.push(item.id);
    });
    return { listFormLaporan, required };
  },
});

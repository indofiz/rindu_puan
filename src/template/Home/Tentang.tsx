// import { MouseEvent } from 'react'
import ListAbout from "../../components/atoms/Home/Tentang/List";
import { useRecoilValue } from "recoil";
import { kekerasanListState } from "../../recoil/api/apiKekerasan";
import { KekerasanFace } from "../../recoil/types/kekerasan";
import React from "react";

const Tentang = React.forwardRef<HTMLDivElement>((_, ref) => {
  const kekerasan = useRecoilValue(kekerasanListState);

  const mapKekerasan =
    kekerasan && kekerasan.length
      ? kekerasan.map((item: KekerasanFace) => (
          <ListAbout key={item.id} item={item} />
        ))
      : null;
  return (
    <div
      className="mt-8 px-6 md:mt-24 md:container md:mx-auto md:px-4 lg:px-12"
      ref={ref}
    >
      <div className="flex flex-col">
        <h2 className="font-medium text-xl mb-2 md:mb-4 text-black md:text-4xl">
          Tentang
        </h2>
        <p className="text-text text-sm mr-6 md:mr-8 md:max-w-lg md:text-base">
          Solusi perlindungan kekerasan kepada anak dan perempuan di kota
          pangkalpinang. Ajukan jika anda mendapatkan kekerasan ini.
        </p>
      </div>
      <div className="w-full overflow-x-auto py-3 scrollbar-thin scrollbar-thumb-primary scrollbar-track-primary/10">
        <div className="mt-5 min-w-[600px] grid grid-cols-2 gap-4">
          {mapKekerasan}
        </div>
      </div>
    </div>
  );
});

export default Tentang;

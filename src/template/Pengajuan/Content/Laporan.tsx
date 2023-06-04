import InputCondition from "../../../components/organism/Form/InputCondition";
import metaDataPengajuan from "../Data/MetaDataPengajuan";
import Template from "./Template";
import { useRecoilValue } from "recoil";
import { laporanForm } from "../../../recoil/stepper";

const Laporan = () => {
  const { handleChange, handleError, data, dataError } = metaDataPengajuan();
  const { listFormLaporan } = useRecoilValue(laporanForm);

  return (
    <Template>
      <div className="w-full flex flex-col gap-3">
        {listFormLaporan.map((item: any, index: number) => (
          <InputCondition
            tabIndex={index}
            key={item.id}
            item={item}
            onChange={handleChange}
            handleError={handleError}
            errorMessage={dataError[item.id]}
            data={data[item.id]}
          />
        ))}
      </div>
    </Template>
  );
};

export default Laporan;

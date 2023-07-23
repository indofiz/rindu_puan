import logo from "../../assets/logo.png";
import Button from "../../components/atoms/Button";
import Gradient from "../../components/atoms/Gradient";

const Info = () => {
  return (
    <div className="mx-6 mt-12 md:mt-24 md:container md:mx-auto md:px-4 lg:px-12">
      <div className="bg-primary px-6 py-8 pb-12 md:px-12 md:py-8 grid grid-cols-12 place-items-center gap-4 md:gap-12 rounded-xl relative overflow-hidden">
        <Gradient
          rotate="-rotate-90"
          className="absolute md:-bottom-40 md:-right-5 -bottom-52 -right-24 h-72 opacity-80"
        />
        <div className="col-span-3">
          <img src={logo} className="w-28 md:w-full" alt="" />
        </div>
        <div className="flex flex-col justify-start gap-2 col-span-9 md:mr-28 relative z-0">
          <h4 className="text-white text-2xl leading-6 md:text-4xl md:tracking-wide md:font-normal font_bebas">
            DINAS PEMBERDAYAAN PEREMPUAN, PERLINDUNGAN ANAK KOTA PANGKALPINANG
          </h4>
          <p className="text-white text-xs md:text-lg">
            MEMBERIKAN RUANG INFORMASI PERLINDUNGAN TERHADAP WANITA DAN ANAK
          </p>
          <div className="mt-2 md:mt-4">
            <Button
              label="Ajukan Perlindungan"
              to="/pengajuan"
              isLink
              variant="noBorder"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

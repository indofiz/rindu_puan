import Footer from "../template/Footer";
import Header from "../template/Pengajuan/Header";
import StepperPengajuan from "../template/Pengajuan/StepperPengajuan";

const Pengajuan = () => {
  return (
    <div className="bg-cream">
      <div className="max-w-lg bg-background mx-auto">
        <Header />
        <StepperPengajuan />
        <Footer />
      </div>
    </div>
  );
};

export default Pengajuan;

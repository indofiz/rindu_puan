import logo from "../../assets/icon/logo_2.png";
import menu from "../../assets/icon/menu_pink.svg";
import close from "../../assets/icon/close_pink.svg";
import { Link, NavLink } from "react-router-dom";
import { cn } from "../../utils/classMerge";

interface NavbarProps {
  toTentang: () => void;
  toAlur: () => void;
  toArtikel: () => void;
  setisSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebar: boolean;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <div className="flex px-6 lg:px-12 py-2 md:py-6 lg:py-8 justify-between items-center md:container md:mx-auto">
      <Link to="/" relative="path">
        <img src={logo} className="mt-0 h-12" />
      </Link>
      <button
        className="md:hidden"
        onClick={() => props.setisSidebar((prev) => !prev)}
      >
        <img src={props.isSidebar ? close : menu} />
      </button>
      <nav
        className={cn(
          "fixed w-3/4 md:static md:w-auto bottom-0 left-0 top-0 flex justify-center z-40 border-r-4 border-black bg-primary md:bg-transparent md:border-r-0 items-center transition-all",
          props.isSidebar
            ? "translate-x-0"
            : "-translate-x-[calc(100%+16px)] md:translate-x-0"
        )}
      >
        <ul className="flex gap-12 flex-col md:flex-row text-white md:text-gray-600 uppercase md:text-sm md:gap-8 font-normal px-5">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
              to="/"
            >
              Beranda
            </NavLink>
          </li>
          <li>
            <button onClick={props.toTentang} className="md:hover:text-primary">
              Tentang
            </button>
          </li>
          <li>
            <button onClick={props.toAlur} className="md:hover:text-primary">
              Alur Pengaduan
            </button>
          </li>
          <li>
            <button onClick={props.toArtikel} className="md:hover:text-primary">
              Artikel
            </button>
          </li>
          <li>
            <NavLink to="/" className="md:hover:text-primary">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="md:hover:text-primary">
              Hubungi Kami
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="md:hover:text-primary">
              Panduan
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

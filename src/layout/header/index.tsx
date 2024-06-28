import Image from "next/image";
import { mainLogo, menuIcon } from "@/assets";

const Header = () => {
  return (
    <div className="py-4">
      <div className="container mx-auto px-5">
        <div className="flex justify-between">
          <Image src={mainLogo} alt="AlifShop Logo" width={104} height={30} />
          <button className="flex justify-center items-center gap-2 font-medium py-2 px-3 bg-color-first transition duration-200 rounded-lg border-2  disabled:bg-grey-100">
            <Image src={menuIcon} alt="Menu icon" />
            <span className="hidden lg:block text-sm leading-5">
              Tovarlar katalogi
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

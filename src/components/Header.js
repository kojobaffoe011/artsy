import React from "react";
import search from "../assets/icons/search.svg";
import cart from "../assets/icons/cart.svg";
import notif from "../assets/icons/notif.svg";
import dot from "../assets/icons/dot.svg";

const Header = () => {
  return (
    <div className="lg:pl-[183px] md:pl-[16px] lg:pr-[130px] md:pr-[16px] w-full mx-auto flex justify-between mt-8 mb-8 items-center ">
      <div className="flex items-center">
        <p className="font-stix font-extrabold text-2xl">ARTSY.</p>
      </div>
      <div className="flex space-x-8">
        <p className="hover:underline font-bold">Home</p>
        <p className="hover:underline font-light">Marketplace</p>
        <p className="hover:underline font-light">Auctions</p>
        <p className="hover:underline font-light">Drop</p>
      </div>
      <div className="flex space-x-8 items-center">
        <div>
          <img src={search} alt="" />
        </div>
        <div className="flex  relative">
          <img src={cart} alt="" />
          <div className="">
            <img src={dot} alt="" />
          </div>
        </div>
        <div>
          <img src={notif} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

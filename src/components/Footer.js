import React from "react";
import mail from "../assets/icons/mail.svg";
import pin from "../assets/icons/pin.svg";

const Footer = () => {
  return (
    <div className="flex flex-col mt-auto max-w-[1440px] mx-auto ">
      <div className="">
        <div className="border-black border flex flex-col items-center justify-center py-[62px] space-y-[34px]">
          <div>
            <p className="font-baker text-[24px]">NEWSLETTER</p>
          </div>
          <div>
            <p className="text-[26px]">
              Subscribe to get daily updates on new drops & exciting deals
            </p>
          </div>
          <div className=" flex space-x-[23px] w-full justify-center">
            <input
              className="border border-black pl-[58px] w-1/3 placeholder:font-baker"
              placeholder="ENTER YOUR EMAIL"
            />
            <button className="bg-[#272727] pt-[20px] pb-[20px] pl-[45px] pr-[45px]">
              <p className="text-white font-baker">SUBSCRIBE</p>
            </button>
          </div>
        </div>
      </div>
      <div className="  grid lg:grid-cols-4 md:grid-cols-1 pl-[164px] pt-[60px] pb-[44px] pr-[100px]">
        <div className=" flex items-center justify-center">
          <p className="font-stix font-bold text-[48px]">ARTSY.</p>
        </div>
        <div className=" flex flex-col space-y-[33px]">
          <p className="text-[20px] font-light">Home</p>
          <p className="text-[20px] font-light">Marketplace</p>
          <p className="text-[20px] font-light">Auctions</p>
          <p className="text-[20px] font-light">Drops</p>
        </div>
        <div className=" flex flex-col space-y-[33px]">
          <p className="text-[20px] font-light">Blog</p>
          <p className="text-[20px] font-light">Wallets</p>
          <p className="text-[20px] font-light">Rates</p>
          <p className="text-[20px] font-light">High bids</p>
        </div>
        <div className=" flex flex-col space-y-[50px]">
          <div className="flex space-x-[20px]">
            <img src={mail} />
            <p className="text-[20px] font-light">artsystudios@gmail.com</p>
          </div>
          <div className="flex space-x-[20px]">
            <img src={pin} />
            <p className="text-[20px] font-light">Lagos, Nigeria.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-8">
        <p className="text-[#333333] opacity-[0.5] text-[18px] font-bold">
          Artsystudios © 2022. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

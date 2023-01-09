import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import firstCaro from "../assets/images/caro1.png";
import secondCaro from "../assets/images/caro2.png";
import thirdCaro from "../assets/images/caro3.png";
import fourthCaro from "../assets/images/caro4.png";
import fifthCaro from "../assets/images/caro5.png";
import egypt1 from "../assets/images/egypt1.png";
import egypt2 from "../assets/images/egypt2.png";
import egypt3 from "../assets/images/egypt3.png";
import avatars from "../assets/images/avatars.svg";
import forward from "../assets/icons/forward.svg";

const Carousel = () => {
  return (
    <div className="flex space-x-[20px] mt-[80px] mb-[100px]">
      <div className="flex items-center mt-[50px]">
        <img src={firstCaro} alt="" />
      </div>
      <div className="mt-[50px]">
        <img src={secondCaro} alt="" />
      </div>
      <div>
        <img src={thirdCaro} alt="" />
      </div>
      <div className="mt-[50px]">
        <img src={fourthCaro} alt="" />
      </div>
      <div className="mt-[55px]">
        <img src={fifthCaro} alt="" />
      </div>
    </div>
  );
};

const FeaturedProductsImages = [
  {
    image: egypt1,
  },
  {
    image: egypt2,
  },
  {
    image: egypt3,
  },
];

const FeaturedProducts = () => {
  return (
    <div className="px-[120px] flex flex-col">
      <div className="mb-[37px]">
        <p className="text-[48px]">Featured products</p>
      </div>
      <div className="flex pt-[61px] pb-[74px] border-t border-[#333333]">
        <div>
          <img src={egypt1} alt="" />
        </div>
        <div className="flex flex-col ml-[37px]">
          <div className="mb-[38px]">
            <p className="font-stix font-bold text-[40px]">
              The Boolean Egyptian
            </p>
          </div>
          <div className="mb-[30px]">
            <p className="font-light text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit ut aliquam, purus sit amet luctus venenatis, <br />
              lectus magna fringilla urna, porttitor rhoncus dolor <br />
              pur
            </p>
          </div>
          <div className="mb-[38px] flex items-center">
            <div className="flex w-full">
              <img src={avatars} alt="" />
            </div>
            <div className="flex w-full items-center ml-[20px] text-[20px] justify-end">
              <p className="whitespace-nowrap">64 major creators</p>
            </div>
            <div className="flex items-center w-full justify-end">
              <img src={forward} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-[1440px] mx-auto">
      <Header />
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <p className="font-bold font-clash lg:text-[80px] text-center">
            Photography is poetry & <br />
            beautiful untold stories
          </p>
        </div>
        <div className="flex items-center justify-center mt-4">
          <p className="font-light lg:text-[28px] text-center">
            Flip through more than 10,000 vintage shots, old photograghs,
            historic <br /> images and captures seamlessly in one place.
            Register to get top access.
          </p>
        </div>
        <Carousel />
        <FeaturedProducts />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;

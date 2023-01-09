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
import arrow from "../assets/icons/arrow.svg";
import left from "../assets/icons/left.svg";
import right from "../assets/icons/right.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
        <div className="">
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
      <div className="flex pt-[61px] pb-[74px] justify-between border-t border-[#333333]">
        <div className="flex flex-col mr-[37px]">
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
        <div>
          <img src={egypt2} alt="" />
        </div>
      </div>
      <div className="flex pt-[61px] pb-[74px] border-t border-[#333333]">
        <div>
          <img src={egypt3} alt="" />
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

const UpcomingAuctions = () => {
  return (
    <div className="px-[120px] border px-[120px] flex flex-col bg-upcome">
      <div className="mt-4 mb-8">
        <div className="mb-2">
          <p className="text-[40px] text-white">
            See Upcoming Auctions and Exhibitions
          </p>
        </div>
        <div className="mb-4 ml-4 max-w-[667px] px-[20px]">
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="bg-[url('/src/assets/images/auction.png')] bg-cover bg-no-repeat w-full h-[70vh] mb-4">
        <div className="h-[70vh] bg-black bg-opacity-80 flex w-full relative px-[38px] pb-[60px] flex justify-between">
          <div className="flex flex-col justify-end">
            <div className="flex">
              <div className="flex items-center mr-4">
                <p className="text-[#E1E1E1] text-[67.6122px] font-belle">01</p>
              </div>
              <div className="flex flex-col justify-end">
                <div className="mb-4">
                  <p className="text-white font-belle text-[29.2313px]">
                    MONALISA REDEFINED <br />
                    IN STYLE.
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-white font-pop">
                    Start on : 08:00 GTS . Monday{" "}
                  </p>
                </div>
                <div>
                  <p className="text-white">
                    GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                    <br />
                    INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                    <br />
                    HIGHEST AND LOWEST BIDS.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="flex items-center">
              <div className="mr-[42px]">
                <p className="underline text-white text-lg">See more</p>
              </div>
              <div>
                <button className="border p-[15px] rounded-lg">
                  <p className="text-white ">Set a reminder</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mb-8">
        <div className="bg-[#AEAEAE] rounded-lg w-[20%] h-[10px]">
          <div className="bg-white rounded-lg w-[30%] border h-[10px]"></div>
        </div>
        <div className="flex">
          <div className=" backdrop-blur flex rounded-full items-center justify-center w-16 h-16 shadow-2xl mr-8">
            <div>
              <FaChevronLeft color="white" />
            </div>
          </div>
          <div className="backdrop-blur flex rounded-full items-center justify-center w-16 h-16 shadow-2xl mr-4">
            <div>
              <FaChevronRight color="white" />
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
      <Header />s
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
        <UpcomingAuctions />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;

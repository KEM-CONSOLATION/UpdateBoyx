import { useEffect, useState } from "react";
import AOS from "aos";
import HeroImage from "../assets/HeroImage.png";
import LaunchImage from "../assets/LaunchImage.png";
import Tokenomics from "../assets/Tokenomics.png";
import Logo from "../assets/Logo.png";
import Button from "../assets/Button.png";
import "aos/dist/aos.css";
import { RiArrowUpDoubleLine } from "react-icons/ri";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    AOS.init({
      duration: 1000,
      once: true,
    });
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className=" font-inter">
      <style>
        {`
          @keyframes glow {
            0%, 100% {
              text-shadow: 0 0 10px #0CC0DF, 0 0 20px #0CC0DF, 0 0 30px #0CC0DF, 0 0 40px #0CC0DF, 0 0 50px #0CC0DF, 0 0 60px #0CC0DF, 0 0 70px #0CC0DF;
            }
            50% {
              text-shadow: 0 0 20px #FF5733, 0 0 30px #FF5733, 0 0 40px #FF5733, 0 0 50px #FF5733, 0 0 60px #FF5733, 0 0 70px #FF5733, 0 0 80px #FF5733;
            }
          }
          .glow {
            animation: glow 1.5s infinite alternate;
          }
        `}
      </style>
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className=" flex items-center justify-center">
          <div className=" ">
            <div className="grid place-items-center md:flex items-center md:justify-center gap-[36px]">
              <div>
                <img src={Logo} alt="" />
              </div>
              <div className="text-white font-[800] text-center">
                <p className="cursor-pointer text-[50px] md:text-[60px] lg:text-[100px] text-white glow">
                  UPDATE <span className="text-[#0CC0DF] glow">BOYX</span>
                </p>
                <p className="text-[20px] md:text-[45px]">
                  Protocol in Place, Respect in Order!
                </p>
              </div>
            </div>

            <div className="font-[800] text-white mt-[100px] text-center mb-[100px]">
              <p className="animate-pulse text-[30px] md:text-[80px]">
                WE ARE UPDATE <span className="text-[#0CC0DF]">BOYX</span>{" "}
              </p>
              <p className="text-[30px] md:text-[60px]">We are Liquidity</p>
            </div>

            <div className=" pb-[50px] flex items-center justify-center animate-pulse">
              <p className=" rounded-[15px] text-[30px] inline text-center md:text-[40px] font-[800] bg-[#FF3131] text-white px-[49px] py-[16px]">
                BUY $BOYX
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="  bg-[#190C18] ">
        <div
          className=" mx-[10px] lg:mx-[40px] py-[20px] tracking-widest"
          data-aos="fade-up"
        >
          <p className=" uppercase lg:text-[56px] font-[600] text-[40px] text-[#ffffff] py-[20px] text-center">
            How to Bridge to Base
          </p>

          <div className=" font-bold text-[16px] grid gap-[22px] mx-[10px] md:mx-0 md:grid-cols-2 lg:grid-cols-3 items-start place-items-center text-white  lg:text-[20px]">
            <div className=" max-w-[400px] grid gap-[20px] text-justify">
              <p className="  uppercase text-[#ffffff]">Step 1</p>
              <p className=" text-[#ffffff] ">
                Set up a crypto wallet on the Base network using Coinbase
                Wallet. If you&apos;re using a different wallet like MetaMask,
                follow these steps to connect to Base.
              </p>
            </div>

            <div className=" max-w-[400px] grid gap-[20px] text-justify">
              <p className=" font-bold uppercase text-[#ffffff]">Step 2</p>
              <p className=" text-[#ffffff] ">
                Transfer Ethereum (ETH) directly to your Base network wallet or
                send it to your Ethereum wallet and bridge ETH to Base via the
                offical Coinbase bridge or the Orbiter Finance bridge.
              </p>
            </div>
            <div className=" max-w-[400px] grid gap-[20px] text-justify">
              <p className=" font-bold uppercase text-[#ffffff]">Step 3</p>
              <p className=" text-[#ffffff] ">
                Visit Matcha, an onchain liquidity swap aggregator that allows
                you to trade supported Base currencies. Ensure your wallet is
                connected to the Base network.
              </p>
            </div>
          </div>

          <div className=" py-[20px] ">
            <div
              className=" mx-[10px] lg:mx-[40px] py-[20px] tracking-widest"
              data-aos="fade-up"
            >
              <p className=" uppercase lg:text-[56px] font-[600] sm:text-[40px] text-[30px] text-[#ffffff] text-center">
                $BOYX contract address
              </p>

              <p className=" uppercase text-center font-bold text-white font-serif overflow-x-scroll">
                1A1zP1eP5QGefi2enjwenfnjfjwhekdhui2gquig2iqhhhjkskdqkhdgkqggqdjwdLmv7DivfNa
              </p>
              <div className=" mt-[50px] flex items-center justify-center animate-pulse">
                <p className=" rounded-[15px] text-[30px] inline text-center md:text-[40px] font-[800] bg-[#FF3131] text-white px-[49px] py-[16px]">
                  BUY $BOYX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#ffffff] text-[#2F160B] px-4 py-4 rounded-full shadow-lg hover:bg-[#47240E] hover:text-white transition-all duration-300 animate-bounce hover:animate-none"
        >
          <RiArrowUpDoubleLine className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default LandingPage;

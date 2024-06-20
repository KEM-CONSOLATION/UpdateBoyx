import { useEffect, useState } from "react";
import AOS from "aos";
import HeroImage from "../assets/HeroImage.png";
import Roadmap from "../assets/Roadmap.png";
import LaunchImage from "../assets/Launch.jpg";
import Tokenomics from "../assets/Tokenomics.jpg";
import Logo from "../assets/Logo.jpg";
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
        className=" bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className=" flex items-center justify-center">
          <div className=" ">
            <div className=" my-[20px] flex place-items-center md:hidden items-center md:justify-center gap-[10px]">
              <div className=" w-[100px] h-[100px] rounded-full overflow-hidden">
                <img src={Logo} alt="" className="  w-full object-fill" />
              </div>
              <div className="text-white font-[800] text-left">
                <p className="cursor-pointer text-[35px] md:text-[60px] lg:text-[100px] text-white glow">
                  UPDATE <span className="text-[#0CC0DF] ">BOYX</span>
                </p>
                <p className="text-[14px] md:text-[45px]">
                  Protocol in Place, Respect in Order!
                </p>
              </div>
            </div>
            <div className="hidden place-items-center md:flex items-center md:justify-center gap-[36px]">
              <div className=" w-[100px] h-[100px] rounded-full overflow-hidden">
                <img src={Logo} alt="" className="  w-full object-fill" />
              </div>
              <div className="text-white font-[800] text-center">
                <p className="  cursor-pointer text-[50px] md:text-[60px] lg:text-[100px] text-white">
                  UPDATE <span className="text-[#0CC0DF] ">BOYX</span>
                </p>
                <p className="text-[20px] md:text-[45px]">
                  Protocol in Place, Respect in Order!
                </p>
              </div>
            </div>

            <div className="font-[800] text-white mt-[100px] text-center mb-[100px]">
              <p className=" text-[30px] md:text-[80px]">
                WE ARE UPDATE <span className="text-[#0CC0DF]">BOYX</span>{" "}
              </p>
              <p className="text-[30px] md:text-[60px]">We are Liquidity</p>
            </div>

            <div className=" mb-[50px] flex items-center justify-center animate-pulse">
              <p className=" rounded-[15px] text-[30px] inline text-center md:text-[40px] font-[800] bg-[#FF3131] text-white px-[49px] py-[16px]">
                BUY $BOYX
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="  bg-[#190C18] py-[50px]">
        <div
          className=" mx-[10px] lg:mx-[40px] py-[20px] tracking-widest"
          data-aos="fade-up"
        >
          <p className=" uppercase lg:text-[56px] font-[600] text-[40px] text-[#ffffff] py-[20px] text-center">
            How to Buy
          </p>

          <div className=" font-bold text-[20px] lg:text-[25px] grid gap-[22px] mx-[10px] md:mx-0 md:grid-cols-2 lg:grid-cols-3 items-start place-items-center text-white ">
            <div className=" max-w-[400px] grid gap-[20px] text-justify">
              <p className="  uppercase text-[#0CC0DF]">Step 1</p>
              <p className=" text-[#ffffff] ">
                Set up a crypto wallet on the Base network using Coinbase
                Wallet. If you&apos;re using a different wallet like MetaMask,
                follow these steps to connect to Base.
              </p>
            </div>

            <div className=" max-w-[400px] grid gap-[20px] text-justify">
              <p className=" font-bold uppercase text-[#0CC0DF]">Step 2</p>
              <p className=" text-[#ffffff] ">
                Transfer Ethereum (ETH) directly to your Base network wallet or
                send it to your Ethereum wallet and bridge ETH to Base via the
                offical Coinbase bridge or the Orbiter Finance bridge.
              </p>
            </div>
            <div className=" max-w-[400px] grid gap-[20px] text-justify">
              <p className=" font-bold uppercase text-[#0CC0DF]">Step 3</p>
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

      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${LaunchImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        <div className="relative flex items-center justify-center">
          <div>
            <div className="text-white font-[800] text-left">
              <p className="cursor-pointer text-center text-[30px] md:text-[60px] lg:text-[80px] text-white glow">
                LAUNCH <span className="text-[#0CC0DF] glow">PROTOCOL</span>
              </p>
            </div>
            <div className="font-[800] text-white mt-[400px] mb-[100px] text-center">
              <p className="text-[20px] md:text-[45px]">
                Anonymously created{" "}
                <span className="text-[#0CC0DF] glow">$BOYX</span> for
                everyone...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${Tokenomics})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70 pointer-events-none"></div>{" "}
        <div className="relative max-w-5xl mx-10 md:mx-auto py-[20px]">
          <div>
            <div className="text-white font-[800] text-left">
              <p className="cursor-pointer text-center text-[30px] md:text-[60px] lg:text-[80px] text-white glow">
                TOKENOMICS
              </p>
            </div>

            <div className="font-[800] text-[20px] lg:text-[40px] text-white text-left">
              <p>
                Max Supply: 1 BILLION{" "}
                <span className="text-[#0CC0DF]">$BOYX</span>
              </p>
              <p>Total Supply: 1,000,000,000</p>
              <p>Circulating Supply 1,000,000,000</p>
              <p>10% Airdrop: to the Solana Community </p>
              <p> Contract Revoked</p>
              <p>Liquidity Locked and Burned</p>
              <p>Zero Boyx Allocation Benefits</p>
              <p>Zero Boyx Presale Benefits</p>
              <p>Zero Taxes Benefits</p>
            </div>

            <div className="my-[50px] flex items-center justify-center animate-pulse">
              <p className="rounded-[15px] text-[30px] inline text-center md:text-[40px] font-[800] bg-[#FF3131] text-white px-[49px] py-[16px]">
                BUY $BOYX
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" bg-cover  bg-center"
        style={{ backgroundImage: `url(${Roadmap})` }}
      >
        <div className=" max-w-6xl mx-10 md:mx-auto pt-[30px] pb-[70px]">
          <div className=" ">
            <div className="text-white font-[800]  text-left">
              <p className="cursor-pointer text-center text-[30px] md:text-[60px] lg:text-[80px] text-white glow">
                WARNING
              </p>
              <p className=" text-[18px] text-center md:text-[40px] font-[800]">
                This crypto project and website, is not associated with or
                endorsed by anonymous. It was created solely for entertainment
                purposes. There is no promise of financial returns . It has no
                intrinsic value . There is no formal Team or official Roadmap
              </p>
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

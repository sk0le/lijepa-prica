import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Testamonials from "../components/Testamonials";
import WhyUs from "../components/WhyUs";

const images = ["/kafa.png", "/palacinka.png"];

const Home: NextPage = () => {
  const [currentImg, setCurrentImg] = useState<number>(-1);
  useEffect(() => {
    clearAll(0);
    let index = 0;
    const intFunc = () => {
      index++;
      if (index === images.length) index = 0;
      clearAll(index);
    };
    const interval = setInterval(intFunc, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const clearAll = (index: number) => {
    setCurrentImg(index);
    document.querySelectorAll(".firstImg").forEach((img) => {
      // @ts-ignore
      img.style.display = "block";
    });
    setTimeout(() => {
      const img = document.querySelector(".animation-to-hide");

      // @ts-ignore
      if (img) img.style.display = "none";
    }, 400);
  };

  const [isNavBarOpen, setIsNavbarOpen] = useState(false);
  return (
    <div className="overflow-x-hidden bg-coffeeWhite scroll-smooth">
      <Head>
        <title>Lijepa Prica</title>
        <meta name="description" content="Lijepa Prica Restoran u Tuzli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        id="start"
        className="w-full min-h-screen h-full"
        style={{
          backgroundColor: "#fafafa",
          backgroundImage: "url('/bg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Header isNavBarOpen={isNavBarOpen} setIsNavbarOpen={setIsNavbarOpen} />
        <div
          className={`flex-col md:flex-row -skew-x-3 items-center justify-center md:justify-between min-h-[85vh] h-full w-full px-6 lg:px-12 xl:px-24 ${
            !isNavBarOpen ? "flex" : "hidden"
          }`}
        >
          <div className="w-full h-full flex justify-center py-12 md:py-0 items-center md:items-start flex-col">
            <h1 className="text-3xl md:text-5xl  xl:text-6xl text-coffeeDark font-black font-playfair">
              Kafa, Palacinci.
            </h1>
            <h1 className="text-3xl md:text-5xl xl:text-6xl text-coffeeDark font-black font-playfair">
              Sve sto Vam treba.
            </h1>
            <p className="max-w-lg lg:max-w-xl text-center md:text-left text-coffeeDark font-playfairm mt-4 md:mt-8 mb-6 md:mb-10 text-base sm:text-lg md:text-xl">
              Uzivajte u kafi i palacinkama, popravite Vas dan po jako niskoj
              cijeni.
            </p>
            <a
              href="#menu"
              className="px-8 py-3 border-2 main-button border-coffee rounded-full bg-coffee transition-all text-coffeeWhite hover:px-12 hover:py-4"
            >
              Pogledajte nas meni
            </a>
          </div>
          <div className="relative inline-flex w-full h-96 md:h-0 items-center justify-center">
            {images.map((value, index) => {
              return (
                <Image
                  key={index}
                  src={value}
                  alt="aa"
                  width={0}
                  height={0}
                  className={`w-full absolute left-[50%] md:left-0 md:translate-x-0 translate-x-[-50%] md:right-0 max-w-sm lg:max-w-md xl:max-w-lg firstImg ${
                    currentImg !== index ? "animation-to-hide" : ""
                  }`}
                />
              );
            })}
          </div>
        </div>
        <Image
          src="/coffee-beans.png"
          width={0}
          height={0}
          alt=""
          className="w-64 absolute bottom-0 left-[30vw] md:block hidden"
        />
      </main>
      {isNavBarOpen ? <></> : <WhyUs />}
      <Menu />
      <Testamonials />
      <Footer />
    </div>
  );
};

export default Home;

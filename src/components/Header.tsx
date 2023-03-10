import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Sticky from "react-stickynode";
interface CProps {
  isNavBarOpen: boolean;
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

import logo from "../../public/logo.png";

export default function Header({ isNavBarOpen, setIsNavbarOpen }: CProps) {
  const router = useRouter();
  return (
    <Sticky
      enabled={true}
      innerActiveClass="bg-[#fce5b8cc]  z-[9999] backdrop-blur-md h-[10vh] lg:h-[15vh] flex items-center"
      releasedClass="bg-transparent"
    >
      <header
        className={`h-[15vh] w-full flex items-center justify-between px-6 lg:px-16 ${
          isNavBarOpen ? "bg-coffeeLight" : ""
        }`}
      >
        <Image alt="" src={logo} className="w-56 -skew-x-3" />
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 -skew-x-3 cursor-pointer relative"
            onClick={() => {
              setIsNavbarOpen((prev) => {
                document.body.style.overflow = !prev ? "hidden" : "auto";
                return !prev;
              });
            }}
          >
            <span
              className={`${
                isNavBarOpen ? "rotate-45" : ""
              } block h-[0.2rem] w-8 animate-pulse rounded-full bg-coffee transition-all duration-300`}
            ></span>
            <span
              className={`${
                isNavBarOpen ? "none" : "block"
              } h-[0.2rem] w-8 animate-pulse rounded-full bg-coffee transition-all duration-300`}
            ></span>
            <span
              className={`
              ${isNavBarOpen ? "-rotate-45 absolute bottom-0" : ""}
              block h-[0.2rem] w-8 animate-pulse rounded-full bg-coffee transition-all duration-300`}
            ></span>
          </div>
        </section>

        <div
          className={`w-full h-[90vh] fixed right-0 top-[10vh] transition-all bg-coffeeLight z-50 ${
            isNavBarOpen ? "flex" : "hidden"
          }
          justify-center items-center flex-col space-y-10 text-xl`}
        >
          <a
            href="/#start"
            onClick={() => {
              setIsNavbarOpen(false);
              document.body.style.overflow = "auto";
            }}
            className="font-base text-coffee hover:underline cursor-pointer backdrop-blur-xl"
          >
            Po??etna
          </a>
          <a
            onClick={() => {
              setIsNavbarOpen(false);
              document.body.style.overflow = "auto";
            }}
            href="/#why-us"
            className="font-base text-coffee hover:underline cursor-pointer"
          >
            Za??to mi?
          </a>
          <a
            onClick={() => {
              setIsNavbarOpen(false);
              document.body.style.overflow = "auto";
            }}
            href="/#menu"
            className="font-base text-coffee hover:underline cursor-pointer"
          >
            Meni
          </a>
          <a
            href="/#testamonials"
            onClick={() => {
              setIsNavbarOpen(false);
              document.body.style.overflow = "auto";
            }}
            className="font-base text-coffee hover:underline cursor-pointer"
          >
            Na??i gosti o nama
          </a>
          <button
            onClick={() => {
              router.push("/contact-us");
            }}
            className="px-8 py-3 border-2 -skew-x-3 border-coffee rounded-full text-coffee hover:bg-coffee transition-all hover:text-coffeeWhite"
          >
            Kontaktiraj nas
          </button>
        </div>

        <nav className="space-x-8 hidden lg:flex -skew-x-3">
          <a
            href="/#start"
            className="font-base text-coffee hover:underline cursor-pointer"
          >
            Po??etna
          </a>
          <a
            href="/#why-us"
            className="font-base text-coffee hover:underline cursor-pointer"
          >
            Za??to mi?
          </a>
          <a
            href="/#menu"
            className="font-base text-coffee hover:underline cursor-pointer"
          >
            Meni
          </a>
          <a
            href="/#testamonials"
            className="font-base text-coffee hover:underline cursor-pointer"
          >
            Na??i gosti o nama
          </a>
        </nav>
        <button
          onClick={() => {
            router.push("/contact-us");
          }}
          className="px-8 py-3 border-2 -skew-x-3 hidden lg:block border-coffee rounded-full text-coffee hover:bg-coffee transition-all hover:text-coffeeWhite"
        >
          Kontaktiraj nas
        </button>
      </header>
    </Sticky>
  );
}

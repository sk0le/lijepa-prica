import {
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-full w-full px-6 space-y-10 lg:space-y-0 lg:px-10 xl:px-24 py-10 flex flex-col lg:flex-row  items-start justify-between bg-coffeeDark">
      <Image src="/logo.png" className="w-56" alt="" />

      <nav className="flex flex-col items-start">
        <p className="text-coffeeWhite mb-5 text-xl font-bold">Navigacija</p>
        <a
          href="#start"
          className="font-base text-coffeeWhite hover:underline cursor-pointer backdrop-blur-xl"
        >
          Pocetna
        </a>
        <a
          href="#why-us"
          className="font-base text-coffeeWhite hover:underline cursor-pointer"
        >
          Zasto mi?
        </a>
        <a
          href="#menu"
          className="font-base text-coffeeWhite hover:underline cursor-pointer"
        >
          Meni
        </a>
        <a
          href="#testamonials"
          className="font-base text-coffeeWhite hover:underline cursor-pointer"
        >
          Nasi gosti o nama
        </a>
      </nav>
      <div>
        <p className="text-coffeeWhite mb-5 text-xl font-bold">Kontakt</p>
        <div className="space-y-3 flex justify-start flex-col items-start">
          <div className="flex items-center justify-center space-x-5">
            <FontAwesomeIcon icon={faPhone} className="w-4 text-coffeeWhite" />
            <p className="text-coffeeWhite">+387 062 688 281</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-4 text-coffeeWhite"
            />
            <p className="text-coffeeWhite">support@lijepaprica.ba</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-coffeeWhite mb-5 text-xl font-bold">Lokacija</p>
        <div className="space-y-3 flex justify-start flex-col items-start">
          <div className="flex items-center justify-center space-x-5">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="w-4 text-coffeeWhite"
            />
            <p className="text-coffeeWhite">Turalibegova 18, Tuzla 75000</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <FontAwesomeIcon icon={faClock} className="w-4 text-coffeeWhite" />
            <p className="text-coffeeWhite">09:00 - 23:00</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import {
  faAward,
  faGlobe,
  faLocationDot,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const stavke = [
  {
    icon: faAward,
    name: "Dobra kvaliteta",
    desc: "Dodjite i probajte, sami se uvjerite!",
  },
  {
    icon: faWifi,
    name: "Besplatan internet",
    desc: "Trebate zavrsiti neki posao? Ili samo zelite surfati internetom, besplatan internet je tu za Vas.",
  },
  {
    icon: faLocationDot,
    name: "Dobra Lokacija",
    desc: "Centar Tuzle, centar grada. Blizu Vama!",
  },
  {
    icon: faGlobe,
    name: "Kupovina online",
    desc: "Mozete naruciti online uz pomoc Korpa aplikacije.",
  },
];

export default function WhyUs() {
  return (
    <div
      id="why-us"
      className="min-h-screen h-full scroll-m-32 px-12 xl:px-0 relative flex flex-col -skew-x-3 justify-center items-center py-6 md:py-16"
    >
      <h1 className="text-4xl text-coffeeDark font-bold">Zasto mi?</h1>
      <div className="w-full max-w-xs h-1 bg-coffee rounded-full mt-2"></div>
      <img
        src="/coffee-beans-new.png"
        alt=""
        className="absolute top-[13vh] right-[-1rem] w-44 md:block hidden"
      />
      <div className="w-full mt-10 flex flex-col-reverse lg:flex-row justify-center items-center space-x-0 lg:space-x-10 z-[999]">
        <img
          src="/lijepa-prica.png"
          alt=""
          className="w-full max-w-xl xl:max-w-2xl rounded-3xl"
        />
        <div className="flex flex-col items-start mb-10 lg:mb-0 justify-center h-full space-y-5">
          {stavke.map((value, index) => {
            return (
              <div key={index} className="flex items-center justify-center">
                <div className="p-4 bg-coffee rounded-full">
                  <FontAwesomeIcon
                    icon={value.icon}
                    className="w-6 h-6 xl:w-8 xl:h-8  text-[#fff]"
                  />
                </div>
                <div className="flex flex-col items-start justify-center ml-4">
                  <h1 className="text-lg font-semibold">{value.name}</h1>
                  <p className="text-coffee max-w-xs">{value.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

const palacinke = [
  {
    name: "Kinder Bueno",
    img: "https://korpa.ba/product_uploads/DgnKgKFBZ2Qaoj76zmQzNptmcAtPYs6I.jpg",
    price: 5,
  },
  {
    name: "Jaffa",
    img: "https://korpa.ba/product_uploads/D2S49gTNncmCMLUuzuzHM6mmjKYQL7Te.jpg",
    price: 5,
  },
  {
    name: "Oreo",
    img: "https://korpa.ba/product_uploads/wvzniaVNnGn2i1NlZPejYhJmUfn7bmfI.jpg",
    price: 5,
  },
  {
    name: "Raffaelo",
    img: "https://korpa.ba/product_uploads/XSmHYDWFaWyW8D1HgHDwiLBAy2b3bDIQ.jpg",
    price: 5,
  },
  {
    name: "Kinder",
    img: "https://korpa.ba/product_uploads/jTsSycKSq1wyAme8ihWi3MXKsgqSPjPT.jpg",
    price: 5,
  },
  {
    name: "Ferrero Rocher",
    img: "https://korpa.ba/product_uploads/6FJbQAAr5Y8iDYNdiiadOQkhomYDUMai.jpg",
    price: 6,
  },
];

export default function Menu() {
  return (
    <div
      id="menu"
      className="h-full scroll-smooth scroll-m-32 px-6 sm:px-0  py-16 w-full flex flex-col justify-center items-center bg-coffeeLight"
      style={{
        backgroundImage: "url('overlay.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl text-coffeeDark font-bold">Meni</h1>
      <div className="max-w-xs w-full h-1 bg-coffee rounded-full mt-2"></div>
      <div className="grid place-items-center md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
        {palacinke.map((value, index) => {
          return (
            <div
              className="max-w-sm w-full bg-coffee rounded-3xl shadow-2xl"
              key={index}
            >
              <div
                style={{
                  backgroundImage: `url('${value.img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="rounded-tl-3xl rounded-tr-3xl h-44 max-w-sm w-60"
              ></div>
              {/* <Image
                src={value.img}
                className="rounded-tl-3xl rounded-tr-3xl w-full max-w-sm max-h-48"
                height={0}
                width={0}
                alt=""
              /> */}
              <div className="px-5 py-5">
                <h1 className="text-xl text-[#fff] font-medium">
                  {value.name}
                </h1>
                <p className="text-base text-coffeeLight">{value.price} KM</p>
              </div>
            </div>
          );
        })}
      </div>
      <a
        href="https://korpa.ba/partner/lijepa-prica"
        target="_blank"
        className="px-8 py-3 border-2 main-button border-coffee rounded-full bg-coffee transition-all text-coffeeWhite mt-10 hover:px-12 hover:py-4"
        rel="noreferrer"
      >
        Pogledajte ostalo
      </a>
    </div>
  );
}

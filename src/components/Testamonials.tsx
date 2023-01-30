import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Testamonials() {
  return (
    <div
      id="testamonials"
      className="w-full min-h-screen h-full py-12 px-6 sm:px-0 lg:py-0 scroll-m-32 relative bg-coffeeWhite flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/ng-2.png')",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-4xl text-coffeeDark font-bold z-50">
        Nasi gosti o nama
      </h1>
      <div className="max-w-sm w-full h-1 bg-coffee z-50  rounded-full mt-2"></div>
      <img
        src="/coffee-new.png"
        alt=""
        className="w-full max-w-xs sm:max-w-sm md:max-w-md absolute  right-[-10rem] top-[1vh] xl:top-[50%] xl:translate-y-[-70%] m-0"
      />
      <div className=" mt-0 lg:mt-5 flex items-center lg:items-start flex-col lg:flex-row lg:space-x-5 ">
        <div className="relative">
          <img
            src="/kupac.png"
            alt=""
            className="max-w-xs relative left-0 z-50 rounded-br-[90px] rounded-bl-[90px] mt-6 lg:mt-0"
          />
          <div className="w-full h-44 bg-coffee rounded-full absolute bottom-0 left-0 right-0"></div>
        </div>
        <div className="text-9xl leading-10 font-playfair -skew-x-3 mt-16 lg:mt-5 italic lg:mr-2">
          "
        </div>
        <div className="flex flex-col items-start justify-start mt-0 lg:mt-16">
          <h1 className="text-3xl text-coffee font-bold font-playfair italic">
            Najbolje palacinke
          </h1>
          <p className="max-w-sm mt-4 z-50">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis impedit numquam, distinctio sint deserunt saepe iusto
            voluptatibus esse magni commodi quidem ea molestias praesentium
            dicta voluptates quae modi necessitatibus provident.
          </p>
          <h1 className="text-xl font-bold mt-5">Armin Karamujic</h1>
          <div className="mt-2 flex space-x-2">
            {Array(5)
              .fill(0)
              .map((v, index) => {
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className="w-8 h-8 text-coffee"
                  />
                );
              })}
          </div>
        </div>
        {/* <div className="flex-1 flex justify-center h-full w-full items-center">
          <div className="p-2 bg-coffee rounded-full cursor-pointer hover:p-4 transition-all">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="w-6 h-6 text-coffeeWhite"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
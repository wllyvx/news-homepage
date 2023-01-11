import data from "../../data/data";

export default function Hero() {
  return (
    <div>
      <img src="./images/image-web-3-mobile.jpg" alt="web 3 image mobile" className="block md:hidden mb-6" />
      <img src="./images/image-web-3-desktop.jpg" alt="web 3 image desktop" className="hidden md:block" />
      <div className="pt-9 inline md:flex justify-between">
        <div>
          <h1 className="text-[2.5rem] md:text-[3.5rem] text-very-dark-blue font-extrabold leading-[1] mb-4 md:mb-0">{data.headerText.title}</h1>
        </div>
        <div className="max-w-[22rem]">
          <p className="text-dark-grayish-blue text-sm tracking-wide leading-relaxed mb-6 md:mb-9">{data.headerText.desc}</p>
          <button className="bg-soft-red hover:bg-black hover:text-white transition-all ease-in-out duration-200 text-white text-sm font-bold uppercase tracking-[0.3rem] py-[0.85rem] px-8">Read More</button>
        </div>
      </div>
    </div>
  );
}

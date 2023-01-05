import data from "../../data/data";

export default function Hero() {
  return (
    <div>
      <img src="./images/image-web-3-mobile.jpg" className="" />
      <div className="pt-6">
        <h1 className="text-[2.5rem] text-very-dark-blue font-extrabold leading-[1] mb-4">
          {data.headerText.title}
        </h1>
        <p className="text-dark-grayish-blue tracking-tight leading-relaxed mb-6">{data.headerText.desc}</p>
        <button className="bg-soft-red text-white text-sm font-bold uppercase tracking-[0.3rem] py-[0.85rem] px-8">Read More</button>
      </div>
    </div>
  );
}

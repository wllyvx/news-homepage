import data from "../../data/data"

export default function LatestNews() {

  return (
    <div className="bg-very-dark-blue py-6 md:py-9 px-5 md:px-6 mt-16 md:mt-0 md:max-w-[56rem]">
      <h1 className="text-3xl md:text-[2.5rem] text-soft-orange font-bold">New</h1>
      <ul className="text-white">
        {data.latestNews.map((news, index) => (
          <li key={news.id} className={`${index === data.latestNews.length - 1 ? '' : 'border-b-dark-grayish-blue border-b pb-8'} pt-7`}>
            <h2 className="text-xl font-bold mb-2">{news.title}</h2>
            <h3 className="text-grayish-blue text-sm tracking-wider leading-[1.7]">{news.subtitle}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

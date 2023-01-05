import data from "../../data/data"

export default function SectionArticle() {
  return (
    <div className="my-16">
      <ul className="block md:flex justify-between space-y-8 md:space-y-0">
        {data.articles.map((article) => (
          <li key={article.id} className="flex justify-between items-start space-x-6 grow">
            <img src={`./images/${article.imgPath}`} alt={article.title} className="w-[100px] h-auto" />
            <div className="space-y-2 md:space-y-0">
              <h4 className="text-3xl text-grayish-blue font-extrabold">{article.number}</h4>
              <a href="#"><h2 className="text-lg text-very-dark-blue font-bold hover:text-soft-orange">{article.title}</h2></a>
              <h3 className="text-dark-grayish-blue">{article.subtitle}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useContext, useEffect } from "react";
import ThemeContext from "../providers/theme/ThemeProvider";
import NewsContext from "../providers/news/NewsProvider";
import NewsCard from "../components/NewsCard";
import Loading from "../components/Loading";
import { fetchNews } from "../providers/news/FetchNews";

const Politics = () => {
  const { dark } = useContext(ThemeContext);
  const { articles, dispatch } = useContext(NewsContext);

  const getPoliticsNews = async function () {
    const result = await fetchNews("Politics News");
    dispatch({ type: "GET_NEWS", payload: result });
  };

  useEffect(() => {
    dispatch({ type: "RESET_NEWS" });
    getPoliticsNews();
  }, []);

  if (!articles) {
    return <Loading />;
  }

  return (
    <div
      className={
        dark ? "container-fluid pt-3 bg-secondary" : "container-fluid pt-3"
      }
    >
      <h1 className="text-center mb-5">Politics News</h1>
      <div className="row g-3 pb-5">
        {articles.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </div>
  );
};

export default Politics;

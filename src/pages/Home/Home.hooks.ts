import axios from "axios";
import { useEffect, useState } from "react";

// import { useAppSelector } from "redux/hooks";
// import { articlesSelector } from "redux/slices/article.slice";

const useHomePage = () => {
  const [articles, setArticles] = useState<any>([]);
  const [filterValue, setFilterValue] = useState<string>("");
  const [filteredArticles, setFilteredArticles] = useState<any>([]);

  // We can use redux, selectors
  // const articlesList = useAppSelector(articlesSelector.selectAll);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v3/articles")
      .then((res) => setArticles(res.data));
  }, []);

  return {
    articles,
    setArticles,
    filteredArticles,
    setFilteredArticles,
    filterValue,
    setFilterValue,
  };
};

export { useHomePage };

import axios from "axios";
import { useEffect, useState } from "react";

const useHomePage = () => {
  const [articles, setArticles] = useState<any>([]);
  const [filterValue, setFilterValue] = useState<string>("");
  const [filteredArticles, setFilteredArticles] = useState<any>([]);

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

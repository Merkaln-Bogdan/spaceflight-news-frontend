import { useState } from "react";

import { useAppSelector } from "redux/hooks";
import { articlesSelector } from "redux/slices/article.slice";

const useHomePage = () => {
  const [filterValue, setFilterValue] = useState<string>("");
  const [filteredArticles, setFilteredArticles] = useState<any>([]);

  // We can use redux, selectors
  const articles = useAppSelector(articlesSelector.selectAll);

  return {
    articles,
    filteredArticles,
    setFilteredArticles,
    filterValue,
    setFilterValue,
  };
};

export { useHomePage };

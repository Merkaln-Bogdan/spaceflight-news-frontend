import axios from "axios";

import { Container } from "@mui/material";
import { useEffect, useState } from "react";

import { Article } from "./components/Articles";
import { ArticleType } from "types/article.type";

const HomePage = () => {
  const [articles, setArticles] = useState<any>([]);
  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v3/articles")
      .then((res) => setArticles(res.data));
  }, []);
  console.log(articles);
  return (
    <Container>
      {articles &&
        articles.map((item: ArticleType) => (
          <Article article={item} key={item.id} />
        ))}
    </Container>
  );
};

export { HomePage };

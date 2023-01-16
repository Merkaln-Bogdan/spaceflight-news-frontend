import { useEffect, useState } from "react";

import axios from "axios";

import { ArticleType } from "types/article.type";
import { useParams } from "react-router-dom";

const useDetails = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState<ArticleType>();

  useEffect(() => {
    axios
      .get(`https://api.spaceflightnewsapi.net/v3/articles/${articleId}`)
      .then((res) => setArticle(res.data));
  }, [articleId]);

  return { article };
};

export { useDetails };

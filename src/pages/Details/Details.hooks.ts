import { useEffect, useState } from "react";

import axios from "axios";

import { ArticleType } from "types/article.type";
import { useParams } from "react-router-dom";

const useDetails = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState<ArticleType>();

  useEffect(() => {
    try {
      axios
        .get(`https://api.spaceflightnewsapi.net/v3/articles/${articleId}`)
        .then((res) => setArticle(res.data));
    } catch (err) {
      throw err;
    }
  }, [articleId]);

  return { article };
};

export { useDetails };

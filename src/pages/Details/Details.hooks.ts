import { useEffect, useState } from "react";

import { ArticleType } from "types/article.type";
import { useParams } from "react-router-dom";
import { articlesDataService } from "service/service";

const useDetails = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState<ArticleType>();

  useEffect(() => {
    try {
      articlesDataService
        .getAtricle(articleId!)
        .then((res) => setArticle(res.data));
    } catch (err) {
      throw err;
    }
  }, [articleId]);

  return { article };
};

export { useDetails };

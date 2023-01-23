import axios from "axios";

class ArticlesDataService {
  public async getAllArticles() {
    try {
      return await axios.get("https://api.spaceflightnewsapi.net/v3/articles");
    } catch (err) {
      throw err;
    }
  }
  public async getAtricle(articleId: string) {
    try {
      return await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles/${articleId}`
      );
    } catch (err) {
      throw err;
    }
  }
}

const articlesDataService = new ArticlesDataService();

export { articlesDataService };

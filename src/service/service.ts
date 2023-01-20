import axios from "axios";

class ArticlesDataService {
  public async getAllArticles() {
    try {
      return axios.get("https://api.json-generator.com");
    } catch (err) {
      throw err;
    }
  }
}

const articlesDataService = new ArticlesDataService();

export { articlesDataService };

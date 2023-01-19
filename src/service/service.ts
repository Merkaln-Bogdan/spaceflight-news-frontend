import axios from "axios";

class ArticlesDataService {
  public async getAllArticles() {
    return axios.get("https://api.json-generator.com");
  }
}

const articlesDataService = new ArticlesDataService();

export { articlesDataService };

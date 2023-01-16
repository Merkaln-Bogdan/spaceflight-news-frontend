import { Container, Grid } from "@mui/material";

import { Article } from "./components/Articles";
import { ArticleType } from "types/article.type";
import { Filter } from "./components/Filter";
import { useHomePage } from "./Home.hooks";

const HomePage = () => {
  const {
    articles,
    setFilteredArticles,
    filteredArticles,
    filterValue,
    setFilterValue,
  } = useHomePage();

  return (
    <Container>
      <Filter
        setFilter={setFilteredArticles}
        data={articles}
        setValues={setFilterValue}
        values={filterValue}
      />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {filteredArticles &&
          filteredArticles.map((item: ArticleType) => (
            <Grid item xs={2} sm={4} md={4} key={item.id}>
              <Article
                article={item}
                key={item.id}
                searchValues={filterValue}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export { HomePage };

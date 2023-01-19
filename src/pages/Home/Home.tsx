import { Grid, Typography } from "@mui/material";

import { Article } from "./components/Articles";
import { ArticleType } from "types/article.type";
import { Filter } from "./components/Filter";
import { useHomePage } from "./Home.hooks";
import { Layout } from "sections/Layout";

const HomePage = (): React.ReactElement => {
  const {
    articles,
    setFilteredArticles,
    filteredArticles,
    filterValue,
    setFilterValue,
  } = useHomePage();

  return (
    <Layout>
      <Filter
        setFilter={setFilteredArticles}
        data={articles}
        setValues={setFilterValue}
        values={filterValue}
      />

      {filterValue && (
        <Typography sx={{ mb: 2, mt: 2, fontWeight: 600 }}>
          Results: {filteredArticles.length}
        </Typography>
      )}
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
    </Layout>
  );
};

export { HomePage };

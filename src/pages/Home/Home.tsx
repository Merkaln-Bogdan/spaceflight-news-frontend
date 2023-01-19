import { Grid, Typography } from "@mui/material";

import { Layout } from "sections/Layout";
import { Article } from "./components/Articles";
import { Filter } from "./components/Filter";

import { ArticleType } from "types/article.type";

import { useHomePage } from "./Home.hooks";

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
        <Typography
          sx={{ mb: "45px", mt: 2, borderBottom: "1px solid #eaeaea" }}
          fontWeight="600"
        >
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

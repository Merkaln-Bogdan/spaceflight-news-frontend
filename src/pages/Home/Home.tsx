import { Grid } from "@mui/material";

import { Text } from "components/Text";

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
        <Text styles={{ mb: "45px", mt: 2, borderBottom: "1px solid #eaeaea" }}>
          Results: {filteredArticles.length}
        </Text>
      )}
      <Grid
        container
        spacing={{ xs: 2, md: 6 }}
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

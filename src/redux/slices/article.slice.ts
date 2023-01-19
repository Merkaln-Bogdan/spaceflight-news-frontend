import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { ArticleType } from "types/article.type";

import type { RootState } from "../store";

const articleAdapter = createEntityAdapter({
  selectId: (articles: ArticleType) => articles.id,
});

export const articleSlice = createSlice({
  name: "articles",
  initialState: articleAdapter.getInitialState(),
  reducers: {
    setAllArticles(state, action) {
      articleAdapter.setAll(state, action.payload);
    },
  },
});

export const getState = (rootState: RootState) => rootState.articles;

export const articlesSelector = articleAdapter.getSelectors(
  (state: RootState) => state.articles
);

export const { setAllArticles } = articleSlice.actions;

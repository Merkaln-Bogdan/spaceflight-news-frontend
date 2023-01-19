import { configureStore } from "@reduxjs/toolkit";

import { articleSlice } from "./slices/article.slice";

const store = configureStore({
  reducer: {
    articles: articleSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };

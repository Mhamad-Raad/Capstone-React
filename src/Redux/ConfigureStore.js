import { configureStore, Middleware } from "@reduxjs/toolkit";
import dataList from "./List";

export default configureStore({
  reducer: {
    data: dataList,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

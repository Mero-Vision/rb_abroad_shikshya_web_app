import { configureStore } from "@reduxjs/toolkit";
import { mainApi } from "../api/mainApi";

export const store = configureStore({
   reducer: {
      // Add the API reducer to the store
      [mainApi.reducerPath]: mainApi.reducer,
   },
   // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
         mainApi.middleware
      ),
});

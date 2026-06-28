  import { configureStore } from "@reduxjs/toolkit";
  import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistReducer,
    persistStore,
  } from "redux-persist";
  import authReducer from "./slices/authSlice";
  import storage from "redux-persist/lib/storage";
  import { baseApi } from "./api";

  // Persist config
  const persistConfig = {
    key: "userInfo",
    storage,
  };

  // Wrap auth reducer with persist
  const persistedUserInfoReducer = persistReducer(
    persistConfig,
    authReducer
  );

  // Create store
  export const store = configureStore({
    reducer: {
      auth: persistedUserInfoReducer,
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,
          ],
        },
      }).concat(baseApi.middleware),
  });

  // Persistor
  export const persistor = persistStore(store);
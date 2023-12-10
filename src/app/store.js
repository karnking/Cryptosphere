import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import {exchangesApi} from "../services/exchangesApi"
import { userReducer } from "../services/userApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [exchangesApi.reducerPath]: exchangesApi.reducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware,cryptoNewsApi.middleware,exchangesApi.middleware),
});

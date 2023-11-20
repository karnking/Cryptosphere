import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoNewsApiHeaders = {
  "X-API-Key": "3ef6398d4c964f5ea8b457535c46a046",
};

const baseUrl = "https://newsapi.org/v2/everything";

const createRequest = (url) => ({
  url
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `?q=${newsCategory}&page=1&pageSize=${count}&api_key=3ef6398d4c964f5ea8b457535c46a046`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

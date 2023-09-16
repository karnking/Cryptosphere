import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoNewsApiHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com/news",
  "x-rapidapi-key": "ee116c5092msh79e40c6c9496bb1p128612jsn988c13148242",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com/news";

const createRequest = (url) => ({
  url,
  headers: cryptoNewsApiHeaders,
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

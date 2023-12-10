import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

const baseUrl = "https://nice-tan-butterfly-sari.cyclic.app/news";

const createRequest = (url) => ({
  url,
  
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl
  }),

  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({
        newsCategory,
        count
      }) => {
        if (newsCategory) {
          return createRequest(
            `?topic=${newsCategory}&count=${count?count:12}`
          )
        } else {
          return createRequest(
            `?access_key=c30216ad085bd8098471ca4d3d6ddb74&keywords=cryptocurrency&languages=en&count=${count}`
          )
        }
      }
    }),
  }),
});

export const {
  useGetCryptoNewsQuery
} = cryptoNewsApi;
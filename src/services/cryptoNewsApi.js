import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

const baseUrl = "http://api.mediastack.com/v1/news";

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
        count=20
      }) => {
        if (newsCategory) {
          return createRequest(
            `?access_key=c30216ad085bd8098471ca4d3d6ddb74&keywords=${newsCategory}&languages=en&limit=${count}`
          )
        } else {
          return createRequest(
            `?access_key=c30216ad085bd8098471ca4d3d6ddb74&keywords=cryptocurrency&languages=en&limit=${count}`
          )
        }
      }
    }),
  }),
});

export const {
  useGetCryptoNewsQuery
} = cryptoNewsApi;
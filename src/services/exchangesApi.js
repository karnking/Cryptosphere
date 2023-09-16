import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const exchangesApiHeaders = {
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
    'X-RapidAPI-Key': 'fac9c967f1mshb0891bed0d223f5p1f977fjsnd9031551ed8e'
};

const baseUrl = "https://coingecko.p.rapidapi.com";

const createRequest = (url) => ({
  url,
  headers: exchangesApiHeaders,
});

export const exchangesApi = createApi({
  reducerPath: "exchangesApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () => createRequest(`/exchanges`),
    }),
  }),
});

export const { useGetExchangesQuery } = exchangesApi;

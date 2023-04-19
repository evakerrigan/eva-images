import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface CardDto {
  id?: string;
  title?: string;
  url?: string;
  shops?: string[];
  price?: string;
  stockurl?: string;
  tags?: string[];
}

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://eva-images-json-server.vercel.app/cards' }),
  endpoints: (builder) => ({
    fetchCards: builder.query<CardDto[], string>({
      query: (search) => `/?title_like=${search}`,
    }),
  }),
});

export const { useFetchCardsQuery } = cardsApi;

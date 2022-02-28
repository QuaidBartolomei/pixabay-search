// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export default interface Images {
  hits: {
    id: string //
    previewURL: string
  }[]
}

// const host = 'api/images'

// Define a service using a base URL and expected endpoints
export const imagesAPI = createApi({
  reducerPath: 'imagesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'api/' }),
  endpoints: (builder) => ({
    getImagesByName: builder.query<Images, string>({
      query: (name) => ({
        url: 'images/',
        params: {
          q: name,
        },
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetImagesByNameQuery } = imagesAPI

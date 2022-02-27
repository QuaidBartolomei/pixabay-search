// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export default interface Pixabay {
  hits: {
    id: string //
    previewURL: string
  }[]
}

// const host = 'api/images'

// Define a service using a base URL and expected endpoints
export const pixabayAPI = createApi({
  reducerPath: 'pixabayAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'api/' }),
  endpoints: (builder) => ({
    getImagesByName: builder.query<Pixabay, string>({
      query: (name) => `images/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetImagesByNameQuery } = pixabayAPI

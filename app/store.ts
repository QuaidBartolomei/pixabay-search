import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { imageSearchReducer } from 'features/image-search/imageSearchSlice'
import { imagesAPI } from 'services/images'

export const store = configureStore({
  reducer: {
    imageSearch: imageSearchReducer,
    [imagesAPI.reducerPath]: imagesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(imagesAPI.middleware),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const selectImageSearchQuery = (state: RootState) =>
  state.imageSearch.query

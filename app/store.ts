import { configureStore } from '@reduxjs/toolkit'
import { imageSearchReducer } from 'features/image-search/imageSearchSlice'

export const store = configureStore({
  reducer: {
    imageSearch: imageSearchReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

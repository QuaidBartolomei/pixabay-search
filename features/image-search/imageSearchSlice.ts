import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ImageSearchState {
  query: string
}

const initialState: ImageSearchState = {
  query: '',
}

export const imageSearchSlice = createSlice({
  name: 'image-search',
  initialState,
  reducers: {
    setQuery: (draftState, action: PayloadAction<string>) => {
      draftState.query = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setQuery } = imageSearchSlice.actions

export const imageSearchReducer = imageSearchSlice.reducer

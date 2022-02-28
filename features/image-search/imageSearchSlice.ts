import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ImageSearchState {
  query: string
}

const initialState: ImageSearchState = {
  query: '',
}

export const clearQueryAfterDelay = createAsyncThunk(
  'images/clearQueryAfterDelay',
  async (delay: number, _thunkAPI) => {
    const p = new Promise<void>((resolve, _reject) => {
      setTimeout(() => {
        console.log('thunk is done')
        resolve()
      }, delay)
    })
    await p
  },
)

export const imageSearchSlice = createSlice({
  name: 'image-search',
  initialState,
  reducers: {
    setQuery: (draftState, action: PayloadAction<string>) => {
      draftState.query = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(clearQueryAfterDelay.fulfilled, (draftState, _action) => {
      draftState.query = ''
    })
  },
})

// Action creators are generated for each case reducer function
export const { setQuery } = imageSearchSlice.actions

export const imageSearchReducer = imageSearchSlice.reducer

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'app/store'
import { setQuery } from './imageSearchSlice'

export default function ImageSearchQueryInput() {
  const query = useSelector((state: RootState) => state.imageSearch.query)
  const dispatch = useDispatch()

  return (
    <Box
      sx={{
        height: 100,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={query}
        onChange={(e) => {
          dispatch(setQuery(e.target.value))
        }}
      />
    </Box>
  )
}

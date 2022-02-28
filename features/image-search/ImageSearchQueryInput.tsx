import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from 'react-redux'
import { selectImageSearchQuery } from 'app/store'
import { setQuery } from './imageSearchSlice'

export default function ImageSearchQueryInput() {
  const query = useSelector(selectImageSearchQuery)
  const dispatch = useDispatch()

  return (
    <Box
      sx={{
        m: 1,
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

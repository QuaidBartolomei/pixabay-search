import { Stack } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ImageSearchButton from './ImageSearchButton'
import { setQuery } from './imageSearchSlice'

const delay = 2000

export default function ImageSearchQueryInput() {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [handler, setHandler] = useState<NodeJS.Timeout | undefined>(undefined)

  useEffect(() => {
    if (handler) clearTimeout(handler)
    const h = setTimeout(() => {
      dispatch(setQuery(value))
    }, delay)
    setHandler(h)
  }, [dispatch, value, setHandler])

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        p: 1,
        width: '100%',
        bgcolor: 'lightgray',
      }}
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <ImageSearchButton />
    </Stack>
  )
}

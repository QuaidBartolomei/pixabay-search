import { Stack } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ImageSearchButton from './ImageSearchButton'
import { setQuery } from './imageSearchSlice'

const delay = 500

export default function ImageSearchQueryInput() {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setQuery(value))
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [dispatch, value])

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        m: 1,
        width: '100%',
      }}
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ImageSearchButton />
    </Stack>
  )
}

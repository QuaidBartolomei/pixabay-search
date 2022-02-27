import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import ImageResultData from 'interfaces/ImageResultData'
import { queryApi } from 'utils/api'

export type SearchBarProps = {
  onResults: (imageResults: ImageResultData[]) => void
}

export default function SearchBar({ onResults }: SearchBarProps) {
  const [query, setQuery] = useState('')

  async function handleSearch() {
    const data = await queryApi(query)
    const images = data.hits
    onResults(images)
  }

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
        onChange={(e) => {
          setQuery(e.target.value)
        }}
      />
      <Button onClick={handleSearch}>Search</Button>
    </Box>
  )
}

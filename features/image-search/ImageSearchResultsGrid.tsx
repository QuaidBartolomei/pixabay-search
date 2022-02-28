import { Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectImageSearchQuery } from 'app/store'
import { useGetImagesByNameQuery } from 'services/images'
import ImageResult from './ImageResult'

export default function ImageSearchResultsGrid() {
  const query = useSelector(selectImageSearchQuery)

  const { data, error, isLoading } = useGetImagesByNameQuery(query)

  if (isLoading) return <div>loading</div>
  if (error || !data) return <div>error</div>

  return (
    <Stack
      sx={{
        overflowY: 'auto',
        bgcolor: 'red',
        width: '100%',
      }}
      direction="column"
    >
      {data &&
        data.hits.map((image) => <ImageResult key={image.id} image={image} />)}
    </Stack>
  )
}

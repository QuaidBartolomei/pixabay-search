import { Box, Grid } from '@mui/material'
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
    <Box
      sx={{
        p: 2,
        overflowY: 'auto',
        width: '100%',
      }}
    >
      <Grid container spacing={2}>
        {data.hits.map((image) => (
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            item
            xs={4}
          >
            <ImageResult key={image.id} image={image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

import Box from '@mui/material/Box'
import ImageResultData from 'interfaces/ImageResultData'
import Image from 'next/image'

export default function ImageResult({ image }: { image: ImageResultData }) {
  return (
    <Box
      sx={
        {
          //
        }
      }
    >
      <Image src={image.previewURL} width={200} height={200} />
    </Box>
  )
}

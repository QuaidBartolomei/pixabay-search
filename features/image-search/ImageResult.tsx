import Box from '@mui/material/Box'
import Image from 'next/image'
import ImageResultData from 'interfaces/ImageResultData'

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

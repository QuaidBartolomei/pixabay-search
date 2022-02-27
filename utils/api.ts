import axios from 'axios'
import ImageResultData from 'interfaces/ImageResultData'

const host = 'api/images'

type Data = {
  hits: ImageResultData[]
}

export async function queryApi(q: string): Promise<Data> {
  const res = await axios.get(host, { params: { q } })
  return res.data
}

import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

const key = process.env.API_KEY
const host = 'https://pixabay.com/api/'

export default async function endpoint(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  const { query } = request
  const { q = '' } = query

  try {
    const res = await axios.get(host, { params: { key, q } })
    console.log(key, q, host)
    return response.status(res.status).json(res.data)
  } catch (err) {
    return response.status(400).send(err)
  }
}

import mockServer from 'mocks/server'
import { queryApi } from './api'

beforeAll(() => {
  mockServer.listen()
})

afterAll(() => {
  mockServer.close()
})

it('test', async () => {
  const query = ''
  const data = await queryApi(query)
  expect(data).toBeTruthy()
  expect(data.hits).toBeTruthy()
  expect(data.hits.map).toBeDefined()
})

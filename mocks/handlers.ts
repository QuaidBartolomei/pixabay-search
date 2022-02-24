import { rest } from 'msw'
import exampleData from './data.json'

const handlers = [
  rest.get('*/api*', (req, res, ctx) =>
    res(ctx.status(200, 'success'), ctx.json(exampleData)),
  ),
]

export default handlers

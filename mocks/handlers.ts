import { rest } from 'msw'
import exampleData from './data.json'

export const handlers = [
  rest.get('*/api*', (req, res, ctx) =>
    res(ctx.status(200, 'success'), ctx.json(exampleData)),
  ),
]

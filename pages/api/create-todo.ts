import { NextApiRequest, NextApiResponse } from 'next'
import { Todos } from '../../lib/TodosClass'
import Cors from 'cors'

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD', 'OPTIONS'],
  origin: "*",
})

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {

  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}


export default async function POST(req:NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors)
  const body = req.body
  Todos.createTodo(body)
  return res.send(200)
}

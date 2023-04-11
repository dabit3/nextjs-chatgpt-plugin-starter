import { NextApiResponse, NextApiRequest } from "next"
import { Todos } from '../../lib/TodosClass'

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  return res.json({
    todos: Todos.getTodos()
  })
}
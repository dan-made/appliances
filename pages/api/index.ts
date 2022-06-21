import type { NextApiRequest, NextApiResponse } from 'next'
import { Product, products } from '~/lib/products'

type Response = {
  products: Product[]
}

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Response>
) {
  res.status(200).json({ products })
}

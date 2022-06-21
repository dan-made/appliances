import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import { Product } from '~/lib/products'
import { useEffect, useState } from 'react'

const Page: NextPage = () => {
  const [products, setProducts] = useState([] as Product[])

  // useEffect(() => {
  //   fetch('/api')
  // }, [])

  return <div className='container mx-auto'>
    <Head>
      <title>An Appliance Company</title>
    </Head>
    <div className='p-4 text-2xl md:text-5xl font-bold'>An Appliance Company</div>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      {products.map(product => <div key={`product-${product.id}`}>
      </div>)}
    </div>
  </div>
}

export default Page

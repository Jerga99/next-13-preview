"use client"

import useSWR from 'swr';

const fetcher = (path) => fetch(`https://product-app-101-server.vercel.app/${path}`).then(r => r.json())

export default function ProductList() {
  const products = useSWR("api/products", fetcher);

  return (
    <>
      <h1>
      Hi There Page
      </h1>
      <div>
        { products.data?.map((product) => 
          <div key={product.name}>
            {product.name}
          </div>
        )}
      </div>
    </>
  )
}

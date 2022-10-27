

// With this new model, we recommend fetching data directly inside 
//the component that needs it instead of passing data down as props to 
//children components, even if you're requesting the same data in 
// multiple components.

import Link from "next/link";
import { use } from "react";

// equvalent to getStaticProps
async function getProducts() {
  const res = await fetch("https://product-app-101-server.vercel.app/api/products", { cache: 'no-store' });
  return res.json();
}

export default function ProductsPage() {
  const products = use(getProducts());

  return (
    <div className="page">
      <h1>Hi there: Products Page</h1>
      <div>
        { products.map(product =>
          <div key={product.name} >
            <Link 
              href={`/products/${product.name.replace(/\s+/g, '-').toLowerCase()}`}>
              {product.name}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

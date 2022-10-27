

// With this new model, we recommend fetching data directly inside 
//the component that needs it instead of passing data down as props to 
//children components, even if you're requesting the same data in 
// multiple components.

import { use } from "react";

// equvalent to getStaticProps
async function getProducts() {
  const res = await fetch("https://product-app-101-server.vercel.app/api/products");
  return res.json();
}

export default function ProductsPage() {
  const products = use(getProducts());

  return (
    <div className="page">
      <h1>Hi there: Products Page</h1>
      <div>
        { products.map(product =>
          <div key={product.name}>
            {product.name}
          </div>
        )}
      </div>
    </div>
  )
}

import Layout from "../components/Layout";
import Product from "../components/Product";
import { data } from "../lib/data";


export default function Home() {

  return (
    <>
      <Layout>
        <div className="home-main p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            data.products.map((product) => {
              console.log(product)
              return (
                <Product key={product.id} productData={product} />
              )
            })
          }
        </div>
      </Layout>
    </>
  );
}
